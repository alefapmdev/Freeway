//codigo ator

//ator
let xAtor = 105;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
 image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover())
    yAtor += 3;
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], wCarro, hCarro, xAtor, yAtor, 15);
    if(colisao){
      voltaAtor();
      somColisao.play();
      if(pontosMaior0() > 0){
      meusPontos -= 1;}
    }
  }
}

function voltaAtor(){
  yAtor = 366
}

function incluiPontos(){
  fill(255,240,60)
  textAlign(CENTER)
  textSize(25)
  text(meusPontos, width / 5, 25 )
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaAtor();
  }
}

function pontosMaior0(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}