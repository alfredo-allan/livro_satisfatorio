// Função de redirecionamento
function goToNextPage() {
  window.location.href = "./pages/trocarbebe.html"; // Defina o caminho da próxima página
}

// Função para detectar clique ou toque no baby-body
document
  .getElementById("baby-body")
  .addEventListener("click", handleBabyBodyClick);
document
  .getElementById("baby-body")
  .addEventListener("touchstart", handleBabyBodyClick);

function handleBabyBodyClick(event) {
  // Evita o comportamento padrão do toque
  event.preventDefault();

  // Adiciona uma animação de pulso quando o baby-body é clicado ou tocado
  this.classList.add("pulsate");

  // Remover a classe de animação após um tempo
  setTimeout(() => {
    this.classList.remove("pulsate");
  }, 500);

  // Checa se o bebê chorando foi clicado após o baby-body
  document
    .getElementById("bebe-chorando")
    .addEventListener("click", handleBabyCryClick);
  document
    .getElementById("bebe-chorando")
    .addEventListener("touchstart", handleBabyCryClick);
}

function handleBabyCryClick(event) {
  event.preventDefault();

  // Remover a imagem do bebê chorando
  this.style.display = "none"; // Oculta o bebê chorando

  // Trocar a imagem da roupa para a nova roupa 'bebe-body-azul.png'
  var babyBody = document.getElementById("baby-body");
  babyBody.src = "../img/bebe-body-azul.png"; // Troca a roupa

  // Reposicionar a nova imagem no centro
  babyBody.style.position = "absolute";
  babyBody.style.marginTop = "0px";
  babyBody.style.marginLeft = "-110px";
  babyBody.style.width = "110px";
}

// Função para detectar clique ou toque na fralda
document.getElementById("fralda").addEventListener("click", handleFraldaClick);
document
  .getElementById("fralda")
  .addEventListener("touchstart", handleFraldaClick);

function handleFraldaClick(event) {
  event.preventDefault();

  // Adiciona uma animação de pulso quando a fralda é clicada ou tocada
  this.classList.add("pulsate");

  // Remover a classe de animação após um tempo
  setTimeout(() => {
    this.classList.remove("pulsate");
  }, 500);

  // Checa se o bebê chorando foi clicado após a fralda
  document
    .getElementById("bebe-chorando")
    .addEventListener("click", handleFraldaCryClick);
  document
    .getElementById("bebe-chorando")
    .addEventListener("touchstart", handleFraldaCryClick);
}

function handleFraldaCryClick(event) {
  event.preventDefault();

  // Remover a imagem do bebê chorando
  this.style.display = "none"; // Oculta o bebê chorando

  // Trocar a fralda pela imagem do bebê 'baby.png'
  var babyBody = document.getElementById("baby-body");
  babyBody.src = "../img/baby.png"; // Troca para a nova imagem

  // Reposicionar a nova imagem no centro
  babyBody.style.position = "absolute";
  babyBody.style.marginTop = "0px";
  babyBody.style.marginLeft = "-110px";
  babyBody.style.width = "110px";
}
