(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var themeToggle = document.getElementById("theme-toggle");
  var navToggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav-menu");
  var backdrop = document.getElementById("nav-backdrop");
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = document.querySelectorAll("main section[id]");

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* private mode */
    }
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
    setTheme(currentTheme());
  }

  function openNav() {
    body.classList.add("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.setAttribute("aria-label", "Close menu");
    }
    if (backdrop) backdrop.hidden = false;
  }

  function closeNav() {
    body.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
    if (backdrop) backdrop.hidden = true;
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      if (body.classList.contains("nav-open")) closeNav();
      else openNav();
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeNav);
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeNav();
  });

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            var active = link.getAttribute("href") === "#" + id;
            link.classList.toggle("is-active", active);
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
