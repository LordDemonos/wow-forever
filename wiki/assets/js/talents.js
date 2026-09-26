(function () {
  var article = document.getElementById("content");
  if (!article) return;

  var marker = "/forever/talent-calc";
  var bareUrl = /^https?:\/\/(?:www\.)?wowhead\.com\/forever\/talent-calc\/\S+$/;

  Array.prototype.forEach.call(article.querySelectorAll("p"), function (paragraph) {
    var href = standaloneHref(paragraph);
    if (!href) return;
    var src = embedUrl(href);
    if (!src) return;

    var frame = document.createElement("iframe");
    frame.className = "talent-calc";
    frame.src = src;
    frame.title = frameTitle(paragraph);
    frame.loading = "lazy";
    paragraph.replaceWith(frame);
  });

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

  function embedUrl(href) {
    var url;
    try {
      url = new URL(href);
    } catch (e) {
      return "";
    }
    if (url.hostname !== "www.wowhead.com" && url.hostname !== "wowhead.com") return "";
    var at = url.pathname.indexOf(marker);
    if (at === -1) return "";
    var rest = url.pathname.slice(at + marker.length);
    if (rest === "/embed" || rest.indexOf("/embed/") === 0) return url.toString();
    url.pathname = url.pathname.slice(0, at) + marker + "/embed" + rest;
    return url.toString();
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
