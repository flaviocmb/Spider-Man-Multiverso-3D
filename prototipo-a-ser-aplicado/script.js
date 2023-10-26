const divs = document.querySelectorAll(".block");
const body = document.getElementsByTagName("body")[0];

function adicionaClasseAtiva() {
  this.classList.add("active");
}

function mouseEnterOnce() {
  divs.forEach((bloco) => {
    //lembrete: aqui o evento está apenas na última div do loop. Não deveria.
    bloco.addEventListener("mouseenter", adicionaClasseAtiva);
    bloco.addEventListener("mouseleave", () => {
      divs.forEach((outrosBlocos) => {
        if (bloco !== outrosBlocos) {
          outrosBlocos.removeEventListener("mouseenter", adicionaClasseAtiva);
        }
      });
    });
  });
}

body.addEventListener("click", () => {
  divs.forEach((div) => {
    div.classList.remove("active");
    mouseEnterOnce();
  });
});

mouseEnterOnce();
