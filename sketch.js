var bg,bgImg1,bgImg2;
var plataforma1, plataforma2;
var fuegoSprite, pilar1, pilar2;
var LUp, LLeft, LRight;
var enemigo1, enemigo2;
var espada, espadaIMG;
var pared1, pared2, pared3, suelo;
var jugador;
var plataforma1, plataforma2, pilar1, pilar2;
var obstaculos;
var jugadorimg,enemigoimg;
var puerta;
var fuego, fuegosGroup, fuegoImg, boomImg;
var veAPuerta, veAPuertaImg, Ganaste, GanasteImg;

var caballeroImgIzq, caballeroImgDer;
var caballeroImgMA, caballeroImgMCD, caballeroImgMCI, caballeroImgMM, caballeroImgMS;
var caballeroIsMoving = true;
var contadorsalto = 0;
var espadaActiva= false;
var puertaActiva = false;
var conteoGolpe = 0;
var vidaC = 50;
var vidaE = 80;

var gameOver = false;


var caballeroFlagMove = "D";


function preload(){

  bgImg1 = loadImage("assets/fondo 1img.png");
  bgImg2 = loadImage("assets/fondo 2.png");

  espadaIMG = loadImage("assets/espada.png");
  enemigoImg = loadImage("assets/enemigo.png");
  fuegoImg = loadImage("assets/fuego.png");
  boomImg = loadImage("assets/bomm.png");
  veAPuertaImg = loadImage("assets/1.png");
  GanasteImg = loadImage("assets/2.png");

  //Animaciones para caballero estatico
  caballeroImgDer = loadAnimation("assets/caballeroquieto1.png");
  caballeroImgIzq = loadAnimation("assets/caballero quieto izquierda 1.png");

  //Animaciones para caballero en movimiento
   caballeroImgMA = loadAnimation(
     "assets/caballero ataque 1.png",
     "assets/caballero ataque 2.png",
     "assets/caballero ataque 3.png",
     "assets/caballero ataque 4.png",
     "assets/caballero ataque 5.png",
     "assets/caballero ataque 6.png",
     "assets/caballero ataque 7.png",
     "assets/caballero ataque 8.png",
     "assets/caballero ataque 9.png",
   );
   //caballeroImgMA.looping = false;
   caballeroImgMCD = loadAnimation(
     "assets/caballero corre 1.png",
     "assets/caballero corre 2.png",
     "assets/caballero corre 3.png",
     "assets/caballero corre 4.png",
     "assets/caballero corre 5.png",
     "assets/caballero corre 6.png",
   );
   caballeroImgMCD.looping = false;
   caballeroImgMCI = loadAnimation(
     "assets/caballero corre izquierda 1.png",
     "assets/caballero corre izquierda 2.png",
     "assets/caballero corre izquierda 3.png",
     "assets/caballero corre izquierda 4.png",
     "assets/caballero corre izquierda 5.png",
     "assets/caballero corre izquierda 6.png",
   );
   caballeroImgMCI.looping = false;
   caballeroImgMM = loadAnimation(
     "assets/caballero muerte 1.png",
     "assets/caballero muerte 2.png",
     "assets/caballero muerte 3.png",
     "assets/caballero muerte 4.png",
   );
   caballeroImgMM.looping = false;
   caballeroImgMS = loadAnimation(
     "assets/caballero salto 1.png",
     "assets/caballero salto 2.png",
     "assets/caballero salto 3.png",
     "assets/caballero salto 4.png",
   );
   caballeroImgMS.looping = false;
  


}

