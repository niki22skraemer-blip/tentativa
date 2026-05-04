// document.addEventListener("click", (e) => {
//   const btn = e.target.closest(".hamburger, .menu-toggle");
//   if (!btn) return;

//   const header = btn.closest("header");
//   if (!header) return;

//   const isOpen = header.classList.toggle("is-open");
//   btn.setAttribute("aria-expanded", String(isOpen));
// });

// document.addEventListener("click", (e) => {
//   const link = e.target.closest(".nav-menu a");
//   if (!link) return;

//   const header = document.querySelector("header");
//   const btn = document.querySelector(".hamburger, .menu-toggle");
//   if (!header || !btn) return;

//   header.classList.remove("is-open");
//   btn.setAttribute("aria-expanded", "false");
// });