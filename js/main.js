function goToNextPage() {
  window.location.href = "./pages/trocarbebe.html"; // Defina o caminho da próxima página
}

// Função de arrastar
function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// Função de soltar a roupa no bebê
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
