var canvas;
var wall, thickness;
var bullet, speed, weight;


function setup() {
  canvas = createCanvas(1600,400);
  

 thickness =random(22, 83);
  wall =createSprite(1200,200, thickness, height/2);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor=color(255);
  bullet.velocityX = random(223, 321);
 
  wall.shapeColor = color(80,80,80);
  speed = random(223, 321);
  weight =random(30,52);
}

function draw() {
  background(0);  
  if(wall.x-bullet.x < (wall.width + bullet.width)/2)
  {
    bullet.velocityX=0;
    var damage = (0.5 * weight * speed * speed)/ (thickness *thickness *thickness)
    if(damage>10){
      bullet.shapeColor = color(255,0,0);
    }
    else{
     bullet.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();

}