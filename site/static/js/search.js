/* ============================================================
   TARS Wiki — Client-side search with lunr.js
   ============================================================ */

(function () {
  'use strict';

  const searchInput   = document.getElementById('wikiSearch');
  const resultsBox    = document.getElementById('searchResults');

  if (!searchInput || !resultsBox) return;

  let searchIndex = null;
  let pageData    = [];
  let selectedIdx = -1;

  /* Load search index (generated at build time by Hugo) */
  async function loadIndex() {
    try {
      const baseURL = document.querySelector('base')?.href || '/';
      const response = await fetch(`${baseURL}search-index.json`);
      if (!response.ok) return;

      const data = await response.json();
      pageData = data;

      searchIndex = lunr(function () {
        this.field('title',   { boost: 10 });
        this.field('tags',    { boost: 5  });
        this.field('section', { boost: 3  });
        this.field('content', { boost: 1  });
        this.ref('id');

        data.forEach((page, i) => {
          this.add({
            id:      i,
            title:   page.title   || '',
            tags:    (page.tags   || []).join(' '),
            section: page.section || '',
            content: (page.content || '').slice(0, 2000),
          });
        });
      });
    } catch (err) {
      console.warn('[TARS Wiki] Search index unavailable:', err.message);
    }
  }

  /* Render results */
  function renderResults(results) {
    resultsBox.innerHTML = '';
    selectedIdx = -1;

    if (!results.length) {
      resultsBox.innerHTML = '<div class="search-result-item"><span class="search-result-title">No results</span></div>';
      resultsBox.hidden = false;
      return;
    }

    results.slice(0, 8).forEach((r, i) => {
      const page = pageData[parseInt(r.ref)];
      if (!page) return;

      const item = document.createElement('div');
      item.className    = 'search-result-item';
      item.dataset.idx  = i;
      item.dataset.url  = page.url;
      item.innerHTML    = `
        <div class="search-result-title">${escapeHtml(page.title)}</div>
        <div class="search-result-section">${escapeHtml(page.section || '')}</div>
      `;

      item.addEventListener('click', () => navigate(page.url));
      item.addEventListener('mouseover', () => setSelected(i));
      resultsBox.appendChild(item);
    });

    resultsBox.hidden = false;
  }

  function setSelected(idx) {
    const items = resultsBox.querySelectorAll('.search-result-item');
    items.forEach((el, i) => el.classList.toggle('selected', i === idx));
    selectedIdx = idx;
  }

  function navigate(url) {
    if (url) window.location.href = url;
  }

  function closeResults() {
    resultsBox.hidden = true;
    selectedIdx = -1;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* Keyboard navigation */
  searchInput.addEventListener('keydown', e => {
    const items = resultsBox.querySelectorAll('.search-result-item');

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected(Math.min(selectedIdx + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected(Math.max(selectedIdx - 1, 0));
    } else if (e.key === 'Enter') {
      if (selectedIdx >= 0 && items[selectedIdx]) {
        navigate(items[selectedIdx].dataset.url);
      }
    } else if (e.key === 'Escape') {
      closeResults();
      searchInput.blur();
    }
  });

  /* Debounced search */
  let debounceTimer;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();

    clearTimeout(debounceTimer);

    if (!query) {
      closeResults();
      return;
    }

    debounceTimer = setTimeout(() => {
      if (!searchIndex) {
        loadIndex().then(() => doSearch(query));
        return;
      }
      doSearch(query);
    }, 150);
  });

  function doSearch(query) {
    if (!searchIndex) return;
    try {
      const results = searchIndex.search(query + '~1');  // fuzzy match
      renderResults(results);
    } catch (err) {
      // invalid query syntax — try literal
      try {
        renderResults(searchIndex.search(query));
      } catch (_) {
        closeResults();
      }
    }
  }

  searchInput.addEventListener('focus', () => {
    if (!searchIndex) loadIndex();
  });

  /* Close on outside click */
  document.addEventListener('click', e => {
    if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
      closeResults();
    }
  });

  /* Prefetch index on page load */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(loadIndex, 1000));
  } else {
    setTimeout(loadIndex, 1000);
  }

})();
