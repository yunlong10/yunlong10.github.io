---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 2
page_class: research-jp
selected_papers: true
math: false
masonry: false
---

<div class="research-map-hint">Click a station or topic to show related papers.</div>
<div class="research-map-shell">
  <button type="button" class="research-map-scroll research-map-scroll-left" aria-label="Scroll research map left">‹</button>
  <div class="research-map" id="research-map-trigger">
    <svg viewBox="-35 -50 1005 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-pink-blue" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#DB2777"/>
        <stop offset="100%" stop-color="#2563EB"/>
      </linearGradient>
    </defs>

    <!-- === Lines (back to front) === -->
    <path d="M100,85 L470,85" stroke="#2563EB" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M470,85 L830,85" stroke="#7C3AED" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M170,160 L295,160 C375,160 455,75 470,85 C525,50 605,0 695,0 L695,0"
          stroke="#F9A8D4" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M430,0 L695,0" stroke="#38BDF8" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M100,85 C170,35 190,5 265,0 L295,0 C370,5 420,55 470,85"
          stroke="#DB2777" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M470,85 C520,120 550,150 625,160 L675,160 C750,155 770,135 830,85"
          stroke="#DB2777" stroke-width="6" fill="none" stroke-linecap="round"/>

    <!-- Hub -->
    <circle cx="100" cy="85" r="14" fill="var(--global-text-color)"/>
    <circle cx="100" cy="85" r="9" class="rm-bg"/>
    <g class="rm-topic rm-hub-topic" data-paper-mode="all-cites">
      <text x="40" y="67" class="rm-label" fill="var(--global-text-color)" font-size="22" text-anchor="middle">LMMs/Agents</text>
      <text x="40" y="82" class="rm-label" fill="var(--global-text-color)" font-size="30" text-anchor="middle">×</text>
      <text x="40" y="97" class="rm-label" fill="var(--global-text-color)" font-size="22" text-anchor="middle">Video</text>
      <text x="40" y="112" class="rm-label" fill="var(--global-text-color)" font-size="22" text-anchor="middle">Understanding</text>
    </g>

    <!-- Track labels -->
    <text x="190" y="70" class="rm-label rm-topic" fill="#2563EB" data-paper-keys="tang2024avicuna,hua2024v2xum,tang2026takusen,tang2025catv,vidllmsurvey">Temporal Understanding</text>
    <text x="225" y="-10" class="rm-label rm-topic" fill="#DB2777" data-paper-keys="tang2025videor4,tang2025videolmm_posttraining,vidllmsurvey">Video Reasoning</text>
    <text x="655" y="70" class="rm-label rm-topic" fill="#7C3AED" text-anchor="middle" data-paper-keys="tang2024cardiff,tang2025catv,tang2025videor4,vidllmsurvey">Spatiotemporal LMMs/Agents</text>
    <text x="535" y="-10" class="rm-label rm-topic" fill="#38BDF8" text-anchor="end" data-paper-keys="tang2024vidcompostion,tang2025mmperspective,vidllmsurvey">LMM Evaluation</text>
    <text x="170" y="150" class="rm-label rm-topic" fill="#F9A8D4" data-paper-keys="tang2025mmperspective,vidllmsurvey">Spatial Understanding</text>

    <!-- === Stations === -->
    <a href="https://github.com/yunlong10/AVicuna" target="_blank" class="rm-station" data-paper-key="tang2024avicuna">
      <circle cx="210" cy="85" r="8" fill="#2563EB"/>
      <circle cx="210" cy="85" r="5" class="rm-bg"/>
      <text x="210" y="107" class="rm-name" text-anchor="middle">AVicuna</text>
      <text x="210" y="120" class="rm-venue" text-anchor="middle">[AAAI '25]</text>
    </a>

    <a href="https://hanghuacs.github.io/v2xum/" target="_blank" class="rm-station" data-paper-key="hua2024v2xum">
      <circle cx="340" cy="85" r="8" fill="#2563EB"/>
      <circle cx="340" cy="85" r="5" class="rm-bg"/>
      <text x="340" y="107" class="rm-name" text-anchor="middle">V2Xum-LLM</text>
      <text x="340" y="120" class="rm-venue" text-anchor="middle">[AAAI '25]</text>
    </a>

    <a href="https://yunlong10.github.io/VidComposition/" target="_blank" class="rm-station" data-paper-key="tang2024vidcompostion">
      <circle cx="590" cy="0" r="8" fill="#38BDF8"/>
      <circle cx="590" cy="0" r="5" class="rm-bg"/>
      <text x="590" y="-25" class="rm-name" text-anchor="middle">VidComposition</text>
      <text x="590" y="-12" class="rm-venue" text-anchor="middle">[CVPR '25]</text>
    </a>

    <a href="https://yunlong10.github.io/MMPerspective/" target="_blank" class="rm-station" data-paper-key="tang2025mmperspective">
      <circle cx="695" cy="0" r="8" fill="#F9A8D4"/>
      <path d="M687,0 A8,8 0 0,1 703,0 Z" fill="#38BDF8"/>
      <circle cx="695" cy="0" r="5" class="rm-bg"/>
      <text x="695" y="-23" class="rm-name" text-anchor="middle">MMPerspective</text>
      <text x="695" y="-12" class="rm-venue" text-anchor="middle">[NeurIPS D&B '25]</text>
    </a>

    <a href="https://github.com/yunlong10/Awesome-Video-LMM-Post-Training" target="_blank" class="rm-station" data-paper-key="tang2025videolmm_posttraining">
      <circle cx="650" cy="160" r="8" fill="#DB2777"/>
      <circle cx="650" cy="160" r="5" class="rm-bg"/>
      <text x="650" y="182" class="rm-name" text-anchor="middle">Video-LMM</text>
      <text x="650" y="195" class="rm-name" text-anchor="middle">Post-Training</text>
    </a>

    <a href="https://ojs.aaai.org/index.php/AAAI/article/view/32785" target="_blank" class="rm-station" data-paper-key="tang2024cardiff">
      <circle cx="590" cy="85" r="8" fill="#7C3AED"/>
      <circle cx="590" cy="85" r="5" class="rm-bg"/>
      <text x="590" y="107" class="rm-name" text-anchor="middle">CaRDiff</text>
      <text x="590" y="120" class="rm-venue" text-anchor="middle">[AAAI '25]</text>
    </a>

    <!-- Interchange: Vid-LLM Survey -->
    <a href="https://github.com/yunlong10/Awesome-LLMs-for-Video-Understanding" target="_blank" class="rm-station" data-paper-key="vidllmsurvey">
      <circle cx="470" cy="85" r="12" fill="var(--global-text-color)"/>
      <circle cx="470" cy="85" r="10" class="rm-bg"/>
      <text x="470" y="107" class="rm-name" text-anchor="middle">Vid-LLM</text>
      <text x="470" y="120" class="rm-name" text-anchor="middle">Survey</text>
      <text x="470" y="133" class="rm-venue" text-anchor="middle">[TCSVT '25]</text>
    </a>

    <a href="https://github.com/yunlong10/CAT-V" target="_blank" class="rm-station" data-paper-key="tang2025catv">
      <circle cx="710" cy="85" r="8" fill="#7C3AED"/>
      <circle cx="710" cy="85" r="5" class="rm-bg"/>
      <text x="710" y="107" class="rm-name" text-anchor="middle">CAT-V</text>
      <text x="710" y="120" class="rm-venue" text-anchor="middle">[AAAI Demo '26]</text>
    </a>

    <a href="https://yunlong10.github.io/Video-R4/" target="_blank" class="rm-station" data-paper-key="tang2025videor4">
      <circle cx="830" cy="85" r="8" fill="#DB2777"/>
      <path d="M822,85 A8,8 0 0,1 838,85 Z" fill="#7C3AED"/>
      <circle cx="830" cy="85" r="5" class="rm-bg"/>
      <text x="830" y="57" class="rm-name" text-anchor="middle">Video-R4</text>
      <text x="830" y="68" class="rm-venue" text-anchor="middle">[CVPR Findings '26]</text>
    </a>

    <!-- Dashed future lines -->
    <path d="M838,82 L910,82" stroke="#7C3AED" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="6,5"/>
    <path d="M838,88 L910,88" stroke="#DB2777" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="6,5"/>
    <path d="M703,-2 C840,5 920,69 920,75" stroke="#38BDF8" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="6,5"/>
    <path d="M703,2 C790,0 920,69 920,75" stroke="#F9A8D4" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="6,5"/>

    <!-- Future marker -->
    <circle cx="920" cy="85" r="12" fill="var(--global-text-color)"/>
    <circle cx="920" cy="85" r="10" class="rm-bg"/>
    <text x="920" y="92" fill="var(--global-text-color)" font-size="18" font-weight="700" text-anchor="middle">?</text>
    </svg>

  </div>
  <button type="button" class="research-map-scroll research-map-scroll-right" aria-label="Scroll research map right">›</button>
</div>

<p class="research-map-mobile-hint">Swipe left or right to explore the full map.</p>
<div class="research-controls">
  <div class="research-control-buttons" aria-label="Research controls">
    <div class="research-control-pill research-control-search" data-research-pill="search">
      <button type="button" class="research-control-button" data-research-control="search" aria-pressed="false" title="Search publications">
        <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        <span>Search</span>
      </button>
      <div class="research-control-expansion">
        {% include bib_search.liquid %}
      </div>
    </div>
    <button type="button" class="research-control-button" data-research-control="reset" title="Reset filters">
      <i class="fa-solid fa-rotate-left" aria-hidden="true"></i>
      <span>Reset</span>
    </button>
    <div class="research-control-pill research-control-sort" data-research-pill="sort">
      <button type="button" class="research-control-button" data-research-control="sort" aria-pressed="false" title="Sort publications">
        <i class="fa-solid fa-arrow-down-wide-short" aria-hidden="true"></i>
        <span>Sort</span>
      </button>
      <div class="research-control-expansion">
        <select id="pub-sort-by" aria-label="Sort publications">
          <option value="default" selected hidden></option>
          <option value="cites">Citations</option>
          <option value="year">Year</option>
          <option value="authorpos">Author position</option>
          <option value="stars">GitHub stars</option>
        </select>
      </div>
    </div>
  </div>
</div>
<p class="selected-research-note-row">* Equal Contribution | † Corresponding Author</p>

{% if page.selected_papers %}

  <div id="research-map-paper-panel" class="research-map-paper-panel" hidden>
    <div class="research-map-paper-panel-header">
      <button type="button" class="research-map-paper-close" aria-label="Hide selected paper">&times;</button>
    </div>
    {% include selected_papers.liquid %}
  </div>
{% endif %}

<script>
  (function () {
    var trigger = document.getElementById('research-map-trigger');
    var mapShell = document.querySelector('.research-map-shell');
    var scrollLeft = mapShell ? mapShell.querySelector('.research-map-scroll-left') : null;
    var scrollRight = mapShell ? mapShell.querySelector('.research-map-scroll-right') : null;
    var paperPanel = document.getElementById('research-map-paper-panel');
    var paperClose = paperPanel ? paperPanel.querySelector('.research-map-paper-close') : null;
    var selectedPubs = document.getElementById('selected-publications');
    var bibSearch = document.getElementById('bibsearch');
    var sortSelect = document.getElementById('pub-sort-by');
    var controls = document.querySelector('.research-controls');
    var controlButtons = Array.prototype.slice.call(document.querySelectorAll('.research-control-button[data-research-control]'));
    var sortButtonLabel = document.querySelector('.research-control-button[data-research-control="sort"] span');

    function allPaperItems() {
      if (!selectedPubs) return [];
      return Array.prototype.slice.call(selectedPubs.querySelectorAll('ol.bibliography > li'));
    }

    function paperItemForKey(key) {
      if (!selectedPubs || !key) return null;
      var entry = selectedPubs.querySelector('#' + key);
      return entry ? entry.closest('li') : null;
    }

    function paperKeysForNode(node) {
      if (!node) return [];
      var raw = node.getAttribute('data-paper-keys') || node.getAttribute('data-paper-key') || '';
      return raw
        .split(',')
        .map(function (key) {
          return key.trim();
        })
        .filter(Boolean);
    }

    function parseCount(val) {
      if (val == null || val === '') return 0;
      var n = parseInt(String(val).replace(/,/g, ''), 10);
      return isNaN(n) ? 0 : n;
    }

    function isDefaultSort() {
      return !sortSelect || sortSelect.value === 'default';
    }

    function isSurveyItem(item) {
      return !!(item && item.querySelector('#vidllmsurvey'));
    }

    function defaultOrderedItems(items) {
      return items.slice().sort(function (a, b) {
        if (isSurveyItem(a) && !isSurveyItem(b)) return 1;
        if (isSurveyItem(b) && !isSurveyItem(a)) return -1;
        return 0;
      });
    }

    function paperItemsForNode(node) {
      if (!node) return [];
      if (node.getAttribute('data-paper-mode') === 'all-cites') {
        if (isDefaultSort()) return defaultOrderedItems(allPaperItems());
        return allPaperItems().sort(function (a, b) {
          var ar = a.querySelector('.row');
          var br = b.querySelector('.row');
          return parseCount(br && br.getAttribute('data-sort-cites')) - parseCount(ar && ar.getAttribute('data-sort-cites'));
        });
      }
      return paperKeysForNode(node)
        .map(paperItemForKey)
        .filter(function (item, idx, arr) {
          return item && arr.indexOf(item) === idx;
        })
        .sort(function (a, b) {
          if (!isDefaultSort()) return 0;
          if (isSurveyItem(a) && !isSurveyItem(b)) return 1;
          if (isSurveyItem(b) && !isSurveyItem(a)) return -1;
          return 0;
        });
    }

    function hidePaperPanel() {
      if (!paperPanel) return;
      paperPanel.hidden = true;
      allPaperItems().forEach(function (li) {
        li.hidden = true;
      });
      document.querySelectorAll('.rm-station.active, .rm-topic.active').forEach(function (node) {
        node.classList.remove('active');
      });
    }

    function showPapersForSearch() {
      if (!paperPanel || !bibSearch) return;
      if (!bibSearch.value.trim()) {
        hidePaperPanel();
        return;
      }

      setControlMode('search');
      paperPanel.hidden = false;
      allPaperItems().forEach(function (li) {
        li.hidden = false;
      });
      document.querySelectorAll('.rm-station.active, .rm-topic.active').forEach(function (node) {
        node.classList.remove('active');
      });
    }

    function clearBibSearch() {
      if (!bibSearch) return;
      bibSearch.value = '';
      document.querySelectorAll('.bibliography, .unloaded').forEach(function (element) {
        element.classList.remove('unloaded');
      });
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }

    function setControlMode(mode) {
      var wasSortActive = controls && controls.classList.contains('mode-sort');
      if (controls) {
        controls.classList.toggle('mode-search', mode === 'search');
        controls.classList.toggle('mode-sort', mode === 'sort');
      }
      controlButtons.forEach(function (button) {
        var control = button.getAttribute('data-research-control');
        button.setAttribute('aria-pressed', control === mode ? 'true' : 'false');
        button.classList.toggle('active', control === mode);
      });
      if (sortButtonLabel) sortButtonLabel.textContent = mode === 'sort' ? 'Sort by' : 'Sort';
      if (mode === 'search' && bibSearch) {
        window.setTimeout(function () {
          bibSearch.focus();
        }, 0);
      }
      if (mode === 'sort' && sortSelect) {
        window.setTimeout(function () {
          sortSelect.focus();
        }, 0);
        if (!wasSortActive) {
          if (sortSelect.value === 'default') sortSelect.value = 'cites';
          sortSelect.dispatchEvent(new Event('change'));
        }
      }
    }

    function resetResearchFilters() {
      clearBibSearch();
      if (sortSelect) {
        sortSelect.value = 'default';
        sortSelect.dispatchEvent(new Event('change'));
      }
      hidePaperPanel();
      setControlMode(null);
    }

    function showPapersForNode(node) {
      if (!paperPanel || !node) return false;
      clearBibSearch();
      if (controls) {
        controls.classList.remove('mode-search');
        controls.classList.remove('mode-sort');
      }
      controlButtons.forEach(function (button) {
        button.setAttribute('aria-pressed', 'false');
        button.classList.remove('active');
      });
      if (sortButtonLabel) sortButtonLabel.textContent = 'Sort';
      var keys = paperKeysForNode(node);
      var items = paperItemsForNode(node);
      if (!items.length) return false;

      allPaperItems().forEach(function (li) {
        li.hidden = items.indexOf(li) === -1;
      });
      if (items[0] && items[0].parentElement) {
        var list = items[0].parentElement;
        items.forEach(function (li) {
          list.appendChild(li);
        });
      }
      paperPanel.hidden = false;
      document.querySelectorAll('.rm-station.active, .rm-topic.active').forEach(function (n) {
        n.classList.remove('active');
      });
      keys.forEach(function (key) {
        document.querySelectorAll('.rm-station[data-paper-key="' + key + '"]').forEach(function (station) {
          station.classList.add('active');
        });
      });
      node.classList.add('active');
      if (sortSelect && !isDefaultSort()) sortSelect.dispatchEvent(new Event('change'));
      paperPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return true;
    }

    trigger.addEventListener('click', function (e) {
      var mapNode = e.target.closest('.rm-station, .rm-topic');
      if (mapNode) {
        e.preventDefault();
        showPapersForNode(mapNode);
      }
    });
    if (scrollLeft) {
      scrollLeft.addEventListener('click', function (e) {
        e.stopPropagation();
        trigger.scrollBy({ left: -Math.round(trigger.clientWidth * 0.72), behavior: 'smooth' });
      });
    }
    if (scrollRight) {
      scrollRight.addEventListener('click', function (e) {
        e.stopPropagation();
        trigger.scrollBy({ left: Math.round(trigger.clientWidth * 0.72), behavior: 'smooth' });
      });
    }
    if (paperClose) paperClose.addEventListener('click', hidePaperPanel);
    controlButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var control = button.getAttribute('data-research-control');
        if (control === 'reset') {
          resetResearchFilters();
          return;
        }
        setControlMode(button.classList.contains('active') ? null : control);
      });
    });
    if (bibSearch) {
      bibSearch.addEventListener('input', showPapersForSearch);
      window.addEventListener('hashchange', function () {
        window.setTimeout(showPapersForSearch, 0);
      });
      document.addEventListener('DOMContentLoaded', function () {
        window.setTimeout(showPapersForSearch, 0);
      });
    }
    hidePaperPanel();
  })();
</script>
