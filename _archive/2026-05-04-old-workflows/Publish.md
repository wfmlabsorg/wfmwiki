# Publish Workflow

**Trigger:** "publish wiki", "deploy wiki", "deploy wfmlabs.com wiki"

## Pipeline

1. **Lint gate** — Full `wfmwiki-lint.ts --quick` must pass. Hard fail otherwise.
2. **Sync** — Mirror `wfmwiki/wiki/` → `wfmwiki/site/content/` via `wfmwiki-publish.ts --sync`.
3. **Wikilink preprocessing** — Convert `[[slug|Display]]` → Hugo `{{< wikilink >}}` shortcode (or markdown link, depending on theme).
4. **Hugo build** — `cd site/ && hugo --minify`.
5. **Commit and push** — `git add -A && git commit -m "Publish: <summary>" && git push origin main`.
6. **Deploy** — Cloudflare Pages auto-builds on push to `main`. Verify deploy at https://wiki.wfmlabs.com.
7. **Health check** — Random sample 10 wikilinks resolve, search index up to date.
8. **Log** — Append: `## [YYYY-MM-DD HH:MM] publish | site=wiki.wfmlabs.com commit={sha}`.

## Pre-Publish Gates

- For any page with `ted_pov: true`: Evaluator agent must pass before publish.
- Schema version locked (no in-flight schema changes).
- No `status: stub` pages newer than 7 days *(stubs old enough have been triaged)*.

## Rollback

Standard git revert + redeploy:
```bash
git revert <commit-sha>
git push origin main
```
Cloudflare Pages auto-deploys the revert.

## DNS

`wiki.wfmlabs.com` → Cloudflare Pages project for `wfmlabsorg/wfmwiki`.
Old `wiki.wfmlabs.org` → 301 redirect to `wiki.wfmlabs.com` (post-migration).
