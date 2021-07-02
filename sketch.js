var tower,towerImg;
var doorImg;
var doorsG,climberG,climber1G;
var climberImg;
var ghost,ghostImg;
var PLAY=1,END=0;
var gameState=PLAY;
var spookysound;


function preload(){
  
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
  spookysound=loadSound("spooky.wav");
  
  
  
  
}
function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300,20,20);
  tower.addImage(towerImg);
  tower.velocityY=4;
  
  doorsG=new Group();
  climberG= new Group();
  climber1G=new Group();
  
  ghost=createSprite(300,300);
  ghost.addImage(ghostImg);
  ghost.scale=0.4;

  
  
  
  
}

function draw(){
  
  background("black");
 // spookysound.play();
  
  
  if(gameState===PLAY){
    
    if(keyDown("space")){
        ghost.velocityY=-8;   
      }
      if(keyDown("RIGHT_ARROW")){
        ghost.x+=2;

      }  

         if(keyDown("LEFT_ARROW")){
        ghost.x+=-2;

      }
         ghost.velocityY+=0.5;
        if(tower.y>600){
        tower.y=300;
      }

      if(ghost.isTouching(climberG)){
        ghost.velocityY=0;


      }

      //camera.position.x=displayWidth/2;
      camera.position.y=ghost.y



      spawnDoors();

      drawSprites();
    if(ghost.isTouching(climber1G)||ghost.y>600){
      gameState=END;
    }
    
    
    
  }
  
  else if(gameState===END){
    textSize(45);
    fill("purple");
    stroke("white");
    strokeWeight(2);
    text("Game Over",200,300);
    
  }
  
  
  
  
  
 
 
  
  
  
  
}

function spawnDoors(){
  if(frameCount%150===0){
    
  
  var  door=createSprite(Math.round(random(150,350)),0);
    door.lifetime=120;
  door.addImage(doorImg);
    door.velocityY=5;
    doorsG.add(door);
    
    var climber=createSprite(door.x,50);
    climber.addImage(climberImg);
    climber.lifetime=120;
    climber.velocityY=5;
    climberG.add(climber);
   
    var climber1=createSprite(door.x,60,80,5);
    climber1.visible=false;
    
    climber1.lifetime=120;
    climber1.velocityY=5;
    climber1G.add(climber1);
    
    
    ghost.depth=door.depth+1;
    
    
    
  
  } 
}


