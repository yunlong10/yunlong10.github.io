(function () {
  var trigger = document.getElementById("research-map-trigger");
  if (!trigger) return;

  var mapShell = document.querySelector(".research-map-shell");
  var scrollLeft = mapShell ? mapShell.querySelector(".research-map-scroll-left") : null;
  var scrollRight = mapShell ? mapShell.querySelector(".research-map-scroll-right") : null;
  var paperPanel = document.getElementById("research-map-paper-panel");
  var paperClose = paperPanel ? paperPanel.querySelector(".research-map-paper-close") : null;
  var selectedPubs = document.getElementById("selected-publications");
  var bibSearch = document.getElementById("bibsearch");
  var sortSelect = document.getElementById("pub-sort-by");
  var controls = document.querySelector(".research-controls");
  var controlButtons = Array.prototype.slice.call(document.querySelectorAll(".research-control-button[data-research-control]"));
  var sortButtonLabel = document.querySelector('.research-control-button[data-research-control="sort"] span');
  var paperPanelTimer = null;
  var paperPanelHeightTimer = null;
  var paperPanelTransitionMs = 860;
  var paperPanelScrollMs = 980;

  function isPaperPanelVisible() {
    return paperPanel && !paperPanel.hidden && paperPanel.classList.contains("is-visible");
  }

  function setPaperPanelHeightToContent() {
    if (!isPaperPanelVisible()) return;
    paperPanel.style.setProperty("--research-paper-panel-height", paperPanel.scrollHeight + "px");
  }

  function releasePaperPanelHeight() {
    if (!isPaperPanelVisible()) return;
    paperPanel.style.setProperty("--research-paper-panel-height", "none");
  }

  function schedulePaperPanelHeightRelease() {
    window.clearTimeout(paperPanelHeightTimer);
    paperPanelHeightTimer = window.setTimeout(releasePaperPanelHeight, paperPanelTransitionMs + 80);
  }

  function refreshPaperPanelHeight() {
    setPaperPanelHeightToContent();
    schedulePaperPanelHeightRelease();
  }

  function allPaperItems() {
    if (!selectedPubs) return [];
    return Array.prototype.slice.call(selectedPubs.querySelectorAll("ol.bibliography > li"));
  }

  function paperItemForKey(key) {
    if (!selectedPubs || !key) return null;
    var entry = selectedPubs.querySelector("#" + key);
    return entry ? entry.closest("li") : null;
  }

  function paperKeysForNode(node) {
    if (!node) return [];
    var raw = node.getAttribute("data-paper-keys") || node.getAttribute("data-paper-key") || "";
    return raw
      .split(",")
      .map(function (key) {
        return key.trim();
      })
      .filter(Boolean);
  }

  function parseCount(val) {
    if (val == null || val === "") return 0;
    var n = parseInt(String(val).replace(/,/g, ""), 10);
    return isNaN(n) ? 0 : n;
  }

  function isDefaultSort() {
    return !sortSelect || sortSelect.value === "default";
  }

  function defaultOrderedItems(items) {
    var shuffledItems = items.slice();
    for (var i = shuffledItems.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = shuffledItems[i];
      shuffledItems[i] = shuffledItems[j];
      shuffledItems[j] = tmp;
    }
    return shuffledItems;
  }

  function paperItemsForNode(node) {
    if (!node) return [];
    if (node.getAttribute("data-paper-mode") === "all-cites") {
      if (isDefaultSort()) return defaultOrderedItems(allPaperItems());
      return allPaperItems().sort(function (a, b) {
        var ar = a.querySelector(".row");
        var br = b.querySelector(".row");
        return parseCount(br && br.getAttribute("data-sort-cites")) - parseCount(ar && ar.getAttribute("data-sort-cites"));
      });
    }
    var items = paperKeysForNode(node)
      .map(paperItemForKey)
      .filter(function (item, idx, arr) {
        return item && arr.indexOf(item) === idx;
      });
    if (isDefaultSort()) return defaultOrderedItems(items);
    return items;
  }

  function hidePaperPanel() {
    if (!paperPanel) return;
    window.clearTimeout(paperPanelTimer);
    window.clearTimeout(paperPanelHeightTimer);
    if (!paperPanel.hidden) {
      paperPanel.style.setProperty("--research-paper-panel-height", paperPanel.scrollHeight + "px");
      window.requestAnimationFrame(function () {
        paperPanel.classList.remove("is-visible");
        paperPanel.style.setProperty("--research-paper-panel-height", "0px");
      });
    }
    document.querySelectorAll(".rm-station.active, .rm-topic.active").forEach(function (node) {
      node.classList.remove("active");
    });
    paperPanelTimer = window.setTimeout(function () {
      if (paperPanel.classList.contains("is-visible")) return;
      paperPanel.hidden = true;
      allPaperItems().forEach(function (li) {
        li.hidden = true;
      });
    }, paperPanelTransitionMs);
  }

  function revealPaperPanel(shouldScroll) {
    if (!paperPanel) return;
    window.clearTimeout(paperPanelTimer);
    var wasVisible = !paperPanel.hidden && paperPanel.classList.contains("is-visible");
    paperPanel.hidden = false;
    if (!wasVisible) {
      paperPanel.classList.remove("is-visible");
      paperPanel.style.setProperty("--research-paper-panel-height", "0px");
    }

    window.requestAnimationFrame(function () {
      paperPanel.style.setProperty("--research-paper-panel-height", paperPanel.scrollHeight + "px");
      paperPanel.classList.add("is-visible");
      schedulePaperPanelHeightRelease();
      if (shouldScroll) {
        window.setTimeout(
          function () {
            slowScrollToPanel();
          },
          wasVisible ? 180 : 420
        );
      }
    });
  }

  function slowScrollToPanel() {
    if (!paperPanel) return;
    var startY = window.pageYOffset || document.documentElement.scrollTop || 0;
    var panelTop = paperPanel.getBoundingClientRect().top + startY;
    var headerOffset = Math.min(window.innerHeight * 0.12, 96);
    var targetY = Math.max(panelTop - headerOffset, 0);
    var distance = targetY - startY;
    if (Math.abs(distance) < 8) return;

    var startTime = null;
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / paperPanelScrollMs, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));
      if (progress < 1) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }

  function showPapersForSearch() {
    if (!paperPanel || !bibSearch) return;
    if (!bibSearch.value.trim()) {
      hidePaperPanel();
      return;
    }

    setControlMode("search");
    allPaperItems().forEach(function (li) {
      li.hidden = false;
    });
    document.querySelectorAll(".rm-station.active, .rm-topic.active").forEach(function (node) {
      node.classList.remove("active");
    });
    revealPaperPanel(false);
  }

  function clearBibSearch() {
    if (!bibSearch) return;
    bibSearch.value = "";
    document.querySelectorAll(".bibliography, .unloaded").forEach(function (element) {
      element.classList.remove("unloaded");
    });
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  function setControlMode(mode) {
    var wasSortActive = controls && controls.classList.contains("mode-sort");
    if (controls) {
      controls.classList.toggle("mode-search", mode === "search");
      controls.classList.toggle("mode-sort", mode === "sort");
    }
    controlButtons.forEach(function (button) {
      var control = button.getAttribute("data-research-control");
      button.setAttribute("aria-pressed", control === mode ? "true" : "false");
      button.classList.toggle("active", control === mode);
    });
    if (sortButtonLabel) sortButtonLabel.textContent = mode === "sort" ? "Sort by" : "Sort";
    if (mode === "search" && bibSearch) {
      window.setTimeout(function () {
        bibSearch.focus();
      }, 0);
    }
    if (mode === "sort" && sortSelect) {
      window.setTimeout(function () {
        sortSelect.focus();
      }, 0);
      if (!wasSortActive) {
        if (sortSelect.value === "default") sortSelect.value = "cites";
        sortSelect.dispatchEvent(new Event("change"));
      }
    }
  }

  function resetResearchFilters() {
    clearBibSearch();
    if (sortSelect) {
      sortSelect.value = "default";
      sortSelect.dispatchEvent(new Event("change"));
    }
    hidePaperPanel();
    setControlMode(null);
  }

  function showPapersForNode(node) {
    if (!paperPanel || !node) return false;
    clearBibSearch();
    if (controls) {
      controls.classList.remove("mode-search");
      controls.classList.remove("mode-sort");
    }
    controlButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", "false");
      button.classList.remove("active");
    });
    if (sortButtonLabel) sortButtonLabel.textContent = "Sort";
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
    document.querySelectorAll(".rm-station.active, .rm-topic.active").forEach(function (n) {
      n.classList.remove("active");
    });
    keys.forEach(function (key) {
      document.querySelectorAll('.rm-station[data-paper-key="' + key + '"]').forEach(function (station) {
        station.classList.add("active");
      });
    });
    node.classList.add("active");
    if (sortSelect && !isDefaultSort()) sortSelect.dispatchEvent(new Event("change"));
    revealPaperPanel(true);
    return true;
  }

  function activateMapNode(node, event) {
    if (!node) return;
    if (event) event.preventDefault();
    showPapersForNode(node);
  }

  trigger.addEventListener("click", function (e) {
    activateMapNode(e.target.closest(".rm-station, .rm-topic"), e);
  });
  trigger.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var mapNode = e.target.closest(".rm-station, .rm-topic");
    if (!mapNode) return;
    activateMapNode(mapNode, e);
  });
  if (scrollLeft) {
    scrollLeft.addEventListener("click", function (e) {
      e.stopPropagation();
      trigger.scrollBy({ left: -Math.round(trigger.clientWidth * 0.72), behavior: "smooth" });
    });
  }
  if (scrollRight) {
    scrollRight.addEventListener("click", function (e) {
      e.stopPropagation();
      trigger.scrollBy({ left: Math.round(trigger.clientWidth * 0.72), behavior: "smooth" });
    });
  }
  if (paperClose) paperClose.addEventListener("click", hidePaperPanel);
  controlButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var control = button.getAttribute("data-research-control");
      if (control === "reset") {
        resetResearchFilters();
        return;
      }
      setControlMode(button.classList.contains("active") ? null : control);
    });
  });
  if (bibSearch) {
    bibSearch.addEventListener("input", showPapersForSearch);
    window.addEventListener("hashchange", function () {
      window.setTimeout(showPapersForSearch, 0);
    });
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(showPapersForSearch, 0);
    });
  }
  if (paperPanel) {
    paperPanel.querySelectorAll("img").forEach(function (img) {
      if (!img.complete) img.addEventListener("load", refreshPaperPanelHeight, { once: true });
    });
    window.addEventListener("resize", refreshPaperPanelHeight, { passive: true });
  }
  hidePaperPanel();
})();
