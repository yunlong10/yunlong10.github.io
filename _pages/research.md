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
table_enhance: false
copy_code: false
jupyter: false
---

{% include research_map.liquid %}
{% include research_controls.liquid %}

{% if page.selected_papers %}

  <div id="research-map-paper-panel" class="research-map-paper-panel" hidden>
    <div class="research-map-paper-panel-header">
      <button type="button" class="research-map-paper-close" aria-label="Hide selected paper">&times;</button>
    </div>
    {% include selected_papers.liquid %}
  </div>
{% endif %}

<script defer src="{{ '/assets/js/research.js' | relative_url | bust_file_cache }}"></script>
