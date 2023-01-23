function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraCarro();
  mostraAtor();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


