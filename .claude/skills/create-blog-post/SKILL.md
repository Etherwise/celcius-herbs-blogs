---
name: create-blog-post
description: Scaffold and deploy a new Celsius Herbs blog post end-to-end. Use when the user wants to create, add, scaffold, write, or generate a new blog post or blog article in this Astro framework. Runs keyword research, content research, drafting, image generation, file scaffolding, and preview deploy. Pauses once for the user to optimize the draft in SurferSEO manually.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep, mcp__ahrefs__keywords-explorer-overview, mcp__ahrefs__keywords-explorer-matching-terms, mcp__ahrefs__subscription-info-limits-and-usage
---

# Create Celsius Herbs Blog Post

Walks the user through a 7-stage pipeline that produces a fully-optimized, image-rich blog post and deploys it to a Cloudflare Pages preview URL for human review.

## Stages

0. **Pre-flight validation** — env keys, Ahrefs MCP, working directory
1. **Keyword research** — Ahrefs MCP
2. **Content research** — OpenRouter → Perplexity (sonar-pro)
3. **Draft article** — Claude writes the article (no external API)
4. **PAUSE — SurferSEO** — user runs the draft through Surfer manually, pastes optimized version back
5. **Image generation** — 5 brand-consistent images via Gemini 3.1 Flash Image Preview (NanoBanana)
6. **Scaffold framework files** — 4 files into the Astro framework + 8 hard guarantees
7. **Deploy preview URL** — push `preview/<slug>` branch, output Cloudflare URL, STOP

