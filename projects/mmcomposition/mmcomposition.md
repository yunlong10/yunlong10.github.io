---
title: MMComposition
permalink: projects/mmcomposition/
category: work
---

<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> MMComposition </title>

  <link rel="icon" href="./static/images/mmcomposition.png">

  <link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet">

  <link rel="stylesheet" href="./static/css/bulma.min.css">
  <link rel="stylesheet" href="./static/css/bulma-carousel.min.css">
  <link rel="stylesheet" href="./static/css/bulma-slider.min.css">
  <link rel="stylesheet" href="./static/css/fontawesome.all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
  <link rel="stylesheet" href="./static/css/index.css">
  <link rel="stylesheet" href="./static/css/leaderboard.css">
  <link rel="stylesheet" href="./static/css/video-player.css">

  <!-- <link href="https://unpkg.com/tabulator-tables@5.5.2/dist/css/tabulator_bulma.min.css" rel="stylesheet">
  <script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.5.2/dist/js/tabulator.min.js"></script> -->
  <script type="text/javascript" src="static/js/sort-table.js" defer></script>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script defer src="./static/js/fontawesome.all.min.js"></script>
  <script src="./static/js/bulma-carousel.min.js"></script>
  <script src="./static/js/bulma-slider.min.js"></script>
  <script src="./static/js/explorer-index.js"></script>
  <script src="./static/js/question_card.js"></script>

  <script src="./static/js/leaderboard_testmini.js"></script>
  <!-- <script src="./data/results/output_folders.js" defer></script>
  <script src="./data/results/model_scores.js" defer></script>

  <script src="./visualizer/data/data_public.js" defer></script> -->
  <script>
    document.addEventListener("DOMContentLoaded", function() {
        const columns = [4, 5, 6, 7];  // 需要处理的列索引 (Overall, Perception, Reasoning, Probing)
        columns.forEach(colIndex => {
            let maxVal = -Infinity;
            let maxCell = null;
            let cells = document.querySelectorAll(`#results tbody tr td:nth-child(${colIndex + 1})`);
            cells.forEach(cell => {
                let cellValue = parseFloat(cell.textContent);
                if (cellValue > maxVal) {
                    maxVal = cellValue;
                    maxCell = cell;
                }
            });
            if (maxCell) {
                maxCell.style.fontWeight = "bold";
            }
        });
    });
</script>

</head>
<body>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start" style="flex-grow: 1; justify-content: center;">

  <div class="navbar-item has-dropdown is-hoverable">
        <p style="font-size:18px; display: inline; margin-right: -2px; margin-top: 12px;">🔥</p>
        <a class="navbar-link">
          More Research
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="https://github.com/yunlong10/MMComposition">
            <b>MMComposition</b> 
          </a>
          <a class="navbar-item" href="https://github.com/yunlong10/MMComposition">
            <b>MMComposition</b> 
          </a>
        </div>
      </div>
    </div>

  </div>
</nav>

