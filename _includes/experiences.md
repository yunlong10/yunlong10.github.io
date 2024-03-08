<h2 id="experiences" style="margin: 2px 0px -15px;">Experiences</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.experiences.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser2 img-fluid z-depth-1" style="width=100%;height=40%">
    {% endif %}
    {% if link.affiliation_short %} 
    <abbr class="badge">{{ link.affiliation_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.website }}">{{ link.affiliation }}</a></div>
      <div class="time">{{ link.base }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ link.time }}</div>
      <div class="position"><em>{{ link.position }}</em></div>
      {% if link.mentors %} 
      <div class="mentors">
        {% if link.mentors.size > 1 %}
            Mentors:
        {% else %}
            Mentor:
        {% endif %}
        {% for mentor in link.mentors %}
            {% if mentor.page %}
                <a href="{{ mentor.page }}">{{ mentor.name }}</a>
            {% else %}
                {{ mentor.name }}
            {% endif %}
            {% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </div>
      {% endif %}
      {% if link.advisors %} 
      <div class="advisors">
        {% if link.advisors.size > 1 %}
            Advisors:
        {% else %}
            Advisor:
        {% endif %}
        {% for advisor in link.advisors %}
            {% if advisor.page %}
                <a href="{{ advisor.page }}">{{ advisor.name }}</a>
            {% else %}
                {{ advisor.name }}
            {% endif %}
            {% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </div>
      {% endif %}
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
      {% if link.promotion %} 
      <a href="{{ link.promotion }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Promotion</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.workshop %} 
      <a href="{{ link.workshop }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Workshop Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

<br>

{% endfor %}

</ol>
</div>

