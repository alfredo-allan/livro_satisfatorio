// Função de redirecionamento
function goToNextPage() {
  window.location.href = "./pages/trocarbebe.html"; // Defina o caminho da próxima página
}

// Função para começar a arrastar no desktop
function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// Suporte ao toque para dispositivos móveis
document
  .getElementById("baby-body")
  .addEventListener("touchstart", function (event) {
    event.preventDefault(); // Previne o comportamento padrão de abrir o menu da imagem
    var touch = event.touches[0]; // Obtém a primeira interação do toque
    this.style.position = "absolute";
    this.style.left = touch.pageX - this.offsetWidth / 2 + "px";
    this.style.top = touch.pageY - this.offsetHeight / 2 + "px";
  });

document
  .getElementById("baby-body")
  .addEventListener("touchmove", function (event) {
    event.preventDefault(); // Previne o comportamento padrão
    var touch = event.touches[0]; // Obtém o movimento do toque
    this.style.left = touch.pageX - this.offsetWidth / 2 + "px";
    this.style.top = touch.pageY - this.offsetHeight / 2 + "px";
  });

document
  .getElementById("baby-body")
  .addEventListener("touchend", function (event) {
    var bebeChorando = document.getElementById("bebe-chorando");
    var touch = event.changedTouches[0];

    // Verifica se o toque está dentro da área do bebê chorando
    var bebeChorandoRect = bebeChorando.getBoundingClientRect();
    if (
      touch.pageX >= bebeChorandoRect.left &&
      touch.pageX <= bebeChorandoRect.right &&
      touch.pageY >= bebeChorandoRect.top &&
      touch.pageY <= bebeChorandoRect.bottom
    ) {
      // Remover a imagem do bebê chorando
      bebeChorando.style.display = "none"; // Oculta o bebê chorando

      // Trocar a imagem da roupa para a nova roupa 'bebe-body-azul.png'
      var babyBody = document.getElementById("baby-body");
      babyBody.src = "../img/bebe-body-azul.png"; // Troca a roupa

      // Reposicionar a nova imagem no centro
      babyBody.style.position = "absolute";
      babyBody.style.marginTop = "0px";
      babyBody.style.marginLeft = "-110px";
      babyBody.style.width = "110px";
    }
  });

// Função de arrastar para desktop (mantém o arraste no desktop com drag-and-drop)
document
  .getElementById("bebe-chorando")
  .addEventListener("dragover", function (event) {
    event.preventDefault();
  });

document
  .getElementById("bebe-chorando")
  .addEventListener("drop", function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    if (data === "baby-body") {
      // Remover a imagem do bebê chorando
      var bebeChorando = document.getElementById("bebe-chorando");
      bebeChorando.style.display = "none"; // Oculta o bebê chorando

      // Trocar a imagem da roupa para a nova roupa 'bebe-body-azul.png'
      var babyBody = document.getElementById("baby-body");
      babyBody.src = "../img/bebe-body-azul.png"; // Troca a roupa

      // Reposicionar a nova imagem no centro
      babyBody.style.position = "absolute";
      babyBody.style.marginTop = "0px";
      babyBody.style.marginLeft = "-110px";
      babyBody.style.width = "110px";
    }
  });
