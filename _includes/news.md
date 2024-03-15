## News

<div id="newsList">
    <!-- Visible News -->
    <ul class="visible-news">
        {% for news_item in site.data.news.main limit:4 %}
            <li>{{ news_item.news | markdownify }}</li>
        {% endfor %}
    <!-- Hidden News -->
        <div class="hidden-news" style="display: none;">
            {% for news_item in site.data.news.main offset:4 %}
                <li>{{ news_item.news | markdownify }}</li>
            {% endfor %}
        </div>
        <li><a href="#" id="toggleNews" style="color:deeppink;">Show More</a></li>
    </ul>
</div>


<script>
document.getElementById("toggleNews").addEventListener("click", function(e) {
    e.preventDefault();

    var hiddenNews = document.querySelector(".hidden-news");

    if (hiddenNews.style.display === "none") {
        hiddenNews.style.display = "block";
        e.target.innerHTML = "Show Less";
    } else {
        hiddenNews.style.display = "none";
        e.target.innerHTML = "Show More";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Get all li elements from .visible-news and .hidden-news
    var listItems = document.querySelectorAll('.visible-news li, .hidden-news li');
    
    listItems.forEach(function(li) {
        var p = li.querySelector('p');
        if (p) {
            li.innerHTML = p.innerHTML;
        }
    });
});

</script>