<section class="hero">
  <div class="hero-body">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h1 class="title is-1 publication-title is-bold">
            <img src="static/images/mmcomposition.png" style="width:1.6em;vertical-align: middle" alt="Logo"/>
            <span class="video-mme" style="vertical-align: middle">MMComposition</span>
            </h1>
          <h2 class="subtitle is-3 publication-subtitle" style="margin-bottom: 20px;">
            Benchmarking the Compositionality for Pre-trained Vision-Language Models
          </h2>
          <div class="is-size-5 publication-authors" style="width: 80%; margin: 20px auto;" >
            <span class="author-block">Hang Hua*<sup style="color:#6fbf73;">1</sup>,</span>
            <span class="author-block">Yunlong Tang*<sup style="color:#6fbf73;">1</sup>,</span>
            <span class="author-block">Ziyun Zeng*<sup style="color:#6fbf73;">1</sup>,</span>
            <span class="author-block">Liangliang Cao<sup style="color:#ed4b82;">2</sup>,</span>
            <span class="author-block">Zhengyuan Yang<sup style="color:#2d9ffd;">3</sup>,</span><br>
            <span class="author-block">Hangfeng He<sup style="color:#6fbf73;">1</sup>,</span>
            <span class="author-block">Chenliang Xu<sup style="color:#6fbf73;">1</sup>,</span>
            <span class="author-block">Jiebo Luo&dagger;<sup style="color:#6fbf73;">1</sup>,</span><br>
            <!-- <span class="author-block" style="font-size:24px"><a href="https://github.com/BradyFU/Video-MME">MMComposition Team</a></span> -->
        </div>
          <div class="is-size-5 publication-authors">
            <span class="author-block"><sup style="color:#6fbf73;">1</sup>University of Rochester,</span>
            <span class="author-block"><sup style="color:#ed4b82">2</sup>Apple,</span>
            <span class="author-block"><sup style="color:#2d9ffd">3</sup>Microsoft</span>
            <!-- <span class="paper-block"><b style="color:#f41c1c">ICLR 2024 Oral</b> (85 in 7304, 1.2%)</span> -->
          </div>
          <div class="column has-text-centered">
            <div class="publication-links">
              <!-- PDF Link. -->
              <span class="link-block">
                <a href=""
                   class="external-link button is-normal is-rounded is-dark">
                <!-- <a href="https://lupantech.github.io/papers/arxiv23_mathvista.pdf"
                   class="external-link button is-normal is-rounded is-dark"> -->
                  <span class="icon">
                      <i class="ai ai-arxiv"></i>
                  </span>
                  <span>arXiv</span>
                </a>
              </span>
              <!-- Code Link. -->
              <span class="link-block">
                <a href="https://github.com/yunlong10/MMComposition"
                   class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                      <i class="fab fa-github"></i>
                  </span>
                  <span>Code</span>
                  </a>
              </span>
              <!-- Dataset Link. -->
              <span class="link-block">
                <a href="https://github.com/yunlong10/MMComposition"
                   class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                      <!-- <i class="far fa-images"></i> -->
                      <p style="font-size:18px">📊</p>
                  </span>
                  <span>Dataset</span>
                </a>
              </span> 
              <!-- Leaderboard Link. -->
              <span class="link-block">
                <a href="#leaderboard"
                   class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                      <p style="font-size:18px">🏆</p>
                  </span>
                  <span>Leaderboard</span>
                </a>
              </span>

            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<section class="section">
  <div class="container" style="margin-bottom: 2vh;">
    <!-- Abstract. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Introduction</h2>
        <div class="content has-text-justified">
          In the quest for advancing vision-language models (VLMs), recent developments such as GPT-4V, LLaVA, mPLUG, MiniGPT-4, and BLIP have shown impressive capabilities in complex reasoning tasks. However, these models still face challenges in understanding fine-grained multimodal compositional information, limiting their reliability and performance.

To address this, we introduce <strong>MMComposition</strong>, a novel benchmark specifically designed to evaluate the compositionality of VLMs comprehensively. <strong>MMComposition</strong> assesses VLMs across two main dimensions: vision-language (VL) compositional understanding and VL compositional reasoning. Unlike previous benchmarks that focus on single-choice questions or open-ended text generation, <strong>MMComposition</strong> provides a diverse set of tasks including single-choice questions, indefinite-choice questions, text generation, and text-image matching. This diversity ensures a thorough evaluation of the models' ability to understand and reason with compositional information across modalities.

Our findings reveal that even state-of-the-art models like GPT-4 struggle with nuanced compositional reasoning tasks. These insights highlight the need for further research to enhance VLMs' compositional abilities.

Our key contributions are:

<ol>
    <li>Proposing <strong>MMComposition</strong>, the first comprehensive benchmark for evaluating the compositionality of pretrained VLMs.</li>
    <li>Providing a thorough experimental evaluation of state-of-the-art VLMs' compositionality.</li>
    <li>Benchmarking a set of well-known VLMs using the proposed <strong>MMComposition</strong> benchmark.</li>
</ol>

<strong>MMComposition</strong> aims to inspire advancements in VLM design and training, ultimately improving their performance in understanding and reasoning with complex multimodal information.

