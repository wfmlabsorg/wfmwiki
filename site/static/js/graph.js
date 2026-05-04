/* ============================================================
   TARS Wiki — D3.js Force-directed Graph
   ============================================================ */

(function () {
  'use strict';

  const COLORS = {
    project:        '#3a7bd5',
    skill:          '#e0c43a',
    agent:          '#e06b3a',
    infrastructure: '#3ab5b5',
    tool:           '#b5783a',
    hook:           '#8a3ae0',
    decision:       '#e0a03a',
    learning:       '#3ab58a',
    pattern:        '#e03a6b',
    principle:      '#6be03a',
    person:         '#3a8ae0',
    reference:      '#6ba3e0',
    glossary:       '#b5b53a',
    roadmap:        '#3ae0c4',
    experiment:     '#e03ab5',
    state:          '#7a8aaa',
    research:       '#9b6be0',
    // Legacy category fallbacks
    projects:       '#3a7bd5',
    decisions:      '#e0a03a',
    learnings:      '#3ab58a',
    default:        '#4a5a80',
  };

  const NODE_RADIUS = {
    min: 6,
    max: 18,
    default: 9,
  };

  let simulation, svg, g, zoom;
  let showLabels = true;
  let graphData = null;

  async function init() {
    if (!window.WIKI_GRAPH_URL) return;

    try {
      const resp = await fetch(window.WIKI_GRAPH_URL);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      graphData = await resp.json();
      buildGraph(graphData);
    } catch (err) {
      console.warn('[TARS Wiki] Graph data unavailable:', err.message);
      document.getElementById('graphContainer').innerHTML =
        '<div style="padding:2rem;text-align:center;color:#4a5a80">Graph data not yet generated.<br>Run <code>bun run tools/build-graph-data.ts</code></div>';
    }
  }

  function buildGraph(data) {
    const container = document.getElementById('graphContainer');
    if (!container) return;

    const width  = container.clientWidth  || window.innerWidth  - 260;
    const height = container.clientHeight || window.innerHeight - 120;

    svg = d3.select('#wikiGraph')
      .attr('width', width)
      .attr('height', height);

    /* Zoom behavior */
    zoom = d3.zoom()
      .scaleExtent([0.2, 4])
      .on('zoom', e => g.attr('transform', e.transform));

    svg.call(zoom);

    g = svg.append('g').attr('class', 'graph-root');

    /* Count inbound links for node sizing */
    const linkCount = {};
    data.nodes.forEach(n => { linkCount[n.id] = 0; });
    data.edges.forEach(e => {
      if (linkCount[e.target] !== undefined) linkCount[e.target]++;
    });

    /* Build D3 simulation */
    const nodes = data.nodes.map(n => ({
      ...n,
      linkCount: linkCount[n.id] || 0,
    }));

    const links = data.edges.map(e => ({ ...e }));

    simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(80).strength(0.5))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide(d => nodeRadius(d) + 4));

    /* Edges */
    const link = g.append('g').attr('class', 'links')
      .selectAll('line')
      .data(links)
      .join('line')
        .attr('stroke', '#1e2a42')
        .attr('stroke-width', 1.2)
        .attr('stroke-opacity', 0.7)
        .attr('marker-end', 'url(#arrowhead)');

    /* Nodes */
    const node = g.append('g').attr('class', 'nodes')
      .selectAll('g')
      .data(nodes)
      .join('g')
        .attr('class', 'graph-node')
        .call(drag(simulation))
        .on('click', (event, d) => {
          event.stopPropagation();
          showDetail(d);
        })
        .on('mouseover', (event, d) => showTooltip(event, d))
        .on('mousemove', (event) => moveTooltip(event))
        .on('mouseout', hideTooltip);

    /* Node circles */
    node.append('circle')
      .attr('r', d => nodeRadius(d))
      .attr('fill', d => COLORS[d.type] || COLORS.default)
      .attr('fill-opacity', 0.85)
      .attr('stroke', d => COLORS[d.type] || COLORS.default)
      .attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.4)
      .style('cursor', 'pointer');

    /* Node labels */
    const label = node.append('text')
      .attr('class', 'node-label')
      .attr('dy', d => nodeRadius(d) + 12)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Inter, sans-serif')
      .attr('font-size', '10px')
      .attr('fill', '#8a9bc8')
      .attr('pointer-events', 'none')
      .text(d => truncate(d.title, 22));

    /* Tick */
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    /* Controls */
    document.getElementById('graphReset')?.addEventListener('click', resetView);
    document.getElementById('graphZoomIn')?.addEventListener('click',  () => svg.transition().call(zoom.scaleBy, 1.4));
    document.getElementById('graphZoomOut')?.addEventListener('click', () => svg.transition().call(zoom.scaleBy, 0.7));

    document.getElementById('graphLabels')?.addEventListener('change', e => {
      showLabels = e.target.checked;
      label.attr('display', showLabels ? null : 'none');
    });

    document.getElementById('graphDetailClose')?.addEventListener('click', hideDetail);

    svg.on('click', hideDetail);

    /* Resize */
    new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      svg.attr('width', w).attr('height', h);
      simulation.force('center', d3.forceCenter(w / 2, h / 2));
      simulation.alpha(0.1).restart();
    }).observe(container);
  }

  function nodeRadius(d) {
    const base = NODE_RADIUS.default;
    const extra = Math.min(d.linkCount * 1.5, NODE_RADIUS.max - base);
    return base + extra;
  }

  function drag(sim) {
    return d3.drag()
      .on('start', (event, d) => {
        if (!event.active) sim.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x; d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) sim.alphaTarget(0);
        d.fx = null; d.fy = null;
      });
  }

  /* Tooltip */
  const tooltip = document.getElementById('graphTooltip');

  function showTooltip(event, d) {
    if (!tooltip) return;
    tooltip.innerHTML = `
      <strong>${escapeHtml(d.title)}</strong>
      <br><span style="color:#4a5a80;font-size:0.7em">${d.type || ''} &bull; ${d.linkCount} inbound</span>
    `;
    tooltip.hidden = false;
    moveTooltip(event);
  }

  function moveTooltip(event) {
    if (!tooltip) return;
    const container = document.getElementById('graphContainer');
    const rect = container.getBoundingClientRect();
    let x = event.clientX - rect.left + 12;
    let y = event.clientY - rect.top  - 28;
    // Clamp
    x = Math.min(x, rect.width  - tooltip.offsetWidth  - 10);
    y = Math.max(y, 4);
    tooltip.style.left = x + 'px';
    tooltip.style.top  = y + 'px';
  }

  function hideTooltip() {
    if (tooltip) tooltip.hidden = true;
  }

  /* Detail panel */
  function showDetail(d) {
    const panel   = document.getElementById('graphDetail');
    const content = document.getElementById('graphDetailContent');
    if (!panel || !content) return;

    content.innerHTML = `
      <h3 style="font-size:0.9rem;font-weight:600;margin-bottom:8px;color:#e2e8f8">${escapeHtml(d.title)}</h3>
      <p style="font-size:0.75rem;color:#4a5a80;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.05em">${d.type || ''}</p>
      ${d.status ? `<span class="status-badge status-${d.status}" style="margin-bottom:12px;display:inline-block">${d.status}</span>` : ''}
      <p style="font-size:0.78rem;color:#8a9bc8;margin-bottom:12px">${d.linkCount} page(s) link here</p>
      <a href="${escapeHtml((window.WIKI_BASE_URL || '/') + d.id + '/')}"
         style="display:block;padding:8px 12px;background:#1e2d4a;border:1px solid #263454;border-radius:6px;
                font-size:0.8rem;color:#6ba3e0;text-decoration:none;text-align:center"
         onmouseover="this.style.background='#263454'" onmouseout="this.style.background='#1e2d4a'">
        Open page &rarr;
      </a>
    `;

    panel.hidden = false;
  }

  function hideDetail() {
    const panel = document.getElementById('graphDetail');
    if (panel) panel.hidden = true;
  }

  function resetView() {
    svg.transition().duration(600).call(
      zoom.transform,
      d3.zoomIdentity
    );
  }

  function truncate(str, len) {
    if (!str) return '';
    return str.length > len ? str.slice(0, len) + '…' : str;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* Init when DOM ready */
  if (document.getElementById('wikiGraph')) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

})();
