var caixa;

function setup() {
  createCanvas(400,400);

  caixa = createSprite(200, 200, 30, 30);

}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
   background("#FF1493");
    
  }
  
  if(keyIsDown(LEFT_ARROW)){
  background("#9400D3");

  }

  if(keyIsDown(UP_ARROW)){
   background("#1E90FF");

  }
   
  if(keyIsDown(DOWN_ARROW)){
   background("#DB7093");

  }

  drawSprites();

}




