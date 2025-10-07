
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const conteudo = document.getElementById("conteudo");
  const barco = document.querySelector(".barco");
  const somBuzina = document.getElementById("buzina");

  // 🔊 Tocar som só na primeira interação do usuário
  function tocarSom() {
    somBuzina.play().catch(err => console.log("Erro ao tocar som:", err));
    document.removeEventListener("click", tocarSom);
    document.removeEventListener("keydown", tocarSom);
    document.removeEventListener("scroll", tocarSom);
  }

  document.addEventListener("click", tocarSom, { once: true });
  document.addEventListener("keydown", tocarSom, { once: true });
  document.addEventListener("scroll", tocarSom, { once: true });

  // 🎬 Quando a animação do barco terminar, esconder tela de abertura
  barco.addEventListener("animationend", () => {
    intro.style.display = "none";
    conteudo.classList.add("mostrar");
    document.body.style.overflow = "auto"; // reativa rolagem
  });
});

// 📸 Função para abrir galeria com som
function abrirGaleria() {
  const som = document.getElementById("somClique");
  som.play();
  setTimeout(() => {
    window.location.href = "galeria-completa.html";
  }, som.duration * 1000);
}

// 🔊 Função para tocar a buzina manualmente, se necessário
function buzina() {
  const som = document.getElementById("somClique");
  som.play();
}

