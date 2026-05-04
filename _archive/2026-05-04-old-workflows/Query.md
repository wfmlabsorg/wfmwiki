# Query Workflow

**Trigger:** "wiki: [question]", "what does the wiki say about [topic]"

## Pipeline

1. Read `wiki/index.md` to identify candidate pages.
2. Read top 3–7 candidate pages.
3. Synthesize answer with wikilink citations: every claim → `[[page-slug]]`.
4. **Optional file-back** — Ask Ted: *"Worth saving this answer as a wiki page?"* If yes, route to `PageCreate` (likely `synthesis` type).

## Why this matters

This avoids the "answers vanish into chat history" problem Karpathy flags. The wiki is the durable artifact; chats are ephemeral. If Ted asked the question, the answer is probably worth a page.

## Outputs

- Inline answer with wikilink citations
- Optional new wiki page (if filed back)
- Log entry only if filed back: `## [YYYY-MM-DD] query-fileback | {topic}`
