setTimeout(() => {
  document.getElementById("porco-nave").remove();

  let porco = document.createElement("img");
  porco.setAttribute("id", "porco");
  porco.setAttribute("src", "img/porco.svg");
  document.body.appendChild(porco);

  let nave = document.createElement("img");
  nave.setAttribute("id", "nave");
  nave.setAttribute("src", "img/nave.svg");
  document.body.appendChild(nave);

  setTimeout(() => {
    nave.remove();

    setTimeout(() => {
      jogo();
    }, 3000);
  }, 3000);
}, 8000);
