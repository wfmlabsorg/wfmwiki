/* ============================================================
   TARS Codex — Core UI behaviors
   ============================================================ */

(function () {
  'use strict';

  /* --- Mobile sidebar toggle --- */
  const sidebar  = document.getElementById('wikiSidebar');
  const toggle   = document.getElementById('sidebarToggle');
  const overlay  = document.getElementById('sidebarOverlay');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  if (toggle)  toggle.addEventListener('click', () => sidebar.classList.contains('open') ? closeSidebar() : openSidebar());
  if (overlay) overlay.addEventListener('click', closeSidebar);

  /* --- Sidebar group collapse/expand --- */
  const STORAGE_KEY = 'codex-nav-groups';

  function loadGroupState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch { return {}; }
  }

  function saveGroupState(state) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }

  const navGroups = document.querySelectorAll('.nav-group');
  const groupState = loadGroupState();

  navGroups.forEach(group => {
    const groupId = group.dataset.group;
    const header = group.querySelector('.nav-group-header');

    // Restore state: open if has active item OR was previously open
    if (group.classList.contains('open')) {
      // Already open (has active page) — keep it
      groupState[groupId] = true;
    } else if (groupState[groupId]) {
      group.classList.add('open');
      header.setAttribute('aria-expanded', 'true');
    }

    header.addEventListener('click', () => {
      const isOpen = group.classList.toggle('open');
      header.setAttribute('aria-expanded', String(isOpen));
      groupState[groupId] = isOpen;
      saveGroupState(groupState);
    });
  });

  saveGroupState(groupState);

  /* --- Active TOC highlighting on scroll --- */
  const tocLinks = document.querySelectorAll('.toc-content a');

  if (tocLinks.length) {
    const headings = Array.from(document.querySelectorAll('.article-content h2, .article-content h3, .article-content h4'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tocLinks.forEach(link => link.classList.remove('toc-active'));
          const id = entry.target.id;
          const active = document.querySelector(`.toc-content a[href="#${id}"]`);
          if (active) active.classList.add('toc-active');
        }
      });
    }, { rootMargin: '-10% 0px -80% 0px' });

    headings.forEach(h => observer.observe(h));
  }

  /* --- Smooth anchor scroll with offset --- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', `#${id}`);
      }
    });
  });

  /* --- Mark external links --- */
  document.querySelectorAll('.article-content a').forEach(link => {
    if (link.hostname && link.hostname !== location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      if (!link.querySelector('.external-icon')) {
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-arrow-up-right-from-square';
        icon.style.cssText = 'font-size:0.65em;margin-left:3px;opacity:0.5;';
        link.appendChild(icon);
      }
    }
  });

  /* --- Keyboard shortcut: / to focus search --- */
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      const searchInput = document.getElementById('wikiSearch');
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
        if (window.innerWidth < 900) openSidebar();
      }
    }
    if (e.key === 'Escape') {
      const searchInput = document.getElementById('wikiSearch');
      if (searchInput && document.activeElement === searchInput) {
        searchInput.blur();
      }
    }
  });

})();
