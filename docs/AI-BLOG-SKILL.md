# AI Blog Skill — How to Use

> One-instruction blog publishing for the Celsius Herbs Astro framework. This doc is for your content team — non-technical-friendly.

---

## What this is

A Claude Code skill (`.claude/skills/create-blog-post/`) that automates the entire blog-publishing pipeline.

Your team opens the framework folder in Claude Code, says something like:

> "Create a new blog post about cat ear mites"

…and an 8-stage pipeline runs **fully automatically** — no manual steps:

0. **Pre-flight** (checks your API keys are set)
1. **Keyword research** (Ahrefs — finds the best target keyword, related terms, word count)
2. **Content research** (Perplexity — pulls sourced facts with citations from vet/medical sources)
3. **Drafting** (Claude writes the full ~2,000-word article in markdown)
4. **SurferSEO term optimization** (fetches Surfer's ranking-term database, scores the draft's term coverage, and revises until coverage clears the threshold — up to 4 rounds)
5. **Image generation** (Gemini generates 5 brand-consistent images)
6. **File scaffolding** (all 4 framework files created, build validated)
7. **Preview deploy** (pushes a preview branch, gives you a shareable Cloudflare URL)

**Total time per post:** ~10–20 minutes, fully hands-off.
**Cost per post:** ~$0.25 in API spend + ~1 Surfer Content Editor query.

The skill **never auto-publishes**. The final stage stops at a preview URL for human review. You (or Dr. Alex) review, approve, then merge the preview branch to production.

> **A note on the SurferSEO step (important).** Surfer's public API does **not** let software read the browser "Content Editor score" (the 0–100 you see in the Surfer app) for your content — there's no way to submit content through the API and get that score back. What the API *does* expose is Surfer's full **ranking-term database** for a keyword: 300+ terms, each with a target usage range. So Stage 4 optimizes the draft to cover those terms within range — which is the thing that actually drives rankings — and reports a **term-coverage score** derived from Surfer's real data. It correlates with the browser score but is its own number. If your team wants the exact browser score on a post, open it in the Surfer Content Editor manually after publish; the automated step has already done the term work.

---

## One-time setup (5 minutes)

You need **3 API keys** added to `.env` (OpenRouter, Gemini, SurferSEO) **plus the Ahrefs MCP** wired into your Claude Code. ⚠️ On a fresh machine *none* of this is set up for you — Ahrefs in particular is a Claude Code MCP server configured per-machine in `~/.claude.json`, not something that ships with this repo. Work through every step below.

### 1. Open the framework folder in Claude Code

Whatever way you usually launch Claude Code — make sure it's pointed at this folder:

```
/path/to/celsius-astrolovable/
```

### 2. Get the three API keys

**OpenRouter** (for the Perplexity research call):
- Sign up: <https://openrouter.ai/keys>
- Pay-as-you-go billing, no monthly minimum
- Cost: ~$0.01–0.05 per blog post

**Gemini** (for the image generation):
- Get one here: <https://aistudio.google.com/apikey>
- Pay-as-you-go billing — **the key's Google Cloud project must have active billing.** ⚠️ A key without billing still *looks* valid and passes the skill's startup check, but image generation (Stage 5) fails mid-run with a `PERMISSION_DENIED` 403. If Stage 5 errors with a 403/permission message, enable billing for that project in Google Cloud Console.
- Cost: ~$0.10–0.20 per blog post (5 images each)

**SurferSEO** (for the automated term-optimization loop):
- Get it in Surfer: app.surferseo.com → Settings → API (requires a Surfer plan with API access)
- Cost: ~1 Content Editor query per post against your Surfer quota (the revision loop re-scores locally — no extra Surfer calls)

**Ahrefs** (for keyword research) — this one is a **Claude Code MCP server**, not a `.env` key:
- It's configured at the *user* level in `~/.claude.json`, so it does **not** travel with this repo — each person who runs the skill adds it once on their own machine.
- Configure the Ahrefs MCP server in your Claude Code using your team's Ahrefs API key (an Ahrefs subscription with API access is required). Follow Ahrefs' current MCP setup instructions for the exact endpoint/command.
- Verify it's live: the skill's Stage 0 runs a free Ahrefs probe at startup. If keyword research (Stage 1) can't reach Ahrefs, the MCP isn't configured.

### 3. Add the keys to `.env`

The framework root has a `.env` file (it's gitignored — never committed). Open it and add:

```
OPENROUTER_API_KEY=sk-or-v1-...
GEMINI_API_KEY=AIza...
SURFER_API_KEY=...

# Cloudflare — lets the skill resolve the real preview URL after deploy.
# These are the same values already set as GitHub Actions secrets.
CLOUDFLARE_API_TOKEN=cfut_...
CLOUDFLARE_ACCOUNT_ID=...
```

Save. That's the API setup done. (The two Cloudflare values are the same ones in your repo's GitHub Actions secrets — Cloudflare truncates long preview-branch names, so the skill asks the Cloudflare API for the real URL instead of guessing it.)

