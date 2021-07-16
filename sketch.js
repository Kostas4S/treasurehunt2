var player, triangle, circle, hexagon, finalBoss,treasure,wall1,wall2,wall3,wall4,wall5,powerup1, powerup2, powerup3, powerup4,obstacle1
function setup() {
   player = createSprite(10,60,10,10);
   wall1 = createSprite(300,60,130,300);
   wall2 = createSprite(100,50,100,50);
   wall3 = createSprite(100,200,100,200);
   wall4 = createSprite(5,100,60,40);
   wall5 = createSprite(0,400,100,300);
   wall6 = createSprite(200,300,100,80);
   powerup1 = createSprite(10,200,10,10);
   obstacle1 = createSprite(200,200,10,10);
   treasure = createSprite(80,350,15,15);
   obstacle1.velocityX=5;
   
   
}
function draw() {
  
  obstacle1.bounceOff(wall1);
  obstacle1.bounceOff(wall3);
  
    background("black");
    wall1.shapeColor=("grey");
    wall2.shapeColor=("grey");
    wall3.shapeColor=("grey");
    wall4.shapeColor=("grey");
    wall5.shapeColor=("grey");
    treasure.shapeColor=("yellow");
    powerup1.shapeColor=("purple");
    obstacle1.shapeColor=("red");
    text("LEVEL ONE",180,380);
    text("Collect The Treasure!",120,20);
    fill("red");
    
    
   
    
    
  if(keyDown(UP_ARROW)){
    player.y=player.y-3;
    
  }
  if(keyDown(DOWN_ARROW)){
    player.y=player.y+3;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+3;
  }
  if(keyDown(LEFT_ARROW)){
    player.x=player.x-3;
  }

  if(player.isTouching(obstacle1)){
    player.positionX = 10;
    player.positionY = 60;
  }

      
    
      drawSprites();

}


  function preLoad() {

}

