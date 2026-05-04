document.addEventListener("DOMContentLoaded", () => {
  fetch("../../Geral/menu.html")
    .then(res => res.text())
    .then(html => (document.querySelector("header").innerHTML = html))
    .catch(err => console.error("Erro ao carregar menu:", err));

  fetch("../../Geral/footer.html")
    .then(res => res.text())
    .then(html => (document.querySelector("footer").innerHTML = html))
    .catch(err => console.error("Erro ao carregar footer:", err));
});