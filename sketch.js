
var fixedRect , movingRect

function setup() {
  createCanvas(800,400);

 fixedRect= createSprite(400, 200, 50, 50);
fixedRect.shapeColor ="blue"
 movingRect = createSprite (300,200,50,50)
 movingRect.shapeColor = "blue"
}

function draw() {
  background("gray");  
movingRect.x = mouseX
movingRect.y = mouseY

if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2 &&fixedRect.x -movingRect.x <fixedRect.width/2+ movingRect.width/2 
  &&movingRect.y -fixedRect.y < fixedRect.height/2+movingRect.height/2&&fixedRect.y- movingRect.y < fixedRect.height/2 + movingRect.height/2){
  fixedRect.shapeColor ="green"
  }else{
    fixedRect.shapeColor = "blue"
  }



  drawSprites();
}