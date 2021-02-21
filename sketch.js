var player

function setup() {
  createCanvas(800,400);
  player= createSprite(40, 200, 30, 30);
}

function draw() {
  background(0);  
  if(keyDown("up")){
    player.y= player.y - 10
  }
  if(keyDown("down")){
    player.y= player.y + 10
  }
  if(keyDown("space")){
    player.velocityX = 15
  }
  if(player.x > 800){
    player.x = 40
    player.velocityX = 0
  }
  drawSprites();
}