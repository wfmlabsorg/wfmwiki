# PageCreate Workflow

**Trigger:** "create page [title]", "new wiki page", or downstream from Ingest workflow.

## Inputs (required)

- `type` (must match SCHEMA.md §1)
- `slug` (kebab-case, unique)
- `title` (display title)
- `domains` (≥1 valid slug from SCHEMA.md §2)
- Initial content OR pointer to source

## Optional inputs

- `aperture` (default: `contact-center`)
- `confidence` (default: `medium`)
- `sources` (list of source page slugs)
- `related` (list of related wiki page slugs)
- `ted_pov` (default: `false`; when `true`, Evaluator gates publish)

## Pipeline

1. **Validate** — `wfmwiki-frontmatter.ts --check` on proposed frontmatter.
2. **Slug uniqueness** — fail if `wiki/**/{slug}.md` exists.
3. **Template selection** — pick from `~/.claude/skills/WFMWiki/Context/templates/{type}.md`.
4. **Generate content** *(WikiEditor agent)*:
   - Apply template structure
   - Voice-consistent prose per SCHEMA.md §4
   - Citation discipline per SCHEMA.md §5
   - Wikilink density appropriate to type
5. **Write file** — `wiki/{type}s/{slug}.md` (pluralized directory).
6. **Update index** — `wfmwiki-index.ts --regen`.
7. **Update log** — `## [YYYY-MM-DD] page-create | {type}/{slug}`.
8. **Lint** — `wfmwiki-lint.ts --quick --scope=page:{slug}`.

## Templates by Type

Located at `~/.claude/skills/WFMWiki/Context/templates/`:
- `concept.md` — definition + examples + related concepts
- `method.md` — purpose + steps + caveats + related methods
- `tool.md` — vendor + capability + alternatives + integrations
- `calculator.md` — inputs + formula + outputs + assumptions + sources
- `practitioner.md` — bio + key contributions + works + relationships
- `source.md` — bibliographic metadata + key claims + concepts mentioned
- `overview.md` — domain map + first-class concepts + sub-pages
- `comparison.md` — methods compared + tradeoffs + when-to-use
- `synthesis.md` — Ted's framing + framework + evidence base
- `glossary.md` — short definition + cross-refs

## VERIFY

- Frontmatter validates
- Page renders in Obsidian preview cleanly
- All wikilinks resolve OR are flagged for follow-up creation
- Lint passes structural checks
