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
4. **Image generation** (Gemini generates 5 brand-consistent images)
5. **File scaffolding** (all 4 framework files created, build validated)
6. **Preview deploy** (pushes a preview branch, gives you a shareable Cloudflare URL)
7. **SurferSEO audit + revision loop** (audits the live page, and if the score is under 80, automatically revises and re-deploys — up to 4 times — until it clears the threshold)

**Total time per post:** ~10–20 minutes, fully hands-off (longer if the Surfer loop runs several revision rounds).
**Cost per post:** ~$0.25 in API spend + your Surfer plan's audit usage.

The skill **never auto-publishes**. The final stage stops at a preview URL for human review. You (or Dr. Alex) review, approve, then merge the preview branch to production.

---

## One-time setup (5 minutes)

You need 3 API keys total. **One is already configured** (Ahrefs). The other two you'll provide.

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
- Pay-as-you-go billing
- Cost: ~$0.10–0.20 per blog post (5 images each)

**SurferSEO** (for the automated SEO scoring + revision loop):
- Get it in Surfer: app.surferseo.com → Settings → API (requires a Surfer plan with API access)
- Cost: counts against your Surfer plan's audit quota (~1 audit per revision round)

### 3. Add the keys to `.env`

The framework root has a `.env` file (it's gitignored — never committed). Open it and add:

```
OPENROUTER_API_KEY=sk-or-v1-...
GEMINI_API_KEY=AIza...
SURFER_API_KEY=...
```

Save. That's the API setup done.

> **Optional tuning** (defaults are fine for most posts): add `SURFER_SCORE_THRESHOLD=80` to change the target score, or `SURFER_MAX_ITERATIONS=4` to change how many revision rounds the loop will attempt.

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

The notable part is the **final stage (Surfer audit + revision loop)**. After the post deploys to a preview URL, the skill:

1. Submits the live page to SurferSEO for an audit
2. Reads the content score
3. If the score is **80 or above**, it's done
4. If it's **below 80**, Claude automatically revises the draft, re-deploys, and re-audits — repeating up to 4 times until it clears 80 (or hits a guardrail)

You'll see output like this as it loops:

```
─── Iteration 1 / 4 — previous score: 64, target: 80 ───
✓ Iteration 1 score: 73 / 100 (was: 64)
─── Iteration 2 / 4 — previous score: 73, target: 80 ───
✓ Iteration 2 score: 82 / 100 (was: 73)

✓ STAGE 7 COMPLETE — ✓ THRESHOLD MET
SurferSEO score: 64 → 73 → 82 / 100
```

That's it — no copy-pasting into Surfer, no manual optimization. The whole thing is hands-off.

> If you ever want to run a post WITHOUT Surfer (faster, no scoring), just remove `SURFER_API_KEY` from `.env` — the skill will stop at the preview URL after deploy and skip the audit loop entirely.

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
| Stages 4–6 (images + scaffold + preview deploy) | ~5–8 minutes |
| Stage 7 (Surfer audit + revision loop) | ~2–12 minutes (1 audit if it passes first try; +3–4 min per revision round) |
| **Total** | **~10–20 minutes per post, fully hands-off** |

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

Remove (or comment out) `SURFER_API_KEY` in `.env` before running the skill. The pipeline will stop at the preview URL after deploy and skip the audit/revision loop entirely. Add the key back when you want scoring again. (We recommend leaving it on — the automated score improvements are real and cost almost nothing.)

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
| 4 | Gemini 3.1 Flash Image Preview | Generates 5 brand-styled WebP images → `src/assets/blog/[slug]-*.webp` |
| 5 | Claude with templates | Scaffolds 4 framework files mirroring cat-ear-infection structure |
| 6 | GitHub Actions + Cloudflare Pages | Pushes preview branch → preview URL |
| 7 | SurferSEO API | Audits the live preview, and if score < threshold, auto-revises + re-deploys + re-audits (loop) until it clears 80 or hits a guardrail |

Each stage's output feeds the next. The 8 hard guarantees at Stage 5 (slug consistency, image-imports parity, build validation, etc.) prevent broken builds from ever reaching the preview deploy.

---

## Quick reference card

```
SETUP (once)
  ☐ Add OPENROUTER_API_KEY to .env
  ☐ Add GEMINI_API_KEY to .env
  ☐ Add SURFER_API_KEY to .env
  ☐ python3 -m pip install Pillow

NEW POST (fully hands-off)
  1. Open Claude Code in framework folder
  2. "Create a blog post about [topic]"
  3. Wait — research, draft, images, scaffold, deploy, and the
     Surfer audit/revision loop all run automatically
  4. Review the preview URL → share with Dr. Alex → approve → merge to main
```

That's the whole loop. Good luck — and ship.
