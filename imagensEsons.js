//imagens e sons

let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

let somPonto;
let somTrilha;
let somColisao;

function preload(){
  imagemEstrada = loadImage("Extras/estrada.png");
  imagemAtor = loadImage("Extras/ator-1.png");
  imagemCarro = loadImage("Extras/carro-1.png");
  imagemCarro2 = loadImage("Extras/carro-2.png");
  imagemCarro3 = loadImage("Extras/carro-3.png");
  imagemCarro4 = loadImage("Extras/carro-1.png");
  imagemCarro5 = loadImage("Extras/carro-2.png");
  imagemCarro6 = loadImage("Extras/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]

somPonto = loadSound("Extras/pontos.wav");
somTrilha = loadSound("Extras/trilha.mp3");
somColisao = loadSound("Extras/colidiu.mp3");
}