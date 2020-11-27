var sprite, sprite_running, sprite_collided;
var /*ground,*/ invisibleGround
var banaGroup, banaImage;
var obstaclesGroup;
var score;
var obstacleimage,bananiImage
function preload() {
  sprite_running = loadAnimation("sprite_0.png","sprite_1.png", "sprite_3.png", "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  //groundImage = loadImage("ground2.png");
  bananiImage = loadImage("banana.png");
  obstacleimage = loadImage("obstacle.png");
  }

function setup() {
  createCanvas(600, 500);
  sprite = createSprite(50, 460, 20, 50);
  sprite.addAnimation("running", sprite_running);
  sprite.scale = 0.2;
  //ground = createSprite(200, 180, 400, 20);
  //ground.addImage("ground", groundImage);
  //ground.x = ground.width/2;
  invisibleGround = createSprite(200, 490, 400, 10);
  invisibleGround.visible = false;
  obstaclesGroup = createGroup();
  banaGroup = createGroup()
  sprite.setCollider("rectangle", 0, 0, sprite.width, sprite.height);
  score = 0;
}
function draw() {
  background(180);
  text("Score: " + score, 500, 50);

    //ground.velocityX = -(4 + 3 * score / 100)
    score = score + Math.round(getFrameRate()/ 60);
    
   // if (ground.x < 0) {
    //  ground.x = ground.width / 2;
    //}
     if (keyDown("space") && sprite.y >= 150) {
      sprite.velocityY = -12; 
    }
    sprite.velocityY = sprite.velocityY + 0.8   
    spawnbananas();
        spawnObstacles(); 
    
  sprite.collide(invisibleGround);
  drawSprites()
}
function spawnObstacles() {
  if (frameCount % 180 === 0) {
    var obstacle = createSprite(600, 465, 10, 40);
    obstacle.velocityX = -(6 + score / 100);
    obstacle.addImage("obsta",obstacleimage)           
    obstacle.scale = 0.3;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}
function spawnbananas() {
  if (frameCount%100===0)
  {var banana = createSprite(600, 320, 40, 10);
    banana.y = Math.round(random(80, 120));
    banana.addImage("banaa",bananiImage);
    banana.scale = 0.2;
    banana.velocityX = -6;
    banana.lifetime = 200;
    banana.depth = sprite.depth;
    sprite.depth = sprite.depth + 1;
    banaGroup.add(banana);
  }
}

