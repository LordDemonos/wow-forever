(function () {
  var article = document.querySelector(".article");
  if (!article) return;

  var hordeIcon =
    '<svg class="faction-icon" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="#9a2f2a"/><path fill="none" stroke="#f4e4c8" stroke-width="1.3" stroke-linecap="round" d="M3.5 7.2c1.2-2 2.6-3 4.5-3s3.3 1 4.5 3"/><path fill="none" stroke="#f4e4c8" stroke-width="1.3" stroke-linecap="round" d="M4.3 10.4c.3-2.4 1.3-4 3.7-4s3.4 1.6 3.7 4"/></svg>';
  var allianceIcon =
    '<svg class="faction-icon" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="#1d4e89"/><path fill="#d7e6ff" d="M8 2.8l2.8 1.1v2.8c0 2.1-1.2 3.4-2.8 4.2-1.6-.8-2.8-2.1-2.8-4.2V3.9z"/></svg>';

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
})();
