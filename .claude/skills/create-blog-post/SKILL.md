---
name: create-blog-post
description: Scaffold and deploy a new Celsius Herbs blog post end-to-end. Use when the user wants to create, add, scaffold, write, or generate a new blog post or blog article in this Astro framework. Runs keyword research, content research, drafting, an automated SurferSEO term-optimization loop (optimizes the draft against Surfer's ranking-term database until coverage clears the threshold), image generation, file scaffolding, and preview deploy. Fully hands-off when SURFER_API_KEY is configured; when it is not set, Surfer optimization is skipped and the draft ships as-is.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep, mcp__ahrefs__keywords-explorer-overview, mcp__ahrefs__keywords-explorer-matching-terms, mcp__ahrefs__subscription-info-limits-and-usage
---

# Create Celsius Herbs Blog Post

Walks the user through an 8-stage pipeline that produces a fully-optimized, image-rich blog post, deploys it to a Cloudflare Pages preview URL, and auto-scores it through SurferSEO (with a revision loop) before handing back for human review.

## Stages

0. **Pre-flight validation** — env keys, Ahrefs MCP, working directory, optional Surfer key
1. **Keyword research** — Ahrefs MCP
2. **Content research** — OpenRouter → Perplexity (sonar-pro)
3. **Draft article** — Claude writes the article (no external API)
4. **SurferSEO term optimization** — only runs when `SURFER_API_KEY` is set. Fetches Surfer's ranking-term database, scores the draft's term coverage, and loops (revise → re-score) until coverage clears the threshold (default 70) or guardrails fire. When no key, passthrough.
5. **Image generation** — 5 brand-consistent images via Gemini 3.1 Flash Image Preview (NanoBanana)
6. **Scaffold framework files** — 4 files into the Astro framework + 8 hard guarantees
7. **Deploy preview URL** — push `preview/<slug>` branch, output the Cloudflare preview URL, STOP

The skill never auto-publishes. Stage 7 always stops at a preview URL for human review (Dr. Alex / Rick's team) before any production merge.

## Working directory

Every run uses `/tmp/celsius-skill/<topic-slug>/` to stage intermediate outputs. Failures leave a trail there for debugging.

## Error handling (skill-wide)

- Every stage exits non-zero on hard failures
- Working files are preserved at `/tmp/celsius-skill/<slug>/` for inspection — never auto-cleaned
- If a stage fails, the next run can resume by jumping to that stage (check `metadata.json` `current_stage`)
- API errors (Perplexity / Gemini) get one automatic retry with 5s backoff before failing
- Build failure at Stage 6 ALWAYS halts the pipeline — never deploy a non-building post

## Cost expectations per run

- Stage 1 Ahrefs: ~50-100 units against the configured Ahrefs MCP quota
- Stage 2 Perplexity (via OpenRouter): ~$0.01–0.05
- Stage 5 Gemini (5 images): ~$0.10–0.20
- Stage 4 SurferSEO term optimization: counts against the Surfer plan's API quota (~1 Content Editor query per run; the revision loop re-scores locally, no extra Surfer calls)
- **Total per blog post: ~$0.15–0.30** in pay-as-you-go costs + Surfer plan usage

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

# Optional Surfer key — when set, the Surfer term-optimization loop (Stage 4)
# runs automatically after drafting and before images/deploy. When absent, the
# draft ships without Surfer optimization. There is no manual Surfer step.
if [ -n "$SURFER_API_KEY" ] && [[ "$SURFER_API_KEY" != *"your_"*"_here" ]]; then
  SURFER_MODE="automated"
  echo "✓ env keys loaded (2 required + SURFER_API_KEY → Surfer term optimization will run at Stage 4)"
else
  SURFER_MODE="manual"
  echo "✓ env keys loaded (2 required; no SURFER_API_KEY → Surfer optimization skipped, draft ships as-is)"
fi
export SURFER_MODE
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

If any hard fail triggers, re-draft (don't move to Stage 5). If a non-fatal warning surfaces (e.g. citation count low), Claude can re-draft or move on at the user's discretion.

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

## Stage 4 — SurferSEO Term Optimization

Optimizes the draft against SurferSEO's real ranking-term database **before**
images and deploy. This is a text operation, so it belongs here (right after
drafting) — not after deploy.

**Important — what the Surfer API can and cannot do.** Surfer's public API does
NOT expose the browser Content Editor score for your content (there is no way to
submit content and get the 0–100 "Surfer score" back), and the Audit endpoint's
score is a different, harsher metric where even #1-ranked pages sit around 50. So
this stage does NOT chase the browser score. Instead it uses the one genuinely
useful thing the API exposes — `GET /content_editors/:id/terms`, the full term
database (300+ terms, each with a target usage range) — and optimizes the draft
to cover those terms within range. That is what actually drives rankings.

The score reported here is a **weighted term-coverage score** (0–100), computed by
`surfer-coverage.py` from Surfer's real term targets. It correlates with the
browser score but is its own number. Default threshold is 70.

### 4.0 — Branch on SURFER_MODE

```bash
WORK="/tmp/celsius-skill/$SLUG"
SURFER_SCORE_THRESHOLD="${SURFER_SCORE_THRESHOLD:-70}"
SURFER_MAX_ITERATIONS="${SURFER_MAX_ITERATIONS:-4}"

if [ "$SURFER_MODE" != "automated" ]; then
  cp "$WORK/draft.md" "$WORK/draft-optimized.md"
  echo "✓ Stage 4 skipped (no SURFER_API_KEY) — draft.md → draft-optimized.md passthrough"
  # Proceed directly to Stage 5.
fi
```

If `SURFER_MODE=automated`, continue below. Otherwise jump to Stage 5.

### 4.1 — Fetch Surfer's term database

```bash
PRIMARY=$(python3 -c "import json; print(json.load(open('$WORK/research.json'))['primary_keyword'])")

python3 .claude/skills/create-blog-post/surfer-coverage.py fetch-terms \
  --keyword "$PRIMARY" \
  --out "$WORK/surfer-terms.json"
```

This creates a Content Editor query, waits for the SERP analysis (~60–90s), and
saves the term database. On failure (bad key / quota), fall back to passthrough:
`cp "$WORK/draft.md" "$WORK/draft-optimized.md"` and proceed to Stage 5.

### 4.2 — Seed the working draft + score it

```bash
cp "$WORK/draft.md" "$WORK/draft-optimized.md"

python3 .claude/skills/create-blog-post/surfer-coverage.py score \
  --terms "$WORK/surfer-terms.json" \
  --draft "$WORK/draft-optimized.md" \
  --top 25 > "$WORK/coverage.json"

SCORE=$(python3 -c "import json; print(json.load(open('$WORK/coverage.json'))['score'])")
SCORE_HISTORY="$SCORE"
echo "Initial coverage score: $SCORE / 100 (threshold: $SURFER_SCORE_THRESHOLD)"
```

### 4.3 — Revision loop

Repeat the block below while ALL are true:
- `SCORE < SURFER_SCORE_THRESHOLD`
- `ITERATION < SURFER_MAX_ITERATIONS`
- last iteration moved the score by ≥ 2 points (no plateau)

Each pass: Claude reads the `under` list from `coverage.json` (terms below target,
with `have → min` counts), revises `draft-optimized.md` to naturally work those
terms in at roughly their target frequency, then re-scores.

```bash
ITERATION=0
while [ "$SCORE" -lt "$SURFER_SCORE_THRESHOLD" ] && [ "$ITERATION" -lt "$SURFER_MAX_ITERATIONS" ]; do
  ITERATION=$((ITERATION + 1))
  PREV_SCORE="$SCORE"
  echo "─── Iteration $ITERATION / $SURFER_MAX_ITERATIONS — score $SCORE, target $SURFER_SCORE_THRESHOLD ───"

  # Claude (the runtime) now performs the revision:
  #   1. Read $WORK/coverage.json — the "under" array lists each under-target
  #      term with {term, have, min, max, weight, in_heading}.
  #   2. Read $WORK/draft-optimized.md.
  #   3. Revise the BODY PROSE to weave in the under-target terms at roughly
  #      their target counts. Prioritize high-weight terms and in_heading=true
  #      terms (work those into H2/H3 headings where natural).
  #   4. DO NOT touch: the YAML frontmatter, the [IMAGE: ...] tags (exact count
  #      + names must survive), or the number of FAQs.
  #   5. Keep it readable — never keyword-stuff past the term's max.
  #   6. Write the revised draft over $WORK/draft-optimized.md.

  # Re-score
  python3 .claude/skills/create-blog-post/surfer-coverage.py score \
    --terms "$WORK/surfer-terms.json" \
    --draft "$WORK/draft-optimized.md" \
    --top 25 > "$WORK/coverage.json"
  SCORE=$(python3 -c "import json; print(json.load(open('$WORK/coverage.json'))['score'])")
  SCORE_HISTORY="$SCORE_HISTORY → $SCORE"
  echo "  iteration $ITERATION score: $SCORE (was $PREV_SCORE; Δ $((SCORE - PREV_SCORE)))"

  # Plateau guardrail
  DELTA=$((SCORE - PREV_SCORE))
  if [ "$DELTA" -lt 2 ]; then
    echo "  ⚠ plateau (Δ $DELTA) — stopping the loop early."
    break
  fi
done
```

### 4.4 — Update metadata + report

```bash
python3 -c "
import json
m = json.load(open('$WORK/metadata.json'))
m['current_stage'] = 4
m['surfer_coverage_final'] = $SCORE
m['surfer_iterations'] = $ITERATION
m['surfer_score_history'] = '$SCORE_HISTORY'
m['surfer_threshold'] = $SURFER_SCORE_THRESHOLD
json.dump(m, open('$WORK/metadata.json', 'w'), indent=2)
"

if [ "$SCORE" -ge "$SURFER_SCORE_THRESHOLD" ]; then
  RESULT="✓ THRESHOLD MET"
else
  RESULT="⚠ stopped below threshold (plateau or max iterations)"
fi

echo "
✓ Stage 4 complete — $RESULT

  Surfer term coverage: $SCORE_HISTORY  / 100  (threshold: $SURFER_SCORE_THRESHOLD)
  Iterations:           $ITERATION
  Optimized draft:      $WORK/draft-optimized.md

  Note: this is a term-COVERAGE score against Surfer's ranking term database,
  not the browser Content Editor score (which the API does not expose). The
  optimized draft now covers Surfer's target terms — that's what moves rankings.
"
```

---

## Stage 5 — Image Generation (Gemini / NanoBanana)

### 5.1 — Verify Pillow is available

The skill converts Gemini's JPEG output to WebP using Python Pillow.

```bash
python3 -c "from PIL import Image" 2>/dev/null \
  || { echo "❌ Pillow not installed. Run: python3 -m pip install Pillow"; exit 1; }
echo "✓ Pillow available"
```

### 5.2 — Parse image tags from the optimized draft

```bash
WORK_DIR="/tmp/celsius-skill/$SLUG"
DRAFT_OPT="$WORK_DIR/draft-optimized.md"

python3 <<PY > "$WORK_DIR/image-tags.json"
import re, json
content = open("$DRAFT_OPT").read()
tags = re.findall(r'\[IMAGE:\s*([a-z0-9-]+)\s*\|\s*(.+?)\]', content, re.IGNORECASE)
out = [{"name": name.strip(), "prompt_seed": prompt.strip()} for name, prompt in tags]
print(json.dumps(out, indent=2))
PY

EXPECTED_COUNT=$(python3 -c "import json; print(len(json.load(open('$WORK_DIR/image-tags.json'))))")
echo "Found $EXPECTED_COUNT image tags in optimized draft"

if [ "$EXPECTED_COUNT" -lt 3 ]; then
  echo "❌ Too few image tags ($EXPECTED_COUNT). Expected 5 from the original draft."
  exit 1
fi
```

### 5.3 — Load the style guide

```bash
STYLE_GUIDE=$(cat .claude/skills/create-blog-post/reference/image-style-guide.md)
```

### 5.4 — Generate each image

For each entry in `image-tags.json`, build a Gemini prompt and call the API. Use Python (cleaner JSON handling + base64 decode + WebP convert in one block).

```bash
python3 <<PY
import json, os, base64, io, urllib.request, urllib.error
from PIL import Image

SLUG = "$SLUG"
WORK_DIR = "$WORK_DIR"
GEMINI_KEY = os.environ["GEMINI_API_KEY"]
STYLE_GUIDE = """$STYLE_GUIDE"""  # Note: shell var expansion happens before python parses

# Concise style instructions for the prompt (full guide is too long for every API call)
STYLE_INSTRUCTION = """
Photography style: 35mm film camera (Leica M6 or Pentax 67), 50-85mm prime lens, f/2.0-2.8, shallow DOF, natural window light or golden hour (never flash). Warm color palette: peach cream (#F4E4D1), ink-deep brown (#3A2F26), muted ochre (#B89B6A), dusty sage (#A6B59A). Editorial-magazine composition with negative space. Apothecary-meets-veterinary aesthetic: herbal wellness for pets, calm and considered, never cartoonish or stocky. The pet is the patient, not the product. Soft natural grain. Avoid: bright synthetic colors, neon, primary red, flash, AI-generated digital sharpness, text overlay, watermarks.
""".strip()

tags = json.load(open(f"{WORK_DIR}/image-tags.json"))
out_dir = "src/assets/blog"
os.makedirs(out_dir, exist_ok=True)

generated = []
for i, tag in enumerate(tags, 1):
    name = tag["name"]
    seed = tag["prompt_seed"]
    full_prompt = f"{STYLE_INSTRUCTION}\n\nSubject: {seed}"

    print(f"[{i}/{len(tags)}] Generating '{name}' ...", flush=True)

    body = {
        "contents": [{"parts": [{"text": full_prompt}]}],
    }

    req = urllib.request.Request(
        f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key={GEMINI_KEY}",
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json"},
    )
    try:
        resp = urllib.request.urlopen(req, timeout=90)
        data = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        err_body = e.read().decode(errors='ignore')
        print(f"  ❌ HTTP {e.code}: {err_body[:300]}")
        continue

    if "error" in data:
        print(f"  ❌ API error: {data['error']}")
        continue

    parts = data.get("candidates", [{}])[0].get("content", {}).get("parts", [])
    img_parts = [p for p in parts if "inlineData" in p or "inline_data" in p]

    if not img_parts:
        print(f"  ❌ No image in response (text-only)")
        continue

    inline = img_parts[0].get("inlineData") or img_parts[0].get("inline_data")
    raw_bytes = base64.b64decode(inline["data"])

    # Convert JPEG -> WebP @ quality 80
    img = Image.open(io.BytesIO(raw_bytes))
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")

    webp_path = f"{out_dir}/{SLUG}-{name}.webp"
    img.save(webp_path, format="WEBP", quality=80, method=6)

    size_kb = os.path.getsize(webp_path) // 1024
    print(f"  ✓ Saved {webp_path} ({size_kb} KB)")
    generated.append(webp_path)

print(f"\nGenerated {len(generated)}/{len(tags)} images")
if len(generated) != len(tags):
    print("⚠️  Some images failed to generate. You may want to re-run Stage 5 for the missing ones.")
PY
```

### 5.5 — Verify all expected images exist

```bash
EXPECTED=$(python3 -c "import json; print(len(json.load(open('$WORK_DIR/image-tags.json'))))")
ACTUAL=$(ls src/assets/blog/${SLUG}-*.webp 2>/dev/null | wc -l | tr -d ' ')

echo "Expected: $EXPECTED images"
echo "Actual:   $ACTUAL images"

if [ "$EXPECTED" -ne "$ACTUAL" ]; then
  echo "❌ Image count mismatch. Stage 6 will fail without all images."
  echo "    Either regenerate the missing ones or remove the failed tags from draft-optimized.md."
  exit 1
fi
```

### 5.6 — Regeneration support

If the user requests "regenerate the hero image" (or any specific name), re-run the loop above for ONLY that tag. Don't re-generate the ones already done.

### 5.7 — Update metadata + report

```bash
python3 -c "
import json
m = json.load(open('/tmp/celsius-skill/$SLUG/metadata.json'))
m['current_stage'] = 5
json.dump(m, open('/tmp/celsius-skill/$SLUG/metadata.json', 'w'), indent=2)
"

echo "
✓ Stage 5 complete

  Images generated: $ACTUAL
  Saved to:         src/assets/blog/${SLUG}-*.webp

  Review them before Stage 6 — open the files locally to spot-check brand consistency.
  Say 'regenerate <name>' if any image needs a re-roll.
"
```

---

## Stage 6 — Scaffold Framework Files

**Template-driven** — read the cat-ear-infection files as live templates, substitute new content, write 4 new files. NEVER generate from scratch.

### 6.1 — Compute names

```bash
WORK_DIR="/tmp/celsius-skill/$SLUG"

# PascalCase component name + "Guide" suffix
COMPONENT_NAME=$(echo "$SLUG" | python3 -c "
import sys
s = sys.stdin.read().strip()
print(''.join(w.capitalize() for w in s.split('-')) + 'Guide')
")

# SCREAMING_SNAKE constant for FAQs
FAQS_CONSTANT=$(echo "$SLUG" | tr 'a-z-' 'A-Z_')_FAQS

# Pascal core for builder function names (without "Guide")
PASCAL_CORE=$(echo "$SLUG" | python3 -c "
import sys
s = sys.stdin.read().strip()
print(''.join(w.capitalize() for w in s.split('-')))
")

echo "Slug:           $SLUG"
echo "ComponentName:  $COMPONENT_NAME"
echo "FAQs constant:  $FAQS_CONSTANT"
echo "Pascal core:    $PASCAL_CORE"
```

### 6.2 — Read templates + draft

Use Read tool on:
- `src/pages/cat-ear-infection.astro` (template for the new page)
- `src/views/blog/CatEarInfectionGuide.tsx` (template for the view)
- `src/islands/blog/CatEarInfectionGuide.tsx` (template for the island)
- `src/lib/blog/cat-ear-infection-faqs.ts` (template for FAQs)
- `$WORK_DIR/draft-optimized.md` (the new content)

### 6.3 — Generate the 4 files

For each file, do a careful template substitution. Apply across all 4:
- `cat-ear-infection` → `$SLUG` (in all file paths, URLs, import paths, slug references)
- `CatEarInfection` → `$PASCAL_CORE` (in component / function / class names)
- `CatEarInfectionGuide` → `$COMPONENT_NAME` (in component imports + exports)
- `CAT_EAR_INFECTION_FAQS` → `$FAQS_CONSTANT`
- `buildCatEarInfection*` → `build${PASCAL_CORE}*` (JSON-LD builder functions)
- Frontmatter values (title, description, canonical, ogImage) → from the draft's YAML frontmatter
- Body content of the view → translated from the draft markdown (sections, FAQs, references, CTA)
- Image imports in the view → `<slug>-{hero,...}.webp` matching what Stage 5 produced

**Page route** (`src/pages/<slug>.astro`):
- Same import structure as cat-ear-infection.astro
- `<Layout>` props from frontmatter values
- `jsonLd` from `build*JsonLd` functions imported from the new faqs.ts

**View** (`src/views/blog/<ComponentName>.tsx`):
- Same component structure as CatEarInfectionGuide.tsx
- Hero, TOC, body sections, FAQs (rendered from FAQs constant), references, CTA
- All `[IMAGE: <name> | ...]` placeholders → real `<img src={importedImage}>` JSX
- **Pet articles**: add `import { ReviewedByDrAlex } from "@/components/blog/ReviewedByDrAlex";` and render `<ReviewedByDrAlex />` near the bottom (just before the Final CTA section)

**Island** (`src/islands/blog/<ComponentName>.tsx`):
- 5-line wrapper. Just imports the view and re-exports.

**FAQs** (`src/lib/blog/<slug>-faqs.ts`):
- Export `<FAQS_CONSTANT>` array of `{q, a}` objects from the FAQ section of the draft
- Export `build${PASCAL_CORE}FaqJsonLd(faqs?)` function (FAQPage schema)
- Export `build${PASCAL_CORE}ArticleJsonLd()` function (Article schema with @id = canonical URL)

### 6.4 — Hard guarantees (ALL must pass — fix-and-retry on failure)

#### Check A — Slug + component-name consistency

Three of the four files reference the kebab-case slug directly (URLs, route filenames, JSON-LD `@id`). The island file is a thin wrapper that only references the PascalCase component name — by design, mirroring the cat-ear-infection template. The check has to handle both.

```bash
# Files where the kebab slug must appear (URL / route / canonical references)
for f in \
  "src/pages/$SLUG.astro" \
  "src/views/blog/$COMPONENT_NAME.tsx" \
  "src/lib/blog/$SLUG-faqs.ts"
do
  if [ ! -f "$f" ]; then
    echo "❌ Missing file: $f"
    exit 1
  fi
  if ! grep -q "$SLUG" "$f"; then
    echo "❌ $f does not reference slug '$SLUG'"
    exit 1
  fi
done

# Island is a 5-line wrapper. It references the PascalCase component name only —
# never the kebab slug. Verify the component name is present instead.
ISLAND="src/islands/blog/$COMPONENT_NAME.tsx"
if [ ! -f "$ISLAND" ]; then
  echo "❌ Missing file: $ISLAND"
  exit 1
fi
if ! grep -q "$COMPONENT_NAME" "$ISLAND"; then
  echo "❌ $ISLAND does not reference component '$COMPONENT_NAME'"
  exit 1
fi

echo "✓ A. slug consistency (3 files reference '$SLUG'; island references '$COMPONENT_NAME')"
```

#### Check B — Image imports ↔ files parity

```bash
IMG_IMPORTS=$(grep -cE "from \"@/assets/blog/${SLUG}-" "src/views/blog/$COMPONENT_NAME.tsx")
IMG_FILES=$(ls "src/assets/blog/${SLUG}-"*.webp 2>/dev/null | wc -l | tr -d ' ')

if [ "$IMG_IMPORTS" -ne "$IMG_FILES" ]; then
  echo "❌ View imports $IMG_IMPORTS images but $IMG_FILES files exist on disk"
  echo "    Missing files would break the build. Either:"
  echo "    - Remove unused imports from the view"
  echo "    - Re-run Stage 5 to generate the missing images"
  exit 1
fi
echo "✓ B. image imports match files ($IMG_FILES each)"
```

#### Check C — Case-sensitivity guard

```bash
if [ "$(git config core.ignorecase)" != "false" ]; then
  echo "⚠️ core.ignorecase is not false — setting it now to catch case bugs early"
  git config core.ignorecase false
fi
echo "✓ C. case sensitivity"
```

#### Check D — JSON-LD wiring

```bash
EXPORTS=$(grep -oE "export function build[A-Za-z]+JsonLd" "src/lib/blog/$SLUG-faqs.ts" | sed 's/^export function //' | sort -u)
IMPORTS=$(grep -oE "build[A-Za-z]+JsonLd" "src/pages/$SLUG.astro" | sort -u)

if [ "$EXPORTS" != "$IMPORTS" ]; then
  echo "❌ JSON-LD function names mismatch between page and faqs.ts"
  echo "    faqs.ts exports:"
  echo "$EXPORTS" | sed 's/^/      /'
  echo "    page.astro imports:"
  echo "$IMPORTS" | sed 's/^/      /'
  exit 1
fi
echo "✓ D. JSON-LD wiring matches"
```

#### Check E — Pet article check

```bash
IS_PET=$(python3 -c "import json; print(json.load(open('$WORK_DIR/research.json'))['is_pet_article'])")

if [ "$IS_PET" = "True" ] || [ "$IS_PET" = "true" ]; then
  if ! grep -q "ReviewedByDrAlex" "src/views/blog/$COMPONENT_NAME.tsx"; then
    echo "❌ Pet article missing <ReviewedByDrAlex /> block in view"
    exit 1
  fi
  echo "✓ E. pet-article reviewer block present"
else
  echo "✓ E. non-pet article (no reviewer block needed)"
fi
```

#### Check F — Canonical matches @id

```bash
CANONICAL=$(grep -oE 'canonical="[^"]+"' "src/pages/$SLUG.astro" | head -1 | sed 's/^canonical="//; s/"$//')
ID_REF=$(grep -oE '"@id": *"[^"]+"' "src/lib/blog/$SLUG-faqs.ts" | head -1 | sed 's/^"@id": *"//; s/"$//')

if [ "$CANONICAL" != "$ID_REF" ]; then
  echo "❌ canonical ($CANONICAL) and JSON-LD @id ($ID_REF) don't match"
  exit 1
fi
echo "✓ F. canonical = @id ($CANONICAL)"
```

#### Check G — Build validation (the big one)

```bash
echo "Running 'npm run build' to validate end-to-end ..."
rm -rf dist .astro
npm run build 2>&1 | tee "$WORK_DIR/build.log"
BUILD_EXIT=${PIPESTATUS[0]}

if [ "$BUILD_EXIT" -ne 0 ]; then
  echo "❌ Build failed. See $WORK_DIR/build.log"
  echo "    Read the error, fix the generated files, re-run this check."
  exit 1
fi
echo "✓ G. npm run build passes"
```

#### Check H — Type/lint pass (already covered by build, but double-check)

```bash
# Astro's build includes type-checking. If build passes, types are OK.
# This step just confirms the new files actually loaded into the bundle.
if ! grep -q "$COMPONENT_NAME" "$WORK_DIR/build.log"; then
  echo "⚠️ Build log doesn't reference $COMPONENT_NAME — page may not be in the route table"
fi
echo "✓ H. components loaded in build"
```

### 6.5 — Update metadata + report

```bash
python3 -c "
import json
m = json.load(open('/tmp/celsius-skill/$SLUG/metadata.json'))
m['current_stage'] = 6
m['files'] = [
  'src/pages/$SLUG.astro',
  'src/views/blog/$COMPONENT_NAME.tsx',
  'src/islands/blog/$COMPONENT_NAME.tsx',
  'src/lib/blog/$SLUG-faqs.ts',
]
json.dump(m, open('/tmp/celsius-skill/$SLUG/metadata.json', 'w'), indent=2)
"

echo "
✓ Stage 6 complete

  Files written:
    - src/pages/$SLUG.astro
    - src/views/blog/$COMPONENT_NAME.tsx
    - src/islands/blog/$COMPONENT_NAME.tsx
    - src/lib/blog/$SLUG-faqs.ts
  Images:     $IMG_FILES at src/assets/blog/${SLUG}-*.webp
  Build:      PASS
  All 8 hard guarantees: PASS
"
```

### What Stage 6 explicitly does NOT do

- Does NOT modify any existing file (only creates new ones)
- Does NOT touch `astro.config.mjs`, `package.json`, `tsconfig.json`, or any framework config
- Does NOT change the cat-ear-infection files (they remain the canonical template)
- Does NOT alter the `<ReviewedByDrAlex />` component (only references it)
- Does NOT commit or push (that's Stage 7's job)

---

## Stage 7 — Deploy Preview URL

### 7.1 — Confirm we're on the right base

```bash
# We expect to be on a working branch (either main or some feature branch).
# The skill creates a NEW preview branch from current HEAD — does NOT mess with
# whatever branch the user is currently on for their own development.
CURRENT=$(git branch --show-current)
echo "Currently on: $CURRENT"

if [ "$CURRENT" = "preview/$SLUG" ]; then
  echo "Already on preview/$SLUG — will re-deploy this preview."
fi
```

### 7.2 — Create or switch to the preview branch

```bash
BRANCH="preview/$SLUG"

if git show-ref --verify --quiet "refs/heads/$BRANCH"; then
  # Branch exists locally — switch to it
  git checkout "$BRANCH"
else
  # Create from current HEAD
  git checkout -b "$BRANCH"
fi
```

### 7.3 — Stage all generated files

```bash
# Read file list from metadata (set in Stage 6.5)
FILES=$(python3 -c "
import json
m = json.load(open('/tmp/celsius-skill/$SLUG/metadata.json'))
print(' '.join(m['files']))
")

# Plus the image assets generated in Stage 5
git add $FILES src/assets/blog/${SLUG}-*.webp

# Verify staging
echo "=== files staged for commit ==="
git status -s
```

### 7.4 — Commit + push

```bash
git commit -m "blog: add post '$SLUG' (preview deploy)

- View: src/views/blog/$COMPONENT_NAME.tsx
- Page: src/pages/$SLUG.astro
- FAQs: src/lib/blog/$SLUG-faqs.ts
- Images: 5 generated via Gemini

Auto-generated by .claude/skills/create-blog-post/SKILL.md"

git push origin "$BRANCH" 2>&1 | tail -5
```

### 7.5 — Get the real preview URL from the Cloudflare API

**Do NOT string-predict the preview URL.** Cloudflare truncates branch aliases
to ~28 characters, so a long branch like `preview-dog-yeast-infection-home-remedy`
becomes alias `preview-dog-yeast-infection`. Predicting the URL by substitution
gives a 404 for any long slug. Instead, query the Cloudflare Pages API for the
deployment's actual alias (this is robust for any slug length).

Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in `.env` (the same
secrets the GitHub Actions deploy uses; add them to `.env` for local use).

```bash
echo "Waiting for the CI build + deploy to finish, then resolving the real URL..."
CF_BRANCH=$(echo "$BRANCH" | tr '/' '-')   # e.g. preview-dog-yeast-infection-home-remedy
PREVIEW_URL=""

end=$(($(date +%s) + 360))   # up to 6 min for CI build + deploy
while [ $(date +%s) -lt $end ]; do
  # Find the newest deployment whose source branch matches CF_BRANCH and is live.
  RESOLVED=$(curl -sS \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/deploy-celsius-herbs-dev/deployments?per_page=15" \
    | python3 -c "
import json, sys
data = json.load(sys.stdin)
cf_branch = '$CF_BRANCH'
for dep in data.get('result', []):
    meta = dep.get('deployment_trigger', {}).get('metadata', {})
    if meta.get('branch') == cf_branch:
        stage = dep.get('latest_stage', {})
        if stage.get('name') == 'deploy' and stage.get('status') == 'success':
            aliases = dep.get('aliases') or []
            # Prefer the friendly preview-* alias; fall back to the hashed url.
            url = next((a for a in aliases if a.startswith('https://')), dep.get('url',''))
            print(url)
            break
")
  if [ -n "$RESOLVED" ]; then
    PREVIEW_URL="$RESOLVED/$SLUG"
    # Confirm it actually serves the page
    code=$(curl -sS -o /dev/null -w "%{http_code}" --max-time 10 "$PREVIEW_URL")
    if [ "$code" = "200" ]; then
      echo "$(date +%H:%M:%S) — ✓ preview live: $PREVIEW_URL"
      break
    fi
  fi
  echo "$(date +%H:%M:%S) — build/deploy still in progress, waiting 15s..."
  sleep 15
done

if [ -z "$PREVIEW_URL" ] || [ "$code" != "200" ]; then
  echo ""
  echo "⚠️ Could not resolve a live preview URL within the time budget."
  echo "    Check the GitHub Actions run:"
  echo "    https://github.com/Etherwise/celcius-herbs-blogs/actions"
  echo "    And the Cloudflare deployments:"
  echo "    https://dash.cloudflare.com → Workers & Pages → deploy-celsius-herbs-dev → Deployments"
fi
```

(If `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` aren't in `.env`, the API
call returns nothing — in that case fall back to the dashboard link above to grab
the alias manually. Adding both to `.env` makes this fully automatic.)

### 7.6 — Update metadata + output URL

```bash
python3 -c "
import json
m = json.load(open('/tmp/celsius-skill/$SLUG/metadata.json'))
m['current_stage'] = 7
m['preview_url'] = '$PREVIEW_URL'
m['preview_branch'] = '$BRANCH'
m['finished_at'] = '$(date -Iseconds)'
json.dump(m, open('/tmp/celsius-skill/$SLUG/metadata.json', 'w'), indent=2)
"

echo "
─────────────────────────────────────────────────────────────────────
✓ STAGE 7 COMPLETE — PREVIEW LIVE

Preview URL:   $PREVIEW_URL
Branch:        $BRANCH

NEXT STEPS (human):
  1. Open the preview URL above in a browser
  2. Review the post — content, images, header/footer, mobile view
  3. Share the URL with Dr. Alex for clinical review (if pet article)
  4. If approved → merge $BRANCH to main → production deploys automatically
  5. If changes needed → edit source files on this branch, push again,
     the SAME URL re-deploys
─────────────────────────────────────────────────────────────────────

The skill exits here. It will NOT auto-publish. Production deploy requires
a human-approved merge to main.
"
```

### 7.7 — STOP

The skill ends here. The preview URL is ready for human review. Do NOT auto-merge
to main. The user (or Dr. Alex) reviews the preview, and merges the
`preview/<slug>` branch to main when approved — production deploys automatically.

---

## End

The skill exits here. The user (or Dr. Alex) reviews the preview URL. If approved, they merge the `preview/<slug>` branch to main → existing main workflow ships it to production.

The skill never auto-publishes.
