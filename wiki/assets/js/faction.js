(function () {
  var article = document.querySelector(".article");
  if (!article) return;

  function iconImg(src, className) {
    return '<img class="' + className + '" alt="" src="' + src + '">';
  }

  var hordeIcon = iconImg(article.dataset.iconHorde, "faction-icon");
  var allianceIcon = iconImg(article.dataset.iconAlliance, "faction-icon");

  function icons(kind) {
    if (kind === "both") return hordeIcon + allianceIcon;
    return kind === "horde" ? hordeIcon : allianceIcon;
  }

  function badge(kind, label) {
    return '<span class="faction faction-' + kind + '">' + icons(kind) + "<span>" + label + "</span></span>";
  }

  function iconEl(kind) {
    var mark = document.createElement("span");
    mark.className = "faction-mark faction-" + kind;
    mark.setAttribute("aria-hidden", "true");
    mark.innerHTML = icons(kind);
    return mark;
  }

  function plain(el) {
    return el.textContent.replace(/\s+/g, " ").trim();
  }

  article.querySelectorAll("p").forEach(function (p) {
    var text = plain(p);
    if (text.indexOf("Go at ") !== 0) return;
    var kind = "";
    if (text.indexOf("Both factions") !== -1) {
      p.innerHTML = p.innerHTML.replace("Both factions", badge("both", "Both factions"));
      kind = "both";
    } else if (/\bAlliance\./.test(text)) {
      p.innerHTML = p.innerHTML.replace("Alliance.", badge("alliance", "Alliance") + ".");
      kind = "alliance";
    } else if (/\bHorde\./.test(text)) {
      p.innerHTML = p.innerHTML.replace("Horde.", badge("horde", "Horde") + ".");
      kind = "horde";
    }
    if (!kind) return;
    var heading = p.previousElementSibling;
    if (!heading || heading.tagName !== "H3") return;
    heading.classList.add("is-" + kind);
    heading.insertBefore(iconEl(kind), heading.firstChild);
    if (!heading.id) return;
    var link = document.querySelector('.toc-list a[href="#' + CSS.escape(heading.id) + '"]');
    if (link) link.parentElement.classList.add("is-" + kind);
  });

  article.querySelectorAll("h4").forEach(function (heading) {
    if (plain(heading) !== "Horde quests") return;
    heading.classList.add("is-horde");
    heading.insertBefore(iconEl("horde"), heading.firstChild);
  });

  function allianceMode(text) {
    if (/^Alliance\b/.test(text)) return "full";
    if (/Chain\. Alliance/.test(text)) return "full";
    if (/Alliance-only/.test(text)) return "full";
    if (/Alliance NPCs/.test(text)) return "full";
    if (/Alliance capital/.test(text)) return "full";
    if (/No Horde giver/.test(text)) return "full";
    if (/start in Alliance/.test(text)) return "full";
    if (/Alliance towns/.test(text) && text.length < 240) return "full";
    if (/\b(is|are) Alliance\b/.test(text)) return text.length > 280 ? "inline" : "full";
    return "";
  }

  article.querySelectorAll("p, li").forEach(function (el) {
    if (el.querySelector(".faction")) return;
    var text = plain(el);
    if (text.indexOf("Go at ") === 0) return;
    var mode = allianceMode(text);
    if (mode === "full") {
      el.classList.add("note-alliance");
      el.insertBefore(iconEl("alliance"), el.firstChild);
    } else if (mode === "inline") {
      el.innerHTML = el.innerHTML
        .replace("are Alliance", "are " + badge("alliance", "Alliance"))
        .replace("is Alliance", "is " + badge("alliance", "Alliance"));
    }
  });

  article.querySelectorAll("li").forEach(function (item) {
    if (item.textContent.indexOf("Horde comes before") === -1) return;
    item.innerHTML = item.innerHTML
      .replace("Horde comes", badge("horde", "Horde") + " comes")
      .replace("an Alliance one", "an " + badge("alliance", "Alliance") + " one");
  });

  article.querySelectorAll('a[href*="/quest="]').forEach(function (link) {
    var previous = link.previousElementSibling;
    if (previous && previous.classList.contains("quest-start")) return;
    link.insertAdjacentHTML("beforebegin", iconImg(article.dataset.iconQuestStart, "quest-icon quest-start"));
  });

  var turnIn = /\b(Turn the head in|Turn the fang in|Turn it in|Turn that in|turn it in|turn that in|Hand it in|turned in|Turn in|turn in)\b/g;
  var walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT);
  var textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(function (node) {
    turnIn.lastIndex = 0;
    if (!turnIn.test(node.nodeValue)) return;
    turnIn.lastIndex = 0;
    var text = node.nodeValue;
    var fragment = document.createDocumentFragment();
    var last = 0;
    var match;
    while ((match = turnIn.exec(text))) {
      fragment.appendChild(document.createTextNode(text.slice(last, match.index)));
      var marker = document.createElement("img");
      marker.className = "quest-icon quest-end";
      marker.alt = "";
      marker.src = article.dataset.iconQuestEnd;
      fragment.appendChild(marker);
      fragment.appendChild(document.createTextNode(match[1]));
      last = match.index + match[0].length;
    }
    fragment.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(fragment, node);
  });
})();
