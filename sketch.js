var trackimg;
//var infiniteroad;
var car;
var stone;
var invisibleline, invisibleline2;
var count = 0;
function preload(){

  trackimg = loadImage("images/track.png");
  carimg = loadImage("images/car.png");
  stoneimg = loadImage("images/stone.jpg");

}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

  /*infiniteroad = createSprite(400,400,800,800);
  infiniteroad.scale = 2;
  infiniteroad.y = height/2;
  infiniteroad.addImage("track",trackimg);*/

 /*infiniteroad = createSprite(0,0,800,800);
infiniteroad.addImage("track",trackimg);
infiniteroad.y = height/2;*/

car = createSprite(displayWidth - 780,displayHeight - 100,20,20);
car.addImage("car",carimg);

invisibleline = createSprite(displayWidth -250,displayHeight - 430,10,displayHeight);
invisibleline.shapeColor = "red";
invisibleline.visible = false;

invisibleline2 = createSprite(displayWidth - 1280,displayHeight - 430,10,displayHeight);
invisibleline2.shapeColor = "red";
invisibleline2.visible = false;

  
}

function draw() {
  background("white");  
  /*if (infiniteroad.y =0) {
    infiniteroad.y = infiniteroad.height/2;
  } */
  count = Math.round(getFrameRate()/60);
  image(trackimg, 0,-displayHeight*4,displayWidth, displayHeight*5);
  if(keyDown(UP_ARROW)){
    car.velocityY = -8;
    car.velocityX = 0;
  }
  if(keyDown(RIGHT_ARROW)){
    car.velocityY = 0;
    car.velocityX = 8;
  }
  if(keyDown(LEFT_ARROW)){
    car.velocityY = 0;
    car.velocityX = -8;
  }
  car.collide(invisibleline);
  car.collide(invisibleline2);
  spawnStones();
  camera.position.x = displayWidth/2;
  camera.position.y = car.y;
  drawSprites();
  fill("white");
  textSize(30);
  text("Score : " + count,displayWidth - 250,50);
}

function spawnStones(){
  if(frameCount % 200 === 0){
    stone = createSprite(Math.round(random(100,300)),Math.round(random(10,30)));
    stone.addImage("stone",stoneimg);
    stone.scale = 0.15;
  }
}
