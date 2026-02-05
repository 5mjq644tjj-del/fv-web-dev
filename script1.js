// Set year in footer
(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();

// Mobile nav toggle
(() => {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector("[data-nav]");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });

  // Close menu when clicking a link (mobile)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();
