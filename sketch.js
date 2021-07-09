var bg, bgImg

function preload (){
  bgImg = loadImage ("iss.png")
  brush = loadImage ("brush.png");
  sleep = loadImage ( "sleep.png");
  gym = loadImage ("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  eat = loadImage("eat1.png", "eat2.png");
  drink = loadImage ("drink1.png", "drink2.png");
  bath = loadImage ("bath1.png", "bath2.png");
  move = loadImage ("move.png");
  move1 = loadImage ("move1.png")
  sleep = loadImage ("sleep.png");
}





function setup() {
  createCanvas(800,400);
  createSprite(200, 200, 50, 50);

  
 bg = createSprite (200,200);
 bg.scale = 0.1
 bg.addImage (bgImg);

    
  astronaut = createSprite (200, 50);
  astronaut.addAnimation ("sleeping", sleep);
  astronaut.scale = 0.05;
}

function draw() {
  background(255,255,255);  
  
  if (keyDown ("UP_ARROW")){
    astronaut.addAnimation ("brushing", brush);
    astronaut.changeAnimation ("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown ("DOWN_ARROW")){
    astronaut.addAnimation ("gymming", gym);
    astronaut.changeAnimation ("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown ("LEFT_ARROW")){
    astronaut.addAnimation ("eating", eat);
    astronaut.changeAnimation ("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown ("RIGHT_ARROW")){
    astronaut.addAnimation ("bathing", bath);
    astronaut.changeAnimation ("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown ("M_KEY")){
    astronaut.addAnimation ("moving", move);
    astronaut.changeAnimation ("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  drawSprites();
}