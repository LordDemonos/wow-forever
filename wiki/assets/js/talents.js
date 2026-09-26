(function () {
  var framePage = document.currentScript && document.currentScript.getAttribute("data-frame");
  var article = document.getElementById("content");
  if (!article || !framePage) return;

  var marker = "/forever/talent-calc";
  var bareUrl = /^https?:\/\/(?:www\.)?wowhead\.com\/forever\/talent-calc\/\S+$/;
  var buildHash = /^[a-z0-9]+(?:\/[a-z0-9._~!^-]+){0,2}$/i;

  Array.prototype.forEach.call(article.querySelectorAll("p"), function (paragraph) {
    var href = standaloneHref(paragraph);
    if (!href) return;
    var hash = talentHash(href);
    if (!hash) return;

    var frame = document.createElement("iframe");
    frame.className = "talent-calc";
    frame.title = frameTitle(paragraph);
    frame.setAttribute("scrolling", "no");
    frame.src = framePage + "?build=" + encodeURIComponent(hash);
    frame.addEventListener("load", function () {
      var doc = frame.contentDocument;
      if (!doc || doc.documentElement.dataset.ready !== "1") {
        var link = document.createElement("a");
        link.href = href;
        link.textContent = href;
        frame.replaceWith(link);
        return;
      }
      fit(frame);
      if (window.ResizeObserver) {
        new ResizeObserver(function () { fit(frame); }).observe(doc.body);
      }
    });
    paragraph.replaceWith(frame);
  });

  function fit(frame) {
    var doc = frame.contentDocument;
    if (!doc || !doc.body) return;
    var next = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
    if (next < 400) return;
    var style = getComputedStyle(frame);
    if (style.boxSizing === "border-box") {
      next += parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    }
    var current = parseInt(frame.style.height, 10) || 0;
    if (Math.abs(current - next) < 2) return;
    frame.style.height = next + "px";
  }

  function standaloneHref(paragraph) {
    var link = paragraph.querySelector("a");
    if (link) {
      if (paragraph.querySelectorAll("a").length !== 1) return "";
      if (paragraph.textContent.trim() !== link.textContent.trim()) return "";
      return link.href;
    }
    var text = paragraph.textContent.trim();
    return bareUrl.test(text) ? text : "";
  }

  function talentHash(href) {
    var url;
    try {
      url = new URL(href);
    } catch (e) {
      return "";
    }
    if (url.hostname !== "www.wowhead.com" && url.hostname !== "wowhead.com") return "";
    var at = url.pathname.indexOf(marker);
    if (at === -1) return "";
    var rest = url.pathname.slice(at + marker.length).replace(/^\/embed(?=\/|$)/, "");
    rest = rest.replace(/^\/+|\/+$/g, "");
    return buildHash.test(rest) ? rest : "";
  }

  function frameTitle(paragraph) {
    var heading = paragraph.previousElementSibling;
    while (heading && !/^H[1-6]$/.test(heading.tagName)) {
      heading = heading.previousElementSibling;
    }
    if (!heading) return "Talent calculator";
    var name = heading.textContent.trim();
    if (/talent/i.test(name)) return name + " calculator";
    return name + " talent calculator";
  }
})();
