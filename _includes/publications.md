<h2 id="publications" style="margin: 2px 0px 5px;">Selected Research</h2>
\* indicates equal contribution.

<!-- 标签页导航 -->
<div class="nav nav-tabs" id="researchTabs" role="tablist">
  <a class="nav-link active" id="video-understanding-tab" href="#video-understanding" role="tab">Und.</a>
  <a class="nav-link" id="video-generation-tab" href="#video-generation" role="tab">Gen.</a>
  <a class="nav-link" id="lmm-agents-tab" href="#lmm-agents" role="tab">Agents</a>
  <a class="nav-link" id="all-tab" href="#all" role="tab">All</a>
</div>

<!-- 标签页内容 -->
<div class="tab-content" id="researchTabsContent">
  <div class="tab-pane fade show active" id="video-understanding" role="tabpanel">
    <div class="publications">
      <ol class="bibliography">
        {% for link in site.data.publications.main %}
        {% if link.category contains 'understanding' %}
        <li>
        <div class="pub-row">
          <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
            {% if link.image %} 
            <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100%;height=40%">
            {% endif %}
            {% if link.conference_short %} 
            <abbr class="badge">{{ link.conference_short }}</abbr>
            {% endif %}
          </div>
          <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
              <div class="title"><a href="{{ link.abs }}">{{ link.title }}</a></div>
              <div class="author">{{ link.authors }}</div>
              <div class="periodical"><em>{{ link.conference }}</em></div>
            <div class="links">
              {% if link.pdf %} 
              <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
              {% endif %}
              {% if link.code %} 
              <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
              {% endif %}
              {% if link.dataset %} 
              <a href="{{ link.dataset }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Dataset</a>
              {% endif %}
              {% if link.page %} 
              <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
              {% endif %}
              {% if link.workshop %} 
              <a href="{{ link.workshop }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Workshop Page</a>
              {% endif %}
              {% if link.certificate %} 
              <a href="{{ link.certificate }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Certificate</a>
              {% endif %}
              {% if link.bibtex %} 
              <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
              {% endif %}
              {% if link.news %} 
              <a href="{{ link.news }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">News</a>
              {% endif %}
              {% if link.notes %} 
              <br>
              <strong> <i style="color:deeppink">{{ link.notes }}</i></strong>
              {% endif %}
              {% if link.others %} 
              {{ link.others }}
              {% endif %}
            </div>
          </div>
        </div>
        </li>
        <br>
        {% endif %}
        {% endfor %}
      </ol>
    </div>
  </div>
  <div class="tab-pane fade" id="video-generation" role="tabpanel">
    <div class="publications">
      <ol class="bibliography">
        {% for link in site.data.publications.main %}
        {% if link.category contains 'generation' %}
        <li>
        <div class="pub-row">
          <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
            {% if link.image %} 
            <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100%;height=40%">
            {% endif %}
            {% if link.conference_short %} 
            <abbr class="badge">{{ link.conference_short }}</abbr>
            {% endif %}
          </div>
          <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
              <div class="title"><a href="{{ link.abs }}">{{ link.title }}</a></div>
              <div class="author">{{ link.authors }}</div>
              <div class="periodical"><em>{{ link.conference }}</em></div>
            <div class="links">
              {% if link.pdf %} 
              <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
              {% endif %}
              {% if link.code %} 
              <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
              {% endif %}
              {% if link.dataset %} 
              <a href="{{ link.dataset }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Dataset</a>
              {% endif %}
              {% if link.page %} 
              <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
              {% endif %}
              {% if link.workshop %} 
              <a href="{{ link.workshop }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Workshop Page</a>
              {% endif %}
              {% if link.certificate %} 
              <a href="{{ link.certificate }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Certificate</a>
              {% endif %}
              {% if link.bibtex %} 
              <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
              {% endif %}
              {% if link.news %} 
              <a href="{{ link.news }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">News</a>
              {% endif %}
              {% if link.notes %} 
              <br>
              <strong> <i style="color:deeppink">{{ link.notes }}</i></strong>
              {% endif %}
              {% if link.others %} 
              {{ link.others }}
              {% endif %}
            </div>
          </div>
        </div>
        </li>
        <br>
        {% endif %}
        {% endfor %}
      </ol>
    </div>
  </div>
  <div class="tab-pane fade" id="lmm-agents" role="tabpanel">
    <div class="publications">
      <ol class="bibliography">
        {% for link in site.data.publications.main %}
        {% if link.category contains 'agent' %}
        <li>
        <div class="pub-row">
          <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
            {% if link.image %} 
            <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100%;height=40%">
            {% endif %}
            {% if link.conference_short %} 
            <abbr class="badge">{{ link.conference_short }}</abbr>
            {% endif %}
          </div>
          <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
              <div class="title"><a href="{{ link.abs }}">{{ link.title }}</a></div>
              <div class="author">{{ link.authors }}</div>
              <div class="periodical"><em>{{ link.conference }}</em></div>
            <div class="links">
              {% if link.pdf %} 
              <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
              {% endif %}
              {% if link.code %} 
              <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
              {% endif %}
              {% if link.dataset %} 
              <a href="{{ link.dataset }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Dataset</a>
              {% endif %}
              {% if link.page %} 
              <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
              {% endif %}
              {% if link.workshop %} 
              <a href="{{ link.workshop }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Workshop Page</a>
              {% endif %}
              {% if link.certificate %} 
              <a href="{{ link.certificate }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Certificate</a>
              {% endif %}
              {% if link.bibtex %} 
              <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
              {% endif %}
              {% if link.news %} 
              <a href="{{ link.news }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">News</a>
              {% endif %}
              {% if link.notes %} 
              <br>
              <strong> <i style="color:deeppink">{{ link.notes }}</i></strong>
              {% endif %}
              {% if link.others %} 
              {{ link.others }}
              {% endif %}
            </div>
          </div>
        </div>
        </li>
        <br>
        {% endif %}
        {% endfor %}
      </ol>
    </div>
  </div>
  <div class="tab-pane fade" id="all" role="tabpanel">
       <center>
       <a href="https://scholar.google.com/citations?hl=en&user=xf1rCgoAAAAJ"><i class="ai ai-google-scholar" style="font-size:1.2rem"> Google Scholar</i></a>
       </center>
  </div>
</div>