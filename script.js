// Footer year
var yearEl = document.getElementById("year");
if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

// Scroll reveal — progressive enhancement only.
// Sections are visible by default (see .reveal in styles.css);
// this just arms a fade-up transition for users with JS and
// without a reduced-motion preference.
var prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  var reveals = document.querySelectorAll(".reveal");

  reveals.forEach(function (el) {
    el.classList.add("js-armed");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(function (el) { observer.observe(el); });
}
