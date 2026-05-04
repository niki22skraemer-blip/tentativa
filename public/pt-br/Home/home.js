// pt-br/Home/home.js

// ======================================================
// 1) CONFIGURAÇÃO NORMAL (menu, footer, reveal)
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
  carregarMenu();
  carregarFooter();
  configurarReveal();
  configurarCarrossel(); // chama a parte separada do carrossel
});

function carregarMenu() {
  fetch("../../Geral/menu.html")
    .then((res) => {
      if (!res.ok) throw new Error(`Menu HTTP ${res.status} (${res.statusText})`);
      return res.text();
    })
    .then((html) => {
      const header = document.querySelector("header");
      if (!header) throw new Error("Não encontrei a tag <header> na página.");
      header.innerHTML = html;
    })
    .catch((err) => console.error("Erro ao carregar menu:", err));
}

function carregarFooter() {
  fetch("../../Geral/footer.html")
    .then((res) => {
      if (!res.ok) throw new Error(`Footer HTTP ${res.status} (${res.statusText})`);
      return res.text();
    })
    .then((html) => {
      const footer = document.querySelector("footer");
      if (!footer) throw new Error("Não encontrei a tag <footer> na página.");
      footer.innerHTML = html;
    })
    .catch((err) => console.error("Erro ao carregar footer:", err));
}

function configurarReveal() {
  const elementos = document.querySelectorAll(".reveal");
  if (!elementos.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    { threshold: 0.2 }
  );

  elementos.forEach((el) => observer.observe(el));
}

// ======================================================
// 2) CARROSSEL 
// ======================================================
function configurarCarrossel() {
  const carousel = document.getElementById("carousel");
  const itens = document.querySelectorAll(".carousel-item");

  if (!carousel) {
    console.warn("Carrossel não encontrado: id='carousel'.");
    return;
  }
  if (!itens.length) {
    console.warn("Nenhum item do carrossel encontrado: class='.carousel-item'.");
    return;
  }

  let autoScrollInterval = null;
  let indice = 0;
  const total = itens.length;

  function iniciarAutoScroll() {
    autoScrollInterval = window.setInterval(() => {
      window.Mover(1, false); // chama o próximo automaticamente
    }, 5000);
  }

  function reiniciarAutoScroll() {
    if (autoScrollInterval !== null) window.clearInterval(autoScrollInterval);
    iniciarAutoScroll();
  }

  // Função global porque seu HTML usa onclick="Mover(...)"
  window.Mover = function Mover(direcao, manual = true) {
    if (manual) reiniciarAutoScroll();

    indice += direcao;

    if (indice >= total) indice = 0;
    if (indice < 0) indice = total - 1;

    const largura = itens[0].clientWidth;
    carousel.scrollTo({
      left: indice * largura,
      behavior: "smooth",
    });
  };

  iniciarAutoScroll();
}