function setup() {
  createCanvas(1200,700);

  // the background image
  bg = createSprite(1200/2,800/2-50,20,20)
  bg.addAnimation("bgImg2",bgImg2);
  bg.addAnimation("bgImg1",bgImg1);
  bg.changeAnimation("bgImg1");
  bg.scale = 0.65;

  jugador = createSprite(50,550,20,20);
  jugador.addAnimation("caballeroDer", caballeroImgDer);
  jugador.addAnimation("caballeroIzq", caballeroImgIzq);
  jugador.addAnimation("caballeroMA", caballeroImgMA);
  jugador.addAnimation("caballeroMCI", caballeroImgMCI);
  jugador.addAnimation("caballeroMCD", caballeroImgMCD);
  jugador.addAnimation("caballeroMM", caballeroImgMM);
  jugador.addAnimation("caballeroMS", caballeroImgMS);
  jugador.addAnimation("boom", boomImg);
  

  jugador.changeAnimation("caballeroDer");
  //jugador.debug = true;
  jugador.setCollider('circle', 0, 0, 40);
  jugador.scale= 0.85;

  obstaculos = new Group();
  fuegosGroup = new Group();
  
  // recordar que los sprites aparecen centrados en las coordenadas que les pongas
  plataforma1 = createSprite(240,455,246,40);
  plataforma2 = createSprite(500,325,243,40);
  pilar1 = createSprite(220,350,30,175);
  pilar2 = createSprite(510,175,45,310);
  fuegoSprite = createSprite(575,530,900,60);
  suelo = createSprite(600,650,1500,170);
  LUp = createSprite(600,0,1500,10);
  LLeft = createSprite(0,350,10,800);
  LRight = createSprite(1200,350,10,800);
  puerta = createSprite(1135,500,10,10);

  plataforma1.visible = false;
  plataforma2.visible = false;
  pilar1.visible = false;
  pilar2.visible = false;
  fuegoSprite.visible = false;
  suelo.visible = false;
  LUp.visible = false;
  LLeft.visible = false;
  LRight.visible = false;
  puerta.visible = false;


  obstaculos.add(plataforma1);
  obstaculos.add(plataforma2);
  obstaculos.add(pilar1);
  obstaculos.add(pilar2);
  obstaculos.add(suelo);
  obstaculos.add(LUp);
  obstaculos.add(LLeft);
  obstaculos.add(LRight);

  espada = createSprite(440,210,20,20);
  espada.addImage(espadaIMG);
  espada.scale = 0.8;

  enemigo1 = createSprite(1100,510,60,60);
  enemigo1.addImage(enemigoImg);
  enemigo1.scale = 0.1;
  //enemigo1.debug = true;
  enemigo1.setCollider('rectangle', 0, 0, 200,100);
  enemigo1.visible = false;

  veAPuerta = createSprite(600,200,100,100);
  veAPuerta.addImage(veAPuertaImg);
  veAPuerta.scale=0.5;
  veAPuerta.visible = false;

  Ganaste = createSprite(600,250,100,100);
  Ganaste.addImage(GanasteImg);
  Ganaste.scale=0.6;
  Ganaste.visible = false;


}

function draw() {
  background(0); 

  //console.log(jugador.x)
  //console.log(jugador.y)

  jugador.collide(obstaculos);


    if(caballeroIsMoving){
      if(caballeroFlagMove === "D"){
        jugador.changeAnimation("caballeroDer");
      }
      if(caballeroFlagMove === "I"){
        jugador.changeAnimation("caballeroIzq");
      }
      if(caballeroFlagMove === "S"){
        jugador.changeAnimation("caballeroMS");
      }


      if (keyIsDown(LEFT_ARROW)) {
        jugador.x -= 10;
        jugador.changeAnimation("caballeroMCI");
        caballeroFlagMove = "I";
      }
      
      if (keyIsDown(RIGHT_ARROW)) {
        jugador.x += 10;
        jugador.changeAnimation("caballeroMCD");
        caballeroFlagMove = "D";
      }

      if(keyWentUp(UP_ARROW)){
        contadorsalto += 1;
        if(contadorsalto <= 2 ){
          console.log(contadorsalto);
          jugador.velocityY = -15;
          jugador.changeAnimation("caballeroMS");
          caballeroFlagMove = "S";
        } 
      }
      if(keyWentDown(UP_ARROW)){
        if(contadorsalto >= 4){
          contadorsalto = 0;
          console.log(contadorsalto);
        }
      }
    }

    jugador.velocityY = jugador.velocityY + 0.8;

    if(jugador.isTouching(espada)){
      bg.changeAnimation("bgImg2",bgImg2);
      espada.visible = false;
      espadaActiva = true;
      enemigo1.visible = true;
    }

    if(jugador.isTouching(fuegoSprite)){
      jugador.changeAnimation("boom");
      jugador.scale=0.1;
      caballeroIsMoving = false;
    }
  if(gameOver === false){
    if(espadaActiva){
      fuegoSprite.destroy();
      if(keyDown("SPACE")){
        jugador.changeAnimation("caballeroMA");

        //este if no se ejecuta
        if(jugador.isTouching(enemigo1)){
          vidaE -= 1;
          console.log(vidaE);
        }
      }
      if(frameCount % 80  === 0){
        fuegos();
      }

      if(vidaE <= 0){
        enemigo1.destroy();
        gameOver = true;
        console.log(gameOver);
      }

      if(jugador.isTouching(fuegosGroup)){
        vidaC-=1;
      }

      if(vidaC<=0){
        jugador.changeAnimation("boom");
        jugador.scale=0.1;
        caballeroIsMoving = false;
      }
    }
  }
  if(gameOver === true){
    veAPuerta.visible = true; 

    if(jugador.isTouching(puerta)){
      Ganaste.visible = true;
      veAPuerta.destroy();
      jugador.destroy();
    }
  }
  

  drawSprites();

}


function fuegos(){
  fuego = createSprite(1200,random(450,550),10,10);
  fuego.addImage(fuegoImg);
  fuego.scale = 1;
  fuego.velocityX = -8;
  fuego.lifetime = 1000;
  fuegosGroup.add(fuego);
}