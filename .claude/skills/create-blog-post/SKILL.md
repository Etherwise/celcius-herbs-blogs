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

**[STUB — implemented in Task 3.2]**

Claude writes the article in markdown using the research as input + `reference/article-structure.md` as the EEAT template. Saves to `/tmp/celsius-skill/$SLUG/draft.md`.

```
✓ Stage 3 complete (STUB)
```

---

## Stage 4 — PAUSE for SurferSEO

**[STUB — implemented in Task 3.4]**

Skill stops, outputs draft path, instructs user to run through Surfer manually, paste optimized version back. Saves to `/tmp/celsius-skill/$SLUG/draft-optimized.md`.

```
✓ Stage 4 complete (STUB)
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