> **Optional tuning** (defaults are fine for most posts): add `SURFER_SCORE_THRESHOLD=70` to change the target term-coverage score, or `SURFER_MAX_ITERATIONS=4` to change how many revision rounds the loop will attempt.

### 4. Install Pillow (one Python library — required for image conversion)

In Terminal at the framework root:

```bash
python3 -m pip install Pillow
```

If you see `Successfully installed Pillow-...`, you're good.

### 5. Make sure your existing Shopify keys are still in `.env`

The skill leans on the framework's Shopify Storefront integration for header/footer. The `.env` should already have these from the original handoff:

```
PUBLIC_SHOPIFY_STORE_DOMAIN=celsiusherbs.myshopify.com
PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN=...
```

If they're missing, copy them from `.env.example` and fill in real values.

---

## Using the skill — your first post

### Step 1: Open Claude Code in this folder

Start a new Claude Code session in the framework folder.

### Step 2: Type the prompt

In the chat, type something like:

```
Use the create-blog-post skill to write a post about [topic]
```

Or even simpler — Claude will auto-trigger the skill if you say:

- "Create a new blog post about probiotics for dogs"
- "Write a blog about dog acid reflux home remedies"
- "Add a post on cat dental care"

The skill will activate. Claude will announce "Using the create-blog-post skill" and start Stage 0.

### Step 3: Let it run — no manual steps

You'll see Claude work through each stage with status messages. **Every stage runs on its own — you don't have to do anything.** Just watch (or walk away and come back).

The notable part is the **SurferSEO term-optimization stage (Stage 4)**, which runs right after the draft is written and before images/deploy. The skill:

1. Fetches Surfer's full ranking-term database for your keyword (300+ terms, each with a target usage range)
2. Scores the draft's term coverage against those targets
3. If coverage is **at or above the threshold (default 70)**, it's done
4. If it's **below**, Claude automatically rewrites the draft to work in the under-target terms, then re-scores — repeating up to 4 times until it clears the threshold (or plateaus)

You'll see output like this as it loops:

```
Initial coverage score: 28 / 100 (threshold: 70)
─── Iteration 1 / 4 — score 28, target 70 ───
  iteration 1 score: 48 (was 28; Δ 20)
─── Iteration 2 / 4 — score 48, target 70 ───
  iteration 2 score: 66 (was 48; Δ 18)
─── Iteration 3 / 4 — score 66, target 70 ───
  iteration 3 score: 74 (was 66; Δ 8)

✓ Stage 4 complete — ✓ THRESHOLD MET
Surfer term coverage: 28 → 48 → 66 → 74 / 100
```

That's it — no copy-pasting into Surfer, no manual optimization. The whole thing is hands-off.

> If you ever want to run a post WITHOUT Surfer (faster, no optimization), just remove `SURFER_API_KEY` from `.env` — the skill skips Stage 4 entirely and ships the draft as written.

### Step 4: Review the preview URL

When the skill finishes, you'll get a message like:

```
─────────────────────────────────────────────
✓ STAGE 7 COMPLETE — PREVIEW LIVE

Preview URL: https://preview-probiotics-for-dogs.deploy-celsius-herbs-dev.pages.dev/probiotics-for-dogs
Branch:      preview/probiotics-for-dogs

NEXT STEPS (human):
  1. Open the preview URL above in a browser
  2. Share with Dr. Alex for clinical review
  3. If approved → merge to main → production deploys
─────────────────────────────────────────────
```

The URL is real, public, and shareable. Send it to Dr. Alex. Pull it up on your phone. Have your team click around.

### Step 5: Publish (or iterate)

**If it looks good:**
- Merge `preview/[slug]` to `main` on GitHub (one-click in the GitHub UI, or via Terminal: `git checkout main && git merge preview/[slug] && git push`)
- Auto-deploy ships it to `https://blog.celsiusherbs.com/[slug]` in about 90 seconds

**If you want changes:**
- Edit the source files on the preview branch
- Push — the *same* preview URL re-deploys
- No need to re-run the skill from the start

**If you want a completely fresh attempt:**
- Delete the preview branch (`git push origin --delete preview/[slug]`)
- Re-run the skill from the start

---

## What the skill does NOT do

Setting expectations:

- **Does NOT auto-publish.** The skill stops at the preview URL. Going live requires you to manually merge the preview branch to `main`.
- **Does NOT replace Dr. Alex's review.** For pet articles, the `<ReviewedByDrAlex />` block is auto-included, but his actual sign-off on the content is human work.
- **Does NOT touch the existing live posts** (e.g. cat-ear-infection). New posts only.
- **Does NOT modify framework configuration files** (`astro.config.mjs`, `package.json`, etc.).
- **Does NOT auto-pick the topic.** You tell it what to write about.

---

## Common questions

### "How long does it take?"