The skill never auto-publishes. Stage 7 stops at a preview URL for human review (Dr. Alex / Rick's team) before any production merge.

## Working directory

Every run uses `/tmp/celsius-skill/<topic-slug>/` to stage intermediate outputs. Failures leave a trail there for debugging.

[Stage details below — each section is a step the skill must execute in order.]

---

## Stage 0 — Pre-flight Validation

Run this BEFORE touching anything. Fails fast on missing config — never consume API credits if `.env` isn't ready.

### 0.1 — Load `.env` and check required keys

Run this Bash:

```bash
cd "$(git rev-parse --show-toplevel)"  # ensure we are at the framework root

if [ ! -f .env ]; then
  echo "❌ No .env file found at the framework root."
  echo "→ Copy .env.example to .env and fill in the keys."
  echo "→ See QUICKSTART.md → 'Setting up the AI blog skill'"
  exit 1
fi

set -a
source .env
set +a

# zsh-safe key validation (avoid ${!var} indirect expansion — bash-only).
missing=()

if [ -z "$OPENROUTER_API_KEY" ] || [[ "$OPENROUTER_API_KEY" == *"your_"*"_here" ]]; then
  missing+=("OPENROUTER_API_KEY")
fi

if [ -z "$GEMINI_API_KEY" ] || [[ "$GEMINI_API_KEY" == *"your_"*"_here" ]]; then
  missing+=("GEMINI_API_KEY")
fi

if [ ${#missing[@]} -gt 0 ]; then
  echo "❌ Missing required env vars: ${missing[*]}"
  echo "→ Open .env and fill in real values."
  echo "→ See QUICKSTART.md → 'Setting up the AI blog skill' for where to get each key."
  exit 1
fi

echo "✓ env keys loaded (2 required keys present)"
```

If this exits non-zero, STOP the skill. Tell the user the missing key(s) and instruct them to fix `.env`, then re-run.

### 0.2 — Verify Ahrefs MCP is responding

Call the MCP tool `mcp__ahrefs__subscription-info-limits-and-usage` (zero-cost probe). If it returns an error or doesn't respond, STOP and tell the user:

> "Ahrefs MCP isn't responding. Check `~/.claude.json` to confirm the Ahrefs MCP key is configured. If it's missing, contact whoever set up your Claude Code environment."

### 0.3 — Verify git working tree is clean

```bash
if [ -n "$(git status --porcelain)" ]; then
  echo "⚠️ Working tree has uncommitted changes."
  echo "Recommended: commit or stash them before running the skill."
  echo "Continuing anyway — the skill will create a new preview branch from current HEAD."
fi
```

(This is a warning, not a hard exit. The user can proceed if they accept it.)

### 0.4 — Set up the working directory

Will happen in Stage 1 once we have the slug. Stage 0 just verifies keys + MCP.

```
✓ Stage 0 complete
```

---

## Stage 1 — Keyword Research (Ahrefs MCP)

### 1.1 — Get topic from the user

If the user's initial prompt didn't include a clear topic, ask:

> "What's the topic for the blog post? (e.g., 'dog acid reflux home remedy', 'cat ear mites'). Be specific — the more focused the topic, the better the keyword research."

Capture as `USER_TOPIC`.

### 1.2 — Compute the URL slug

Derive `SLUG` from `USER_TOPIC`: lowercase, replace spaces with hyphens, strip punctuation, max 6 words.

Examples:
- `"Dog Acid Reflux Home Remedy"` → `dog-acid-reflux-home-remedy`
- `"Cat Ear Mites"` → `cat-ear-mites`
- `"How to Treat Probiotics for Dogs"` → `probiotics-for-dogs`

### 1.3 — Detect if this is a pet article

Set `IS_PET_ARTICLE=true` if `USER_TOPIC` contains any of: `dog`, `dogs`, `cat`, `cats`, `puppy`, `puppies`, `kitten`, `kittens`, `pet`, `pets`, `feline`, `canine`. Otherwise `false`. This controls whether `<ReviewedByDrAlex />` is included in Stage 6.

### 1.4 — Set up the working directory

```bash
SLUG="<computed slug>"
mkdir -p /tmp/celsius-skill/$SLUG/images
cat > /tmp/celsius-skill/$SLUG/metadata.json <<EOF
{
  "slug": "$SLUG",
  "topic": "<USER_TOPIC>",
  "is_pet_article": <true|false>,
  "started_at": "$(date -Iseconds)",
  "current_stage": 1
}
EOF
echo "✓ working dir ready: /tmp/celsius-skill/$SLUG/"
```

### 1.5 — Call Ahrefs MCP for keyword overview

Call the tool `mcp__ahrefs__keywords-explorer-overview` with these inputs:
- `keywords`: the user's topic, in an array. E.g. `["dog acid reflux home remedy"]`
- `country`: `"us"`
- `select`: `["volume", "difficulty", "cpc", "intent", "global_volume", "parent_topic"]` (or use defaults if these aren't directly supported — fall back to what the MCP returns)

Parse the response and pull:
- `primary_keyword`: the exact keyword from the response (may differ slightly from user input)
- `search_volume`
- `keyword_difficulty`
- `parent_topic`
- `search_intent` (informational / commercial / transactional / navigational)
- `cpc` (optional, for prioritization)

### 1.6 — Call Ahrefs MCP for related terms

Call `mcp__ahrefs__keywords-explorer-matching-terms` with:
- `keywords`: `[primary_keyword]`
- `country`: `"us"`
- `match_type`: `"terms"` (broader related-terms variant if available)
- `limit`: `50`
- `volume_from`: `100` (filter out near-zero-volume noise)
- `difficulty_to`: `30` (favor easier targets)

From the response:
- Pick **5–10 secondary keywords** with the highest combined `volume / difficulty` ratio
- Use a subset of these to suggest **5–8 H2 section topics** (e.g. cluster the secondaries into themes)

### 1.7 — Determine word count target

Based on parent topic & intent:
- Informational + KD < 10: target 1500–2000 words
- Informational + KD 10–30: target 2000–2500 words
- Hub / commercial / KD > 30: target 3000+ words

If unsure, default to **2000**.

### 1.8 — Write `research.json`

```bash
cat > /tmp/celsius-skill/$SLUG/research.json <<JSON
{
  "user_topic": "<USER_TOPIC>",
  "url_slug": "$SLUG",
  "primary_keyword": "<from 1.5>",
  "secondary_keywords": ["<kw1>", "<kw2>", "..."],
  "search_volume": <number>,
  "keyword_difficulty": <number>,
  "parent_topic": "<from 1.5>",
  "search_intent": "<from 1.5>",
  "recommended_word_count": <from 1.7>,
  "suggested_h2_topics": ["<topic1>", "<topic2>", "..."],
  "is_pet_article": <true|false>
}
JSON
```

Validate it's well-formed JSON:

```bash
python3 -c "import json; json.load(open('/tmp/celsius-skill/$SLUG/research.json'))" \
  && echo "✓ research.json well-formed" \
  || { echo "❌ research.json malformed"; exit 1; }
```

### 1.9 — Report to user

```
✓ Stage 1 complete

  Topic:               <USER_TOPIC>
  Slug:                <SLUG>
  Primary keyword:     <primary_keyword>
  Search volume:       <volume>/mo
  KD:                  <difficulty>
  Intent:              <intent>
  Word count target:   <word_count>
  Pet article?         <yes/no — affects Dr. Alex block in Stage 6>

  Secondary keywords (top 5-10):
    - <kw1>
    - <kw2>
    ...

  Suggested H2 sections:
    - <topic1>
    - <topic2>
    ...

  Output: /tmp/celsius-skill/<slug>/research.json
```

### Failure handling

- **Ahrefs MCP timeout / quota exhausted** → stop and tell the user. Optionally let them provide keyword data manually as a fallback (`{"primary_keyword": "...", "search_volume": ..., ...}` pasted directly).
- **Topic too broad** (no clear primary keyword) → ask the user to narrow it (e.g. `"dog health"` → `"dog acid reflux home remedy"`).

---

## Stage 2 — Content Research (OpenRouter → Perplexity)

### 2.1 — Read research.json

```bash
RESEARCH_PATH="/tmp/celsius-skill/$SLUG/research.json"

USER_TOPIC=$(python3 -c "import json; print(json.load(open('$RESEARCH_PATH'))['user_topic'])")
PRIMARY=$(python3 -c "import json; print(json.load(open('$RESEARCH_PATH'))['primary_keyword'])")
SECONDARY=$(python3 -c "import json; print(', '.join(json.load(open('$RESEARCH_PATH'))['secondary_keywords']))")
```

### 2.2 — Load the prompt template

Read `.claude/skills/create-blog-post/reference/research-prompts.md`. Extract the **system prompt** (the first code block under `## System prompt`) and the **user prompt template** (the code block under `## User prompt`).

In the user prompt, substitute:
- `<USER_TOPIC>` → `$USER_TOPIC`
- `<PRIMARY_KEYWORD>` → `$PRIMARY`
- `<SECONDARY_KEYWORDS>` → `$SECONDARY`

### 2.3 — Build the API request

```bash
WORK_DIR="/tmp/celsius-skill/$SLUG"

# Build the JSON request body using python (avoid shell-quoting hell with multi-line strings)
python3 <<PY > "$WORK_DIR/request.json"
import json, os
system_prompt = """<paste system prompt content here>"""
user_prompt = """<paste filled user prompt here>"""
body = {
    "model": "perplexity/sonar-pro",
    "messages": [
        {"role": "system", "content": system_prompt},
        {"role": "user",   "content": user_prompt},
    ],
    "max_tokens": 4000,
    "temperature": 0.3,
}
print(json.dumps(body))
PY
```

(Claude executes this — substitutes the actual prompt strings into the python heredoc at run-time.)

### 2.4 — Call OpenRouter

```bash
curl -sS -X POST "https://openrouter.ai/api/v1/chat/completions" \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -H "HTTP-Referer: https://blog.celsiusherbs.com" \
  -H "X-Title: Celsius Herbs Blog Skill" \
  -d @"$WORK_DIR/request.json" \
  > "$WORK_DIR/perplexity-raw.json"
```

The `HTTP-Referer` and `X-Title` headers are OpenRouter convention — they show up in OpenRouter's dashboard so Rick can see which app is making calls.

### 2.5 — Extract content + handle errors

```bash
python3 <<PY
import json, sys

raw = json.load(open("$WORK_DIR/perplexity-raw.json"))

if "error" in raw:
    print(f"❌ OpenRouter error: {raw['error']}", file=sys.stderr)
    sys.exit(1)

if "choices" not in raw or not raw["choices"]:
    print(f"❌ Unexpected response shape: {json.dumps(raw)[:400]}", file=sys.stderr)
    sys.exit(1)

content = raw["choices"][0]["message"]["content"]

with open("$WORK_DIR/perplexity-research.md", "w") as f:
    f.write(content)

# Quick quality probe
words = len(content.split())
citations = content.count("[Source:")
print(f"✓ Wrote {words} words, {citations} citations to perplexity-research.md")

if words < 500:
    print(f"⚠️ Research is short ({words} words). Consider re-running Stage 2.", file=sys.stderr)
if citations < 3:
    print(f"⚠️ Few citations ({citations}). Quality may be weak.", file=sys.stderr)
PY
```

### 2.6 — On API failure

If `curl` fails (non-2xx) or extraction reports error:
- Wait 5 seconds
- Retry once
- If retry fails, STOP and report to user. Don't proceed to Stage 3 without research notes.

Common failure modes:
- `401` → bad API key. Check `$OPENROUTER_API_KEY`.
- `429` → rate limit. Wait + retry, OR ask user to wait a few minutes.
- `5xx` → OpenRouter side. Wait + retry, then fail.

### 2.7 — Update metadata + report

```bash
python3 -c "
import json
m = json.load(open('/tmp/celsius-skill/$SLUG/metadata.json'))
m['current_stage'] = 2
json.dump(m, open('/tmp/celsius-skill/$SLUG/metadata.json', 'w'), indent=2)
"

echo "
✓ Stage 2 complete

  Sources from:  OpenRouter → perplexity/sonar-pro
  Output:        /tmp/celsius-skill/$SLUG/perplexity-research.md
  Words:         <from extraction>
  Citations:     <from extraction>
"
```

---

## Stage 3 — Draft Article

This stage uses Claude (the runtime) as the writer. No external API.

### 3.1 — Read all inputs

```bash
WORK_DIR="/tmp/celsius-skill/$SLUG"
```

Use the Read tool to load:
- `$WORK_DIR/research.json` — keyword data + word-count target + is_pet_article flag
- `$WORK_DIR/perplexity-research.md` — sourced facts to weave in
- `.claude/skills/create-blog-post/reference/article-structure.md` — the structure rules

Also read the existing cat-ear post for tone reference:
- `src/views/blog/CatEarInfectionGuide.tsx` — same voice + structure target

### 3.2 — Write the article

Draft the full article in markdown directly to `$WORK_DIR/draft.md` using the Write tool. Apply ALL rules from `reference/article-structure.md`:

**Must contain:**
- A YAML frontmatter block (title, description, canonical, ogType, ogImage, is_pet_article, primary_keyword)
- Hero intro (2–3 paragraphs, direct answer within first 100 words, primary keyword in first 100 words)
- Table of contents (static, bulleted list of H2s)
- 5–8 body H2 sections (`## Chapter NN — Title` format)
- Exactly 5 `[IMAGE: <name> | <prompt>]` placeholders distributed across the article
- FAQ section with 5–8 `**Q:** ... A: ...` pairs
- References section with numbered citations from the Perplexity research
- A "Final CTA" section linking to `/ear-infection-drops` (or another appropriate PDP)

**Keyword placement (verify before finishing):**
- Primary keyword in: title, description, first 100 words, ≥2 H2s, ≥1 FAQ
- Secondary keywords distributed naturally
- Inline `[Source: ...]` citations every 2–3 paragraphs

**Word count:** Match `recommended_word_count` from `research.json` (±15%). Default 2000.

**Voice:** Match the cat-ear post — direct, plainspoken, empathy-led, no AI-isms.

### 3.3 — Validate the draft

```bash
DRAFT="$WORK_DIR/draft.md"

WORDS=$(wc -w < "$DRAFT")
H2_COUNT=$(grep -c "^## " "$DRAFT")
IMG_COUNT=$(grep -c "^\[IMAGE:" "$DRAFT")
FAQ_COUNT=$(grep -c "^\*\*Q:" "$DRAFT")
CITATION_COUNT=$(grep -oc "\[Source:" "$DRAFT")

# Pull frontmatter values
TITLE=$(grep '^title:' "$DRAFT" | head -1 | sed 's/^title: *//; s/^"//; s/"$//')
DESC=$(grep '^description:' "$DRAFT" | head -1 | sed 's/^description: *//; s/^"//; s/"$//')

echo "Words:        $WORDS  (target from research.json)"
echo "H2 sections:  $H2_COUNT  (target 5-8 + TOC + FAQ + References + Final CTA = ~8-11 total ##)"
echo "Image tags:   $IMG_COUNT  (REQUIRED: exactly 5)"
echo "FAQs:         $FAQ_COUNT  (target 5-8)"
echo "Citations:    $CITATION_COUNT"
echo "Title len:    ${#TITLE} chars (limit 60)"
echo "Desc len:     ${#DESC} chars (limit 155)"

# Hard fails
[ "$IMG_COUNT" -ne 5 ] && { echo "❌ Expected exactly 5 [IMAGE:] tags, got $IMG_COUNT. Re-draft."; exit 1; }
[ "$FAQ_COUNT" -lt 5 ] && { echo "❌ Need at least 5 FAQs, got $FAQ_COUNT."; exit 1; }
[ ${#TITLE} -gt 60 ] && { echo "❌ Title too long: ${#TITLE} chars (>60)."; exit 1; }
[ ${#DESC} -gt 155 ] && { echo "❌ Description too long: ${#DESC} chars (>155)."; exit 1; }
[ "$WORDS" -lt 1200 ] && { echo "❌ Draft too short: $WORDS words (<1200)."; exit 1; }

echo "✓ Draft validation passed"
```

If any hard fail triggers, re-draft (don't move to Stage 4). If a non-fatal warning surfaces (e.g. citation count low), Claude can re-draft or move on at the user's discretion.

### 3.4 — Update metadata + report

```bash
python3 -c "
import json
m = json.load(open('/tmp/celsius-skill/$SLUG/metadata.json'))
m['current_stage'] = 3
json.dump(m, open('/tmp/celsius-skill/$SLUG/metadata.json', 'w'), indent=2)
"

echo "
✓ Stage 3 complete

  Title:        <title>
  Words:        <words>
  Sections:     <h2 count>
  FAQs:         <faq count>
  Image tags:   <img count> (must be 5)
  Citations:    <citation count>
  Output:       /tmp/celsius-skill/$SLUG/draft.md
"
```

---

## Stage 4 — PAUSE for SurferSEO

This is a **manual checkpoint**. The skill stops execution and waits for the user.

### 4.1 — Output instructions to the user

```
─────────────────────────────────────────────────────────────────────
SURFERSEO STEP — MANUAL

The draft is ready at:
  /tmp/celsius-skill/<SLUG>/draft.md

Steps:
  1. Open SurferSEO Content Editor: https://app.surferseo.com
  2. Create a new Content Editor query targeting: "<PRIMARY_KEYWORD>"
  3. Open draft.md, copy its full contents (Cmd+A, Cmd+C)
  4. Paste into Surfer's editor
  5. Optimize until score ≥80:
     - Apply Surfer's suggested terms where they fit naturally
     - Hit the word-count target
     - Don't sacrifice readability for score
  6. When done, copy the optimized text
  7. Paste it back into this conversation as your next message

I'll wait for your paste.
─────────────────────────────────────────────────────────────────────
```

### 4.2 — Wait for the user's paste

Stop and wait. The user's next message should contain the optimized draft (likely a large markdown block).

When it arrives, save the contents using the Write tool:
- Path: `/tmp/celsius-skill/$SLUG/draft-optimized.md`
- Content: the user's paste, verbatim

### 4.3 — Quality probe on the pasted content

```bash
DRAFT_OPT="/tmp/celsius-skill/$SLUG/draft-optimized.md"

OPT_WORDS=$(wc -w < "$DRAFT_OPT")
OPT_IMG=$(grep -c "^\[IMAGE:" "$DRAFT_OPT")
OPT_FAQ=$(grep -c "^\*\*Q:" "$DRAFT_OPT")

# Compare to pre-Surfer draft
ORIG_IMG=$(grep -c "^\[IMAGE:" "/tmp/celsius-skill/$SLUG/draft.md")
ORIG_FAQ=$(grep -c "^\*\*Q:" "/tmp/celsius-skill/$SLUG/draft.md")

echo "Optimized words: $OPT_WORDS"
echo "Image tags:      $OPT_IMG  (was $ORIG_IMG)"
echo "FAQs:            $OPT_FAQ  (was $ORIG_FAQ)"

if [ "$OPT_WORDS" -lt 800 ]; then
  echo "⚠️  Optimized draft seems short ($OPT_WORDS words). Did you paste the FULL optimized text?"
  echo "    Confirm before we proceed."
fi

if [ "$OPT_IMG" -lt "$ORIG_IMG" ]; then
  echo "⚠️  Image tags dropped from $ORIG_IMG → $OPT_IMG during Surfer edit."
  echo "    Stage 5 will only generate images for the tags that remain."
fi

if [ "$OPT_FAQ" -lt 3 ]; then
  echo "⚠️  Only $OPT_FAQ FAQs in optimized draft. FAQPage schema needs at least a few."
fi
```

Warnings are non-fatal. The user confirms whether to proceed.

### 4.4 — Update metadata + report

```bash
python3 -c "
import json
m = json.load(open('/tmp/celsius-skill/$SLUG/metadata.json'))
m['current_stage'] = 4
json.dump(m, open('/tmp/celsius-skill/$SLUG/metadata.json', 'w'), indent=2)
"

echo "
✓ Stage 4 complete

  Optimized draft saved: /tmp/celsius-skill/$SLUG/draft-optimized.md
  Words: $OPT_WORDS
  Ready to proceed to Stage 5 (image generation)?
"
```

---

## Stage 5 — Image Generation (Gemini / NanoBanana)

**[STUB — implemented in Task 4.2]**

Parse image tags from `draft-optimized.md`. For each, call Gemini's `gemini-3.1-flash-image-preview` model with a style-guide-constrained prompt. Save each `.webp` directly to `src/assets/blog/<slug>-<name>.webp`.

```
✓ Stage 5 complete (STUB)
```

---

## Stage 6 — Scaffold Framework Files

**[STUB — implemented in Task 4.3]**

Read cat-ear-infection files as live templates. Generate 4 new files (page, view, island, faqs) with new content. Apply 8 hard guarantees (slug consistency, build validation, etc.).

```
✓ Stage 6 complete (STUB)
```

---

## Stage 7 — Deploy Preview URL

**[STUB — implemented in Task 5.2]**

Create `preview/<slug>` branch, commit generated files, push. GitHub Actions deploys to Cloudflare preview. Skill outputs URL and STOPS.

```
✓ Stage 7 complete (STUB)
PREVIEW URL: <url>
```

---

## End

The skill exits here. The user (or Dr. Alex) reviews the preview URL. If approved, they merge the `preview/<slug>` branch to main → existing main workflow ships it to production.

The skill never auto-publishes.
