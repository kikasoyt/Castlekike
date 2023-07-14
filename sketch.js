var bg,bgImg1,bgImg2;
var plataforma1, plataforma2;
var fuego, pilar1, pilar2;
var enemigo1, enemigo2;
var espada, espadaIMG;
var pared1, pared2, pared3, suelo;
var jugador;
var plataforma1, plataforma2, pilar1, pilar2;
var obstaculos;
var jugadorimg,enemigoimg;

var caballeroImgIzq, caballeroImgDer;
var caballeroImgMA, caballeroImgMCD, caballeroImgMCI, caballeroImgMM, caballeroImgMS;

var caballeroFlagMove = "D";


function preload(){

  bgImg1 = loadImage("assets/fondo 1img.png");
  bgImg2 = loadImage("assets/fondo 2.png");

  espadaIMG = loadImage("assets/espada.png");

  //Animaciones para caballero estatico
  caballeroImgDer = loadAnimation("assets/espada.png");
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
  caballeroImgMCD = loadAnimation(
    "assets/caballero corre 1.png",
    "assets/caballero corre 2.png",
    "assets/caballero corre 3.png",
    "assets/caballero corre 4.png",
    "assets/caballero corre 5.png",
    "assets/caballero corre 6.png",
  );
  caballeroImgMCI = loadAnimation(
    "assets/caballero corre izquierda 1.png",
    "assets/caballero corre izquierda 2.png",
    "assets/caballero corre izquierda 3.png",
    "assets/caballero corre izquierda 4.png",
    "assets/caballero corre izquierda 5.png",
    "assets/caballero corre izquierda 6.png",
  );
  caballeroImgMM = loadAnimation(
    "assets/caballero muerte 1.png",
    "assets/caballero muerte 2.png",
    "assets/caballero muerte 3.png",
    "assets/caballero muerte 4.png",
  );
  caballeroImgMS = loadAnimation(
    "assets/caballero salto 1.png",
    "assets/caballero salto 2.png",
    "assets/caballero salto 3.png",
    "assets/caballero salto 4.png",
  );
  


}

function setup() {
  createCanvas(1200,800);

  // the background image
  bg = createSprite(1200/2-20,800/2-40,20,20)

  //error con el Animation
  bg.addAnimation(bgImg1);
  bg.addAnimation(bgImg2);
  bg.changeAnimation(bgImg1);
  bg.scale = 0.65

  jugador = createSprite(50,600,20,20);
  jugador.addAnimation("caballeroDer", caballeroImgDer);
  //jugador.addAnimation("caballeroIzq", caballeroImgIzq);
  //jugador.addAnimation("caballeroMA", caballeroImgMA);
  //jugador.addAnimation("caballeroMCI", caballeroImgMCI);
  //jugador.addAnimation("caballeroMM", caballeroImgMM);
  //jugador.addAnimation("caballeroMS", caballeroImgMS);

  //jugador.changeAnimation("caballeroDer", caballeroImgDer);
  

  obstaculos = new Group();
  
  // recordar que los sprites aparecen centrados en las coordenadas que les pongas
  plataforma1 = createSprite(240,455,246,40);
  plataforma2 = createSprite(500,325,243,40);
  pilar1 = createSprite(220,350,30,175);
  pilar2 = createSprite(510,175,45,310);
  fuego = createSprite(565,530,920,60);
  suelo = createSprite(600,650,1200,170);

  plataforma1.visible= false;
  plataforma2.visible= false;
  pilar1.visible= false;
  pilar2.visible= false;
  fuego.visible= false;
  suelo.visible= false;

  obstaculos.add(plataforma1);
  obstaculos.add(plataforma2);
  obstaculos.add(pilar1);
  obstaculos.add(pilar2);
  obstaculos.add(suelo);

  
  
  //tarea1 hacer sprites para las plataformas, el fuego, el piso y los pilares

  espada = createSprite(440,210,20,20);
  espada.addImage(espadaIMG);
  espada.scale=0.8;


}

function draw() {
  background(0); 

  //console.log(jugador.x)
  //console.log(jugador.y)

  jugador.collide(obstaculos);

  if(caballeroFlagMove === "D"){
    //jugador.changeAnimation("caballeroDer", caballeroImgDer);
  }
  if(caballeroFlagMove === "I"){
    //jugador.changeAnimation("caballeroIzq", caballeroImgIzq);
  }
  if(caballeroFlagMove === "S"){
    //jugador.changeAnimation("caballeroMS", caballeroImgMS);
  }


  if (keyIsDown(LEFT_ARROW)) {
    jugador.x -= 10;
    //jugador.changeAnimation("caballeroMCI", caballeroImgMCI);
    caballeroFlagMove = "I";
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    jugador.x += 10;
    //jugador.changeAnimation("caballeroMCD", caballeroImgMCD);
    caballeroFlagMove = "D";
  }

  if(keyIsDown(UP_ARROW)){
    jugador.velocityY = -20;
    //jugador.changeAnimation("caballeroMS", caballeroImgMS);
    caballeroFlagMove = "S";
  }

  jugador.velocityY = jugador.velocityY + 0.8;

  if(jugador.isTouching(espada)){
    bg.changeAnimation(bgImg2);
    espada.visible = false;
  }


  drawSprites();

}
