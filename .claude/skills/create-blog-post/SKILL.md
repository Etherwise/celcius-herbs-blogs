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

## Stage 1 — Keyword Research

**[STUB — implemented in Task 2.2]**

Ask the user for the topic. Compute a slug. Call Ahrefs MCP. Write `research.json` to `/tmp/celsius-skill/$SLUG/`.

```
✓ Stage 1 complete (STUB)
```

---

## Stage 2 — Content Research (OpenRouter → Perplexity)

**[STUB — implemented in Task 2.3]**

Read `research.json`, call OpenRouter's chat-completions endpoint with `perplexity/sonar-pro` model. Save sourced research to `/tmp/celsius-skill/$SLUG/perplexity-research.md`.

```
✓ Stage 2 complete (STUB)
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