| Stage | Time |
|---|---|
| Stages 1–3 (research + draft) | ~5 minutes |
| Stage 4 (Surfer term optimization) | ~2–6 minutes (1 Surfer query + a few local revision rounds) |
| Stages 5–7 (images + scaffold + preview deploy) | ~5–8 minutes |
| **Total** | **~12–20 minutes per post, fully hands-off** |

For reference: the original cat-ear-infection post took ~13 hours to produce manually.

### "How much does it cost?"

Per post: **~$0.25 in API spend** (OpenRouter + Gemini, billed to your accounts). Ahrefs usage counts against your existing subscription (~100 units per post, negligible).

### "What if an image looks wrong?"

Tell Claude: *"Regenerate the hero image with a softer background"* (or any other description). It will re-roll only that one image, keep the rest, and continue.

### "What if Claude makes a content mistake?"

Two options:
- **Small fix:** edit the generated file directly (`src/views/blog/[YourTopic]Guide.tsx`), commit, push — the preview URL re-deploys.
- **Big rewrite:** delete the preview branch, re-run the skill with more specific guidance in your prompt.

### "What if the skill fails partway through?"

Every stage saves its output to `/tmp/celsius-skill/[your-slug]/`. If something breaks, the files from earlier stages are still there. Tell Claude *"continue the skill from where it stopped"* and it can resume.

### "What if I don't want to use SurferSEO on a particular post?"

Remove (or comment out) `SURFER_API_KEY` in `.env` before running the skill. The pipeline skips Stage 4 (term optimization) and ships the draft as written. Add the key back when you want optimization again. (We recommend leaving it on — the term-coverage improvements are real and cost almost nothing.)

### "Can I do multiple posts in parallel?"

Yes — each post gets its own preview branch (`preview/[slug]`). They don't conflict. You can have 3 preview URLs live at once for the team to review side-by-side.

### "How do I delete a post I started but don't want to publish?"

```bash
git push origin --delete preview/[the-slug]
git branch -D preview/[the-slug]
```

The Cloudflare preview URL goes away within ~5 minutes.

---

## When the skill is the wrong tool

The skill is built for **net-new blog posts** in the existing Astro framework. It's not the right tool for:

- **Editing an existing live post** → just edit the file directly in `src/views/blog/[Topic]Guide.tsx`, push, deploys.
- **Non-blog pages** (product pages, About, Contact) → those have their own templates in `src/views/pdp/` and aren't part of this skill.
- **Migrating content from elsewhere** → the skill researches and writes new content, not import.

---

## What to do if you get stuck

1. **Check `/tmp/celsius-skill/[your-slug]/`** — every intermediate output is saved there. The `build.log` file shows exactly what failed if Stage 6 broke.
2. **Read the error message** — the skill prints clear errors with pointers (e.g. "missing PERPLEXITY_API_KEY → check .env").
3. **Ask Claude in the same conversation** — Claude can usually diagnose and fix from context.
4. **Last resort:** delete the preview branch and re-run from scratch.

---

## Pipeline architecture (for the technically-curious)

The skill is a single markdown file (`SKILL.md`) plus 3 reference files (style guide, article structure, research prompts). All API calls are inline `Bash` commands — no separate scripts to maintain.

| Stage | Tool | What it does |
|---|---|---|
| 0 | (none) | Validates `.env`, Ahrefs MCP, git tree; detects Surfer key |
| 1 | Ahrefs MCP | Keyword overview + matching terms → `research.json` |
| 2 | OpenRouter (Perplexity sonar-pro) | Sourced research with citations → `perplexity-research.md` |
| 3 | Claude itself | Drafts the article using research + structure template → `draft.md` |
| 4 | SurferSEO API + `surfer-coverage.py` | Fetches Surfer's term database, scores coverage, loops (revise → re-score) until threshold → `draft-optimized.md` |
| 5 | Gemini 3.1 Flash Image Preview | Generates 5 brand-styled WebP images → `src/assets/blog/[slug]-*.webp` |
| 6 | Claude with templates | Scaffolds 4 framework files mirroring cat-ear-infection structure |
| 7 | GitHub Actions + Cloudflare Pages | Pushes preview branch → resolves real preview URL via Cloudflare API |

Each stage's output feeds the next. The 8 hard guarantees at Stage 6 (slug consistency, image-imports parity, build validation, etc.) prevent broken builds from ever reaching the preview deploy.

---

## Quick reference card

```
SETUP (once)
  ☐ Add OPENROUTER_API_KEY to .env
  ☐ Add GEMINI_API_KEY to .env
  ☐ Add SURFER_API_KEY to .env
  ☐ Add CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID to .env
  ☐ python3 -m pip install Pillow

NEW POST (fully hands-off)
  1. Open Claude Code in framework folder
  2. "Create a blog post about [topic]"
  3. Wait — research, draft, Surfer term optimization, images,
     scaffold, and deploy all run automatically
  4. Review the preview URL → share with Dr. Alex → approve → merge to main
```

That's the whole loop. Good luck — and ship.
