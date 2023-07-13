var bg,bgImg1,bgImg2;
var plataforma1, plataforma2;
var fuego, pilar1, pilar2;
var enemigo1, enemigo2;
var espada, espadaIMG;
var pared1, pared2, pared3, suelo;
var jugador;
var plataforma1, plataforma2, pilar1, pilar2;
var obstaculos;


function preload(){

  bgImg1 = loadImage("assets/fondo 1img.png");
  bgImg2 = loadImage("assets/fondo 2.png");

  espadaIMG = loadImage("assets/espada.png");

}

function setup() {
  createCanvas(1200,800);

  // the background image
  bg = createSprite(1200/2-20,800/2-40,20,20)
  bg.addImage(bgImg1);
  bg.scale = 0.65

  jugador = createSprite(displayWidth/2,displayHeight/2,20,20)

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

  console.log(jugador.x)
  console.log(jugador.y)

  jugador.collide(obstaculos);

  if (keyIsDown(UP_ARROW)) {
    jugador.y -= 10;
  }

  if (keyIsDown(LEFT_ARROW)) {
    jugador.x -= 10;
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    jugador.x += 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    jugador.y += 10;
  }

  if(keyIsDown("space")){
    jugador.velocityY = -12;
  }

  jugador.velocityY = jugador.velocityY + 0.8;


  drawSprites();

}
