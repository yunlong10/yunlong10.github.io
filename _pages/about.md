---
layout: about
title: About
permalink: /
nav: false
nav_order: 1
subtitle:
profile:
  align: right
  image: website/prof_pic_4_26_sq.jpg
  hide: true
  image_circular: false # crops the image to make it cicular
  more_info:
    # false

news: false # includes a list of news items
social: true # includes social icons at the bottom of the page
# Skip heavy scripts not used on the landing page (see _includes/scripts/mathjax.liquid, masonry.liquid)
math: false
masonry: false
medium_zoom: true
table_enhance: false
common_js: false
copy_code: false
jupyter: false
---

<div class="about-bio about-prompt" markdown="1">

Yolo is a final-year Ph.D. candidate at the [University of Rochester](https://www.rochester.edu/) (UR), advised by [Prof. Chenliang Xu](https://www.cs.rochester.edu/~cxu22/index.html), working on <a href="https://github.com/yunlong10/Awesome-LLMs-for-Video-Understanding">LMMs/Agents &times; Video Understanding</a>. She earned her M.S. from UR in 2025 en route to her Ph.D. and received her B.Eng. from [SUSTech](https://www.sustech.edu.cn/en/) in 2023. She has interned at [Amazon](https://www.aboutamazon.com/), [ByteDance](https://www.bytedance.com/en/), and [Tencent](https://www.tencent.com/).

<div class="about-prompt-actions" aria-label="Contact links">
  <div class="about-prompt-action-group">
    <a
      href="https://scholar.google.com/citations?user={{ site.scholar_userid }}"
      class="about-prompt-action"
      aria-label="Google Scholar"
      title="Google Scholar"
      target="_blank"
      rel="noopener noreferrer"
      data-about-scholar-action
      data-scholar-href="https://scholar.google.com/citations?user={{ site.scholar_userid }}"
      data-scholar-label="Google Scholar"
      data-scholar-icon="ai ai-google-scholar"
      data-instagram-href="https://www.instagram.com/yoloytang.art/"
      data-instagram-label="Instagram"
      data-instagram-icon="fa-brands fa-instagram"
    >
      <i class="ai ai-google-scholar" aria-hidden="true"></i>
    </a>
    <a
      href="https://github.com/{{ site.github_username }}"
      class="about-prompt-action about-prompt-github"
      aria-label="GitHub"
      title="GitHub"
      target="_blank"
      rel="noopener noreferrer"
      data-about-github-action
      data-github-href="https://github.com/{{ site.github_username }}"
      data-github-label="GitHub"
      data-github-icon="fa-brands fa-github"
      data-youtube-href="https://www.youtube.com/@yoloytang-art"
      data-youtube-label="YouTube"
      data-youtube-icon="fa-brands fa-square-youtube"
    >
      <i class="fa-brands fa-github" aria-hidden="true"></i>
    </a>
    <a
      href="https://x.com/{{ site.x_username }}"
      class="about-prompt-action about-prompt-x"
      aria-label="X"
      title="X"
      target="_blank"
      rel="noopener noreferrer"
      data-about-x-action
      data-x-href="https://x.com/{{ site.x_username }}"
      data-x-creative-href="https://x.com/yoloytang_art"
    >
      <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
    </a>
  </div>
  <details class="about-model-select">
    <summary aria-label="Yolo mode">
      <span class="about-model-variant" data-about-model-current>Academic</span>
      <span class="about-model-brand">Yolo</span>
    </summary>
    <div class="about-model-options" role="listbox" aria-label="Yolo mode options">
      <button type="button" role="option" aria-selected="true" data-about-model-value="Academic">
        <span class="about-model-variant">Academic</span>
        <span class="about-model-brand">Yolo</span>
      </button>
      <button type="button" role="option" aria-selected="false" data-about-model-value="Creative">
        <span class="about-model-variant">Creative</span>
        <span class="about-model-brand">Yolo</span>
      </button>
      <button type="button" role="option" aria-selected="false" data-about-model-value="Meow">
        <span class="about-model-variant">Meow</span>
        <span class="about-model-brand">Yolo</span>
      </button>
    </div>
  </details>
  <a
    href="mailto:{{ site.email | encode_email }}"
    class="about-prompt-action about-prompt-email"
    aria-label="Email"
    title="Email"
    data-about-contact-action
    data-email-href="mailto:{{ site.email | encode_email }}"
    data-email-label="Email"
    data-email-icon="fa-regular fa-envelope"
    data-discord-href="https://discord.com/users/1152784980167106662"
    data-discord-label="Discord"
    data-discord-icon="fa-brands fa-discord"
    data-telegram-href="https://telegram.me/yoloytang"
    data-telegram-label="Telegram"
    data-telegram-icon="fa-brands fa-telegram"
  >
    <i class="fa-regular fa-envelope" aria-hidden="true"></i>
  </a>
</div>

</div>

<nav class="about-quick-links" aria-label="Quick links">
  <a href="{{ '/research/' | relative_url }}" data-about-panel-trigger="research" aria-expanded="false" aria-controls="about-research-panel">
    <i class="fa-regular fa-compass" aria-hidden="true"></i>
    <span class="quick-link-title">Research</span>
  </a>
  <a href="{{ '/gallery/' | relative_url }}" data-about-panel-trigger="gallery" aria-expanded="false" aria-controls="about-gallery-panel">
    <i class="fa-regular fa-images" aria-hidden="true"></i>
    <span class="quick-link-title">Gallery</span>
  </a>
  <a href="{{ '/blog/' | relative_url }}" data-about-panel-trigger="blog" aria-expanded="false" aria-controls="about-blog-panel">
    <i class="fa-regular fa-pen-to-square" aria-hidden="true"></i>
    <span class="quick-link-title">Yo'Log</span>
  </a>
  <a href="{{ '/misc/' | relative_url }}" data-about-panel-trigger="misc" aria-expanded="false" aria-controls="about-misc-panel">
    <i class="fa-regular fa-star" aria-hidden="true"></i>
    <span class="quick-link-title">Misc.</span>
  </a>
</nav>

<section id="about-research-panel" class="about-inline-panel about-inline-research research-jp" data-about-panel="research" aria-label="Research" hidden>
  <div class="about-inline-panel-inner">
    {% include research_map.liquid %}
    {% include research_controls.liquid %}

    <div id="research-map-paper-panel" class="research-map-paper-panel" hidden>
      <p class="selected-research-note-row">* Equal Contribution | † Corresponding Author</p>
      {% include selected_papers.liquid %}
    </div>

  </div>
</section>

<section id="about-gallery-panel" class="about-inline-panel about-inline-simple gallery-jp" data-about-panel="gallery" aria-label="Gallery" hidden>
  <div class="about-inline-panel-inner">
    {% include painting_gallery.liquid %}
  </div>
</section>

<section id="about-blog-panel" class="about-inline-panel about-inline-blog" data-about-panel="blog" aria-label="Yo'Log" hidden>
  <div class="about-inline-panel-inner">
    <ul class="post-list">
      {% for post in site.posts %}
        {% if post.external_source == blank %}
          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        {% else %}
          {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
        {% endif %}
        <li>
          <h3>
            {% if post.redirect == blank %}
              <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            {% elsif post.redirect contains '://' %}
              <a class="post-title" href="{{ post.redirect }}" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
            {% else %}
              <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
            {% endif %}
          </h3>
          <p>{{ post.description }}</p>
          <p class="post-meta">{{ read_time }} min read &nbsp; &middot; &nbsp; {{ post.date | date: '%B %d, %Y' }}</p>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section id="about-misc-panel" class="about-inline-panel about-inline-simple misc-jp" data-about-panel="misc" aria-label="Misc." hidden>
  <div class="about-inline-panel-inner">
    <!-- <h4 class="misc-heading">Good to Know</h4> -->
    <ul class="misc-list">
      <li>Please don't deadname or misgender Yolo. She prefers Yolo (in English) or 芸珑 (in Mandarin).</li>
      <li>Yolo is really into J-pop, <a href="{{ '/gallery/' | relative_url }}">painting</a>, and cosplay — maybe she's just cosplaying as a researcher :)</li>
    </ul>
    <!-- <h4 class="misc-heading">Visitor Map</h4> -->
    <div class="misc-map">
      <script id="_waule0">var _wau_opt = { target: "_blank" }; var _wau = _wau || []; _wau.push(["map", "xarqno8oer", "le0", "600", "300", "dashmap", "heart-pink"]);</script>
      <script async src="//waust.at/m.js"></script>
    </div>
  </div>
</section>

<!-- Please feel free to [contact me](/#social-links) if you're interested in collaboration! -->