</div>
</div>
</div>
<!--/ Abstract. -->

</div>
</section>

<section class="section">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-full has-text-centered content">
        <h2 class="title is-3" id="leaderboard">Leaderboard</h2>
        <div class="content">
          <!-- <p class="mt-3">Accuracy scores on Video-MME are presented for short, medium, and long videos, taking the corresponding subtitles as input or not.
          </p>
          <div class="video-duration">
            <p>
              <strong>Short Video:</strong> &lt; 2min  
              <strong>Medium Video:</strong> 4min ~ 15min
              <strong>Long Video:</strong> 30min ~ 60min
            </p> -->
            <p>
              By default, this leaderboard is sorted by overall results. To view other sorted results, please click on the corresponding cell. <span style="background-color: #ebf1b7;">Colored rows</span> indicate closed-source models/APIs.
            </p>
          <!-- </div> -->
      <table class="js-sort-table js-sort-asc" id="results" style="margin-left: auto; margin-right: auto;">
          <thead>
              <tr>
                  <th rowspan="1" style="vertical-align: middle; width: 50px;" data-js-sort-colNum="4"><strong>#</strong></th>
                  <th rowspan="1" class="no-sort" style="vertical-align: middle; width: 180px;" data-js-sort-colNum="NaN"><strong>Model</strong></th>
                  <th rowspan="1" class="no-sort" style="vertical-align: middle; width: 30px;" data-js-sort-colNum="NaN"><strong>LLM <br>Params</strong></th>
                  <th colspan="1" style="vertical-align: middle; width: 110px;" data-js-sort-colNum="3"><strong>Date</strong></th>
                  <th colspan="1" style="vertical-align: middle; width: 120px;" data-js-sort-colNum="4"><strong>Overall (%)</strong></th>
                  <th colspan="1" style="vertical-align: middle; width: 120px;" data-js-sort-colNum="5"><strong>Perception (%)</strong></th>
                  <th colspan="1" style="vertical-align: middle; width: 120px;" data-js-sort-colNum="6"><strong>Reasoning (%)</strong></th>
                  <th colspan="1" style="vertical-align: middle; width: 120px;" data-js-sort-colNum="7"><strong>Probing (%)</strong></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td style="vertical-align: middle;">1</td>
                  <td style="text-align: left; padding: 2px 10px;">
                      <b class="">
                          <a href="https://huggingface.co/OpenGVLab/InternVL2-40B" class="ext-link" style="font-size: 16px; margin-left: 5px;">InternVL2-40B</a>
                          <p style="font-size: 12px; margin-left: 5px; color: #858383;">Shanghai AI Lab</p>
                      </b>
                  </td>
                  <td style="vertical-align: middle;">40B </td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">68.44</td>
                  <td style="vertical-align: middle;">68.29</td>
                  <td style="vertical-align: middle;">69.90</td>
                  <td style="vertical-align: middle;">67.36</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">2</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/OpenGVLab/InternVL2-Llama3-76B" class="ext-link" style="font-size: 16px; margin-left: 5px;">InternVL2-76B-int8
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">Shanghai AI Lab</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">76B </td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">68.35</td>
                  <td style="vertical-align: middle;">67.68</td>
                  <td style="vertical-align: middle;">69.32</td>
                  <td style="vertical-align: middle;">67.14</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">3</td>
                  <td style="text-align: left; padding: 2px 10px;">
                      <b class="">
                          <a href="https://huggingface.co/OpenGVLab/InternVL2-26B" class="ext-link" style="font-size: 16px; margin-left: 5px;">InternVL2-26B</a>
                          <p style="font-size: 12px; margin-left: 5px; color: #858383;">Shanghai AI Lab</p>
                      </b>
                  </td>
                  <td style="vertical-align: middle;">26B </td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">64.11</td>
                  <td style="vertical-align: middle;">65.24</td>
                  <td style="vertical-align: middle;">66.90</td>
                  <td style="vertical-align: middle;">60.49</td>
              </tr>
              <tr style="background-color: #ebf1b7;">
                  <td style="vertical-align: middle;">4</td>
                  <!-- https://openai.com/index/gpt-4v-system-card/ -->
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://openai.com/index/hello-gpt-4o/" class="ext-link" style="font-size: 16px; margin-left: 5px;">GPT-4o
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">OpenAI</p>
                  </a> </b></td>
                  <td style="vertical-align: middle;">- </td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">59.43</td>
                  <td style="vertical-align: middle;">75.00</td>
                  <td style="vertical-align: middle;">61.13</td>
                  <td style="vertical-align: middle;">54.65</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">5</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/OpenGVLab/InternVL-Chat-V1-5" class="ext-link" style="font-size: 16px; margin-left: 5px;">InternVL-Chat-v1.5
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">Shanghai AI Lab</p>
                  </a> </b></td>
                  <td style="vertical-align: middle;">20B </td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">59.40</td>
                  <td style="vertical-align: middle;">63.41</td>
                  <td style="vertical-align: middle;">62.05</td>
                  <td style="vertical-align: middle;">57.01</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">6</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/liuhaotian/llava-v1.6-34b" class="ext-link" style="font-size: 16px; margin-left: 5px;">LLaVA-1.6-34B
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">NTU & UW Madison & ByteDance</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">34B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">58.00</td>
                  <td style="vertical-align: middle;">54.27</td>
                  <td style="vertical-align: middle;">61.59</td>
                  <td style="vertical-align: middle;">58.17</td>
              </tr>
              <tr style="background-color: #ebf1b7;">
                  <td style="vertical-align: middle;">7</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://github.com/QwenLM/Qwen-VL#qwen-vl-plus" class="ext-link" style="font-size: 16px; margin-left: 5px;">Qwen-VL-Max
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">Alibaba</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">20B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">54.86</td>
                  <td style="vertical-align: middle;">62.80</td>
                  <td style="vertical-align: middle;">61.36</td>
                  <td style="vertical-align: middle;">63.87</td>
              </tr>
              <tr>
                <td style="vertical-align: middle;">8</td>
                <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/internlm/internlm-xcomposer2-vl-7b" class="ext-link" style="font-size: 16px; margin-left: 5px;">InternLM-Xcomposer2-VL
                  <p style="font-size: 12px; margin-left: 5px; color: #858383;">Shanghai AI Lab & CUHK & SenseTime</p>
              </a></b></td>
              <td style="vertical-align: middle;">7B</td>
              <td style="vertical-align: middle;">2024/08/01</td>
              <td style="vertical-align: middle;">54.48</td>
              <td style="vertical-align: middle;">53.66</td>
              <td style="vertical-align: middle;">55.02</td>
              <td style="vertical-align: middle;">57.15</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">9</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://github.com/NVlabs/VILA" class="ext-link" style="font-size: 16px; margin-left: 5px;">VILA-1.5
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">NVIDIA & MIT</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">40B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">53.22</td>
                  <td style="vertical-align: middle;">56.10</td>
                  <td style="vertical-align: middle;">59.17</td>
                  <td style="vertical-align: middle;">65.21</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">10</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/BAAI/Bunny-Llama-3-8B-V" class="ext-link" style="font-size: 16px; margin-left: 5px;">Bunny-LLaMA-3-V
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">BAAI</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">8B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">50.79</td>
                  <td style="vertical-align: middle;">57.32</td>
                  <td style="vertical-align: middle;">51.67</td>
                  <td style="vertical-align: middle;">59.44</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">11</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/THUDM/cogvlm2-llama3-chat-19B" class="ext-link" style="font-size: 16px; margin-left: 5px;">CogVLM2
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">Zhipu AI</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">19B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">49.77</td>
                  <td style="vertical-align: middle;">59.15</td>
                  <td style="vertical-align: middle;">44.75</td>
                  <td style="vertical-align: middle;">50.69</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">12</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/microsoft/Phi-3-vision-128k-instruct" class="ext-link" style="font-size: 16px; margin-left: 5px;">Phi3-vision
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">Microsoft</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">4.2B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">48.23</td>
                  <td style="vertical-align: middle;">60.37</td>
                  <td style="vertical-align: middle;">48.79</td>
                  <td style="vertical-align: middle;">56.75</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">13</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/01-ai/Yi-VL-34B" class="ext-link" style="font-size: 16px; margin-left: 5px;">Yi-VL-34B
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">01.AI</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">34B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">47.63</td>
                  <td style="vertical-align: middle;">52.44</td>
                  <td style="vertical-align: middle;">52.94</td>
                  <td style="vertical-align: middle;">53.88</td>
              </tr>
              <tr style="background-color: #ebf1b7;">
                  <td style="vertical-align: middle;">14</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://www.stepfun.com/#step1v" class="ext-link" style="font-size: 16px; margin-left: 5px;">Step-1v-32k
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">Stepfun</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">- </td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">47.34</td>
                  <td style="vertical-align: middle;">59.76</td>
                  <td style="vertical-align: middle;">52.13</td>
                  <td style="vertical-align: middle;">45.46</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">15</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/01-ai/Yi-VL-6B" class="ext-link" style="font-size: 16px; margin-left: 5px;">Yi-VL-6B
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">01.AI</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">6B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">46.65</td>
                  <td style="vertical-align: middle;">51.83</td>
                  <td style="vertical-align: middle;">51.56</td>
                  <td style="vertical-align: middle;">48.76</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">16</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/BAAI/Bunny-v1_0-3B" class="ext-link" style="font-size: 16px; margin-left: 5px;">Bunny-3B
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">BAAI</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">3B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">46.31</td>
                  <td style="vertical-align: middle;">51.22</td>
                  <td style="vertical-align: middle;">46.14</td>
                  <td style="vertical-align: middle;">55.08</td>
              </tr>
              <tr>
                <td style="vertical-align: middle;">17</td>
                <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/BAAI/Bunny-v1_0-3B-zh" class="ext-link" style="font-size: 16px; margin-left: 5px;">Bunny-3B-zh
                  <p style="font-size: 12px; margin-left: 5px; color: #858383;">BAAI</p>
                </a></b></td>
                <td style="vertical-align: middle;">3B</td>
                <td style="vertical-align: middle;">2024/08/01</td>
                <td style="vertical-align: middle;">45.08</td>
                <td style="vertical-align: middle;">53.66</td>
                <td style="vertical-align: middle;">48.79</td>
                <td style="vertical-align: middle;">51.24</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">18</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/Qwen/Qwen-VL-Chat" class="ext-link" style="font-size: 16px; margin-left: 5px;">Qwen-VL-Chat
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">Alibaba</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">13B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">41.33</td>
                  <td style="vertical-align: middle;">58.54</td>
                  <td style="vertical-align: middle;">47.52</td>
                  <td style="vertical-align: middle;">41.54</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">19</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/BAAI/Bunny-v1_0-2B-zh" class="ext-link" style="font-size: 16px; margin-left: 5px;">Bunny-2B-zh
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">BAAI</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">2B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">40.66</td>
                  <td style="vertical-align: middle;">47.56</td>
                  <td style="vertical-align: middle;">47.29</td>
                  <td style="vertical-align: middle;">40.96</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">20</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/liuhaotian/llava-v1.6-vicuna-13b" class="ext-link" style="font-size: 16px; margin-left: 5px;">LLaVA-1.6-Vicuna-13B
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">NTU & UW Madison & ByteDance</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">13B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">37.63</td>
                  <td style="vertical-align: middle;">48.78</td>
                  <td style="vertical-align: middle;">50.29</td>
                  <td style="vertical-align: middle;">38.16</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">21</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/liuhaotian/llava-v1.6-mistral-7b" class="ext-link" style="font-size: 16px; margin-left: 5px;">LLaVA-1.6-Mistral-7B
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">NTU & UW Madison & ByteDance</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">7B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">36.83</td>
                  <td style="vertical-align: middle;">49.39</td>
                  <td style="vertical-align: middle;">41.18</td>
                  <td style="vertical-align: middle;">38.24</td>
              </tr>
              <tr>
                  <td style="vertical-align: middle;">22</td>
                  <td style="text-align: left; padding: 2px 10px;"><b class=""><a href="https://huggingface.co/liuhaotian/llava-v1.5-13b" class="ext-link" style="font-size: 16px; margin-left: 5px;">LLaVA-1.5-13B
                      <p style="font-size: 12px; margin-left: 5px; color: #858383;">NTU & UW Madison & ByteDance</p>
                  </a></b></td>
                  <td style="vertical-align: middle;">13B</td>
                  <td style="vertical-align: middle;">2024/08/01</td>
                  <td style="vertical-align: middle;">35.66</td>
                  <td style="vertical-align: middle;">46.34</td>
                  <td style="vertical-align: middle;">43.60</td>
                  <td style="vertical-align: middle;">41.39</td>
              </tr>
              </tbody>
              </table>
        <!-- <p style="text-align: left;">
          1* The short and medium videos are sampled at 1 fps, while the long videos are sampled at 2 fps to ensure the stability of the API.
          <br>2* The videos less than 384 seconds are sampled at 1 fps, and for those longer than 384 seconds, we extract 384 frames uniformly. All the frames are resized to 512x512 resolution to fit within GPT-4o’s max context length.
        </p> -->
        </div>
      </div>
    </div>
  </div>
