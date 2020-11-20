var monkey , monkey_running,monkey_collided,gameState,PLAY,END,gameState
var banana ,bananaImage, obstacle, obstacleImage,monkeyImage
var FoodGroup, obstacleGroup
var score =0,survivalTime=0
function preload(){  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")  
  monkey_collided=loadAnimation("sprite_1.png","sprite_0.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  monkey=createSprite(50,320,0,0);

  
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,375,900,50);
  ground.shapeColor=("lightgreen");

  FoodGroup=new Group();
  obstacleGroup=new Group();
  monkey.setCollider("circle",0,0);
}
function draw() {
  background("blue");
monkey.collide(ground);
  
  
  if (gameState===PLAY){
  fill("yellow");
  textSize(20)
  textFont("comforta");
  text("score: "+ score,300,50);
     if (keyDown("space")&&monkey.y>=300) {
  monkey.velocityY = -15;
}
    
monkey.velocityY = monkey.velocityY + 0.8
if (ground.x < 0) {
  ground.x = ground.width / 2;
}
    if (monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+1
  }
    
  fill("black");
  textSize(20);
  textFont("comforta");
     survivalTime=survivalTime+(Math.round(getFrameRate()/62.1836727756767367563276));
  text("Survival Time: "+ survivalTime+"sec",180,70) ;
    spawnfood();
      spawnobstacles();
     if (obstacleGroup.isTouching(monkey)){
      gameState=END;  
        ground.velocityX = 0;
      monkey.velocityY = 0;
   obstacleGroup.setLifetimeEach(-1);
   FoodGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0); 
      score=0;
       survivalTime=0;
       fill("red");
       textSize(50);
       textFont("arial");
       text("GAME OVER",55,200);
     }
  }
    
  drawSprites();
}
function spawnfood(){
   if (frameCount %65 === 0){
  var food=createSprite(450,Math.round(random(250,190)),10,10);
  food.velocityX =- (8+score/10)
  food.addImage(bananaImage);
  food.lifetime=120;
  food.scale=0.1;
  FoodGroup.add(food);
  return food;
   }
}
function spawnobstacles(){
  if (frameCount %(Math.round(random(60,56.637536646374673266666663333333333333777777777777777777777111111111111111111111888888888888888888888222222222222222222299999999999999999333333333333333333087667555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555556666666666666666666666666666666666666666666666666666666666666666666666666377756375685)))  === 0){
   var obstacle = createSprite(450,330,10,40);
  obstacle.velocityX =- (8 +score/10)
  obstacle.addImage(obstacleImage);
  obstacle.lifetime=120;
  obstacle.scale=0.1;
  obstacleGroup.add(obstacle);
  return obstacle;
  }
}