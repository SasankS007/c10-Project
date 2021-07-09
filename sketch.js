
var sea;
var ship;

function preload(){
shipImg = loadAnimation("ship-1.png", "ship-2.png");
seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,40,40);
  sea.addImage(seaImg);
  

  ship = createSprite(200,200,40,40);
  ship.addAnimation(shipImg);
}

function draw() {
  background(seaImg);
 if(sea.x < 0){
   sea.x = sea.width/2;
 }
  drawSprites();
}