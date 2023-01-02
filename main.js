//Lista de Teclas
const keyList = document.querySelectorAll(".tecla");

// Play Instruments list //
function tocaList(idAudioKey) {
  document.querySelector(idAudioKey).play();
}

for (let contador = 0; contador < keyList.length; contador++) {
  const tecla = keyList[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template String

  tecla.onclick = function () {
    tocaList(idAudio);
  };

  tecla.onkeydown = function (event) {
    if (event.code === "Enter" || event.code === "Space") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
