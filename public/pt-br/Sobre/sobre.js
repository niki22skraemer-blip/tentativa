// sobre.js

document.addEventListener("DOMContentLoaded", () => {
  // ===== 1) Carregar menu e footer =====
  fetch("../../Geral/menu.html")
    .then((res) => {
      if (!res.ok) throw new Error(`menu.html: HTTP ${res.status}`);
      return res.text();
    })
    .then((html) => {
      const header = document.querySelector("header");
      if (header) header.innerHTML = html;
    })
    .catch((err) => console.error("Erro ao carregar menu:", err));

  fetch("../../Geral/footer.html")
    .then((res) => {
      if (!res.ok) throw new Error(`footer.html: HTTP ${res.status}`);
      return res.text();
    })
    .then((html) => {
      const footer = document.querySelector("footer");
      if (footer) footer.innerHTML = html;
    })
    .catch((err) => console.error("Erro ao carregar footer:", err));

  // ===== 2) Animação "reveal" ao rolar =====
  const elementos = document.querySelectorAll(".reveal");
  if (elementos.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    { threshold: 0.2 }
  );

  elementos.forEach((el) => observer.observe(el));
});
