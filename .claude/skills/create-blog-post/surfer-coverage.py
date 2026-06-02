#!/usr/bin/env python3
"""
surfer-coverage.py — Surfer term-coverage scorer for the create-blog-post skill.

Why this exists:
  The Surfer public API does NOT expose the browser Content Editor score for
  arbitrary submitted content (PUT/PATCH /content returns 404), and the Audit
  endpoint's content_score is a different, much harsher metric where even the
  top-ranking pages score ~50. What the API DOES expose is the Content Editor's
  full term database via GET /content_editors/:id/terms — 300+ terms, each with
  a target usage range (min/max) and a use_in_heading flag.

  This script computes a weighted "coverage score" from that term database: how
  many of Surfer's target terms appear in the draft within their target range.
  That score is what drives the automated revision loop in Stage 4 of the skill.
  It is derived from Surfer's real ranking data and is monotonic — adding the
  flagged under-target terms always raises it — so the loop converges.

Usage:
  1. Create a Content Editor query + fetch its terms:
       python3 surfer-coverage.py fetch-terms \\
           --keyword "dog yeast infection home remedy" \\
           --out /tmp/celsius-skill/<slug>/surfer-terms.json
     (requires SURFER_API_KEY in the environment)

  2. Score a draft against the saved terms:
       python3 surfer-coverage.py score \\
           --terms /tmp/celsius-skill/<slug>/surfer-terms.json \\
           --draft /tmp/celsius-skill/<slug>/draft-optimized.md
     Prints JSON: {"score": <0-100>, "satisfied": N, "total": N, "under": [...]}

Scoring model (approximates Surfer's weighting):
  - Only terms with included=true and ignored=false are counted.
  - Each term is weighted: regular (non-NLP) terms 2.0, NLP terms 1.0;
    use_in_heading terms get a 1.3x multiplier (Surfer weights heading terms more).
  - Per term credit: 1.0 if count is within [min,max]; 0.9 if over max (mild
    over-use penalty); count/min if under min (partial credit); 0.0 if absent.
  - score = sum(credit*weight) / sum(weight) * 100
  - Counting is substring-based (case-insensitive) to mirror how Surfer counts
    singular/plural/stemmed forms — strict word-boundary matching undercounts.
"""

import argparse
import json
import os
import re
import sys
import urllib.request
import urllib.error
import time

SURFER_BASE = "https://app.surferseo.com/api/v1"


def _api(method, path, body=None):
    key = os.environ.get("SURFER_API_KEY", "")
    if not key:
        print("ERROR: SURFER_API_KEY not set in environment", file=sys.stderr)
        sys.exit(2)
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(
        f"{SURFER_BASE}{path}",
        data=data,
        method=method,
        headers={"Content-Type": "application/json", "API-KEY": key},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        print(f"ERROR: Surfer API {method} {path} -> HTTP {e.code}: "
              f"{e.read().decode(errors='ignore')[:200]}", file=sys.stderr)
        sys.exit(3)


def fetch_terms(args):
    """Create a Content Editor query for the keyword, poll until ready, save terms."""
    created = _api("POST", "/content_editors",
                   {"keywords": [args.keyword], "location": args.location})
    ce_id = created.get("id")
    if not ce_id:
        print(f"ERROR: unexpected create response: {created}", file=sys.stderr)
        sys.exit(3)

    # Poll until the SERP analysis completes (usually < 90s).
    deadline = time.time() + 240
    state = None
    while time.time() < deadline:
        meta = _api("GET", f"/content_editors/{ce_id}")
        state = meta.get("state")
        if state in ("completed", "failed"):
            break
        time.sleep(15)
    if state != "completed":
        print(f"ERROR: content editor did not complete (state={state})", file=sys.stderr)
        sys.exit(3)

    terms = _api("GET", f"/content_editors/{ce_id}/terms")
    payload = {"content_editor_id": ce_id, "keyword": args.keyword, **terms}
    with open(args.out, "w") as f:
        json.dump(payload, f, indent=2)
    n = len(terms.get("terms", []))
    print(json.dumps({"content_editor_id": ce_id, "term_count": n, "saved_to": args.out}))


def _count(term, text):
    return len(re.findall(re.escape(term.lower()), text))


def score(args):
    data = json.load(open(args.terms))
    terms = data.get("terms", [])
    text = open(args.draft).read().lower()

    included = [t for t in terms if t.get("included") and not t.get("ignored")]
    total_w = 0.0
    got_w = 0.0
    under = []
    for t in included:
        rng = t.get("target_range", {})
        mn, mx = rng.get("min", 1), rng.get("max", 99)
        w = 2.0 if not t.get("is_nlp") else 1.0
        if t.get("use_in_heading"):
            w *= 1.3
        c = _count(t["term"], text)
        if mn <= c <= mx:
            credit = 1.0
        elif c > mx:
            credit = 0.9
        elif c > 0:
            credit = c / mn
        else:
            credit = 0.0
        total_w += w
        got_w += credit * w
        if c < mn:
            under.append({"term": t["term"], "have": c, "min": mn, "max": mx,
                          "weight": round(w, 1), "in_heading": bool(t.get("use_in_heading"))})

    sc = round(got_w / total_w * 100) if total_w else 0
    # Sort under-target by how much weight x gap is left — biggest wins first.
    under.sort(key=lambda u: -(u["weight"] * (u["min"] - u["have"])))
    out = {
        "score": sc,
        "satisfied": len(included) - len(under),
        "total": len(included),
        "under": under[: args.top],
    }
    print(json.dumps(out, indent=2))


def main():
    p = argparse.ArgumentParser(description="Surfer term-coverage scorer")
    sub = p.add_subparsers(dest="cmd", required=True)

    pf = sub.add_parser("fetch-terms", help="create CE query + save term database")
    pf.add_argument("--keyword", required=True)
    pf.add_argument("--location", default="United States")
    pf.add_argument("--out", required=True)
    pf.set_defaults(func=fetch_terms)

    ps = sub.add_parser("score", help="score a draft against saved terms")
    ps.add_argument("--terms", required=True)
    ps.add_argument("--draft", required=True)
    ps.add_argument("--top", type=int, default=20, help="how many under-target terms to return")
    ps.set_defaults(func=score)

    args = p.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
