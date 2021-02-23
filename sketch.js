var player, alien, alienGroup

function setup() {
  createCanvas(800,400);
  player= createSprite(40, 200, 30, 30);
  alienGroup = new Group()
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
  spawnAliens();
}
function spawnAliens(){
  if (frameCount % 20 === 0){
    var randX = Math.round(random(500,800));
   alien = createSprite(randX,0,20,20);
    
     //generate random obstacles                                                                                   
     
     var randY = Math.round(random(5,15));
     alien.velocityY = randY;
     alienGroup.add(alien); 
     alien.lifetime = 500
     }
    
    //add each obstacle to the group

  }
 