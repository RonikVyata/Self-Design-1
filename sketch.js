var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var restart, restartImage;
var gamestate = PLAY;

function preload(){
bgImg = loadImage("assets/bg.png")

restartImage = loadImage ("assets/restart.png");

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

  createCanvas(windowWidth, windowHeight);

//background image
bg = createSprite(width/2,height/2,1,1);
bg.addImage(bgImg);
bg.scale = 1.6

//creating top and bottom grounds
bottomGround = createSprite(200,height-12,4700,20);
bottomGround.visible = true;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.4;

//creates restart button
restart = createSprite(width/2,height/2);
restart.addImage(restartImage);
restart.scale = 2.5


}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -17 ;
            
          }

          if(keyDown("space")) {
            balloon.velocityX = 13 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
           //creating gamestates
        drawSprites();

        if(gamestate === PLAY){
          restartImage.visible = false;
        }
        
}