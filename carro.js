//codigo do carro

//carros
let xCarros = [700, 700, 700, 700, 700, 700];
let yCarros = [40, 95, 150, 210, 260, 315];
let wCarro = 50
let hCarro = 40
let veloncidadeCarros = [3, 4, 5, 5.5, 4.5, 3.5];

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
  image(imagemCarros[i], xCarros[i], yCarros[i], wCarro, hCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    xCarros[i] -= veloncidadeCarros[i];
  }
}

function voltaPosicaoCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 700;
     }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}

