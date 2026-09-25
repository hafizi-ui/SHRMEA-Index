/* SHRMEA website — shared header, footer and small interactions */
(function () {
  "use strict";
  var page = document.body.getAttribute("data-page") || "";
  var LEAF = '<svg viewBox="0 0 32 32" width="20" height="20"><path d="M6 25C6 14 13 6 27 6c0 13-7 20-18 20" fill="#a8cf8e"/><path d="M6 26 19 13" stroke="#fbf7ec" stroke-width="2" stroke-linecap="round"/></svg>';
  var links = [
    ["index.html", "Home", "home"],
    ["research.html", "Research", "research"],
    ["findings.html", "Findings & Publications", "findings"],
    ["team.html", "Team & Contact", "team"]
  ];

  var nav = document.createElement("header");
  nav.className = "site-nav";
  nav.innerHTML =
    '<div class="wrap">' +
      '<a class="brand" href="index.html"><span class="mark">' + LEAF + '</span><span>SHRMEA<small>Employer–Employee Alignment</small></span></a>' +
      '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
      '<ul class="nav-links">' +
        links.map(function (l) { return '<li><a href="' + l[0] + '"' + (l[2] === page ? ' aria-current="page"' : "") + ">" + l[1] + "</a></li>"; }).join("") +
        '<li><a class="cta" href="tool.html">Assessment Tool &#128274;</a></li>' +
      "</ul>" +
    "</div>";
  document.body.insertBefore(nav, document.body.firstChild);

  var toggle = nav.querySelector(".nav-toggle"), list = nav.querySelector(".nav-links");
  toggle.addEventListener("click", function () {
    var open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  var foot = document.createElement("footer");
  foot.className = "site-footer";
  foot.innerHTML =
    '<div class="wrap">' +
      '<div class="cols">' +
        '<div><a class="brand" href="index.html" style="color:#fff"><span class="mark">' + LEAF + '</span><span>SHRMEA</span></a>' +
        '<p style="margin-top:1rem;max-width:420px">The Sustainable Human Resource Management Employer–Employee Alignment framework. A PhD research project at the Faculty of Industrial Management, Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA), in collaboration with Kolej Poly-Tech MARA Kuantan.</p></div>' +
        '<div><h4>Explore</h4><ul>' + links.map(function (l) { return '<li><a href="' + l[0] + '">' + l[1] + "</a></li>"; }).join("") + '<li><a href="tool.html">Assessment Tool</a></li></ul></div>' +
        '<div><h4>Contact</h4><ul><li><a href="mailto:hafizi@kptm.edu.my">hafizi@kptm.edu.my</a></li><li><a href="mailto:fadzline@umpsa.edu.my">fadzline@umpsa.edu.my</a></li><li><a href="mailto:ashraf@umpsa.edu.my">ashraf@umpsa.edu.my</a></li></ul></div>' +
      "</div>" +
      '<div class="bottom">&copy; ' + new Date().getFullYear() + " Ahmad Hafizi Ahmad Giran · SHRMEA Research.</div>" +
    "</div>";
  document.body.appendChild(foot);

  // Gentle reveal on scroll
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }
})();