</section>

<!-- DATASET SECTION -->
<section class="hero is-light is-small">
  <div class="hero-body has-text-centered">
  <h1 class="title is-1 mathvista_other">
    <span class="mathvista_other" style="vertical-align: middle">Benchmark</span>
  </h1>
  </div>
</section>
            
<section class="section">
  <div class="container">
    <div class="content has-text-centered">
      <h2 class="title is-3" style="margin-top: 30px;">Benchmark Statistics</h2>
      <!-- 图表部分 -->
      <div style="display: flex; justify-content: center;">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" style="width: 10vw; height: 60vh;"/>
        <div id="container" style="width: 80vw; height: 60vh; max-width: 1000px; margin: 0; padding: 0;"></div>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" style="width: 10vw; height: 60vh;"/>
      </div>
      <script type="text/javascript" src="https://registry.npmmirror.com/echarts/5.5.0/files/dist/echarts.min.js"></script>
      <script type="text/javascript" src="static/js/bingtu.js"></script>
      <p style="text-align: center; margin-left: auto; margin-right: auto; width: 50%;"> 
        <strong>Question Categorie Hierarchy</strong>: Question Types in MMComposition Benchmark for Evaluating Vision-Language Models.
      </p>
    </div>
  </div>
</section>

<!-- </section> -->
<section class="hero is-light is-small">
  <div class="hero-body has-text-centered">
    <h1 class="title is-1 mathvista_other" id="citation">Citation</h1>
  </div>
