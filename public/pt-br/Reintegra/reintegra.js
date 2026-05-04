//reintegra.js
document.addEventListener("DOMContentLoaded", () => {
  // ===== MENU =====
  fetch("../../Geral/menu.html")
    .then((res) => {
      if (!res.ok) throw new Error(`menu.html: HTTP ${res.status}`);
      return res.text();
    })
    .then((html) => {
      const header = document.querySelector("header");
      if (!header) throw new Error("Tag <header> não encontrada no HTML.");
      header.innerHTML = html;
    })
    .catch((err) => console.error("Erro ao carregar menu:", err));

  // ===== FOOTER =====
  fetch("../../Geral/footer.html")
    .then((res) => {
      if (!res.ok) throw new Error(`footer.html: HTTP ${res.status}`);
      return res.text();
    })
    .then((html) => {
      const footer = document.querySelector("footer");
      if (!footer) throw new Error("Tag <footer> não encontrada no HTML.");
      footer.innerHTML = html;
    })
    .catch((err) => console.error("Erro ao carregar footer:", err));
});

