(function () {
  var article = document.querySelector(".article");
  var nav = document.getElementById("toc-nav");
  var filter = document.getElementById("toc-filter");
  if (!article || !nav) return;

  var headings = Array.prototype.slice.call(article.querySelectorAll("h2, h3"));
  if (!headings.length) return;

  var list = document.createElement("ol");
  list.className = "toc-list";
  var current = null;

  headings.forEach(function (heading) {
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
    }
    var item = document.createElement("li");
    item.className = heading.tagName === "H2" ? "toc-h2" : "toc-h3";
    var link = document.createElement("a");
    link.href = "#" + heading.id;
    link.textContent = heading.textContent;
    item.appendChild(link);
    if (heading.tagName === "H2") {
      current = document.createElement("ol");
      item.appendChild(current);
      list.appendChild(item);
    } else if (current) {
      current.appendChild(item);
    } else {
      list.appendChild(item);
    }
  });

  nav.appendChild(list);

  var links = Array.prototype.slice.call(nav.querySelectorAll("a"));

  function mark(id) {
    links.forEach(function (link) {
      var on = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", on);
      if (on) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) mark(entry.target.id);
        });
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    headings.forEach(function (heading) {
      observer.observe(heading);
    });
  }

  function applyFilter(query) {
    var groups = list.querySelectorAll(":scope > li");
    Array.prototype.forEach.call(groups, function (group) {
      var head = group.querySelector(":scope > a");
      var headMatch = !query || head.textContent.toLowerCase().indexOf(query) !== -1;
      var anyChild = false;
      Array.prototype.forEach.call(group.querySelectorAll("ol > li"), function (child) {
        var text = child.querySelector("a").textContent.toLowerCase();
        var childMatch = !query || headMatch || text.indexOf(query) !== -1;
        if (text.indexOf(query) !== -1) anyChild = true;
        child.hidden = !childMatch;
      });
      group.hidden = Boolean(query) && !headMatch && !anyChild;
    });
  }

  if (filter) {
    filter.addEventListener("input", function () {
      applyFilter(filter.value.trim().toLowerCase());
    });
  }

  var params = new URLSearchParams(window.location.search);
  var query = params.get("q");
  if (query && filter) {
    filter.value = query;
    filter.dispatchEvent(new Event("input"));
    var match = links.find(function (link) {
      return !link.parentElement.hidden;
    });
    if (match) {
      match.click();
    }
  }
})();
