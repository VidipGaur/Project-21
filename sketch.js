var bullet, wall;
var weight, speed;
var thickness;
function setup() {
  createCanvas(1600,400);
speed = random(223,321);
weight = random(30,52);
 bullet = createSprite(50,200,70,20);
thickness = random(22,83);
wall = createSprite(1550,200,thickness,height/2);
wall.shapeColor = (80,80,80);
}

function draw() {
  background(255,255,255);
  bullet.velocityX = speed;
if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(deformation>10)
  {
    bullet.shapeColor = color(255,0,0);
  }
  /*if(deformation<180 && deformation)
  {
    bullet.shapeColor=color(230,230,0);
  }*/
  if(deformation<10)
  {
    bullet.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}

  //function hasCollided() {
   /* if{
      bullet.x - wall.x <wall.width/2  + bullet.width/2
      && wall.x - bullet.x < bullet.width/2 + wall.width/2
      && wall.y - bullet.y < wall.height/2 + bullet.height/2
      && bullet.y - wall.y < bullet.height/2 + wall.height/2}
  }
     // car.shapeColor = "red";
      //wall.shapeColor = "red";  */