</section>

<section class="section" id="BibTeX">
  <div class="container is-max-desktop content">
    <pre><code>
    @article{hua2024mmcomposition,
      title={MMComposition: Benchmarking the Compositionality for Pre-trained Vision-Language Models},
      author={},
      journal={arXiv preprint arXiv:},
      year={2024}
    }
</code></pre>
  </div>
</section>

<section class="section">
  <div class="container" style="width: 60%;">
  <style>
      pre {
        background-color: #f4f4f4;
        padding: 5px; /* 调整padding为5px */
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto; /* 允许水平滚动 */
    }
    code {
        font-family: Consolas, "Courier New", monospace;
        color: #d63384; /* 代码文本颜色 */
    }
  </style>

  </div>
</section>

<footer class="footer">
  <!-- <div class="container"> -->
    <div class="content has-text-centered">
    </div>
    <div class="columns is-centered">
      <div class="column is-8">
        <div class="content">
          <p style="text-align: center;">
            This website is adapted from <a href="https://mathvista.github.io/">MathVista</a>, licensed under a <a rel="license"
                                                href="http://creativecommons.org/licenses/by-sa/4.0/">Creative
            Commons Attribution-ShareAlike 4.0 International License</a>.
          </p>
        </div>
      </div>
    </div>
  <!-- </div> -->
</footer>

</body>
</html>
