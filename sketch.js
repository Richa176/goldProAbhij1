var bgImg;
var cat1, catAni;
var dog1;
var shopkeeper,shopkeeperImage;
var beginX = 1300.0; // Initial x-coordinate
var beginY = 300.0; // Initial y-coordinate
var endX = 1300.0; // Final x-coordinate
var endY = 300.0; // Final y-coordinate
var distX; // X-axis distance to move
var distY; // Y-axis distance to move
var exponent = 4; // Determines the curve
var x = 0.0; // Current x-coordinate
var y = 0.0; // Current y-coordinate
var step = 0.01; // Size of each step along the path
var pct = 0.0; // Percentage traveled (0.0 to 1.0)

function preload(){
  bgImg=loadImage("Pet_Shop_2020.png")
  catAni=loadAnimation("Cat_1.png","Cat_2.png")
  shopkeeperImage=loadImage("Png/Shopkeeper.png");
}

function setup() {
  createCanvas(1500,800);
  cat1=createSprite(180,580, 60, 30);
  cat1.addAnimation("running",catAni);
  cat1.scale=0.5;

  
}

function draw() {
  background(bgImg); 
  
  //shopkeeper.x=mouseX;
  //shopkeeper.y=mouseY;

  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
  //fill(255);
  //ellipse(x, y, 20, 20);
  
  drawSprites();
  shopkeeper=createSprite(x,y,10,10);
  shopkeeper.addAnimation("walking",shopkeeperImage);
  shopkeeper.scale=1.5;
  shopkeeper.lifetime=2;

  distX = endX - beginX;
  distY = endY - beginY;

}

 function mouseClicked(){
  pct = 0.0;
  beginX = x;
  beginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
// if(shopkeeper.x<mouseX){
//   shopkeeper.mirrorX(shopkeeper.mirrorX() * -1);
// }
// else{
//   shopkeeper.mirrorX(shopkeeper.mirrorX() * +1);
// }

//shopkeeper.x
  
//   // if(shopkeeper.x!=a){

//   // }
  
 }