document.documentElement.classList.add("js");

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#site-menu");
  const mobile = window.matchMedia("(max-width: 52rem)");

  function setOpen(open) {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") === "false");
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a") && mobile.matches) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".navbar") && menu.classList.contains("is-open")) {
      if (menu.contains(document.activeElement)) {
        toggle.focus();
      }
      setOpen(false);
    }
  });

  mobile.addEventListener("change", () => {
    if (mobile.matches && menu.contains(document.activeElement)) {
      toggle.focus();
    }
    setOpen(false);
  });
}

function initSectionReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("reveal-pending");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -18px" });

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => {
    if (item.getBoundingClientRect().top >= window.innerHeight) {
      item.classList.add("reveal-pending");
      observer.observe(item);
    }
  });
}

document.addEventListener("DOMContentLoaded", initNavigation);
document.addEventListener("DOMContentLoaded", () => {
  // Let the story renderer insert its previews before observing sections.
  requestAnimationFrame(initSectionReveals);
});
