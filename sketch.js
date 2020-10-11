var bullet, wall,thickness;
var weight,speed;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 20, 20);
  bullet.shapeColor = "brown"

  wall = createSprite(1200,200,60,height/2)
  wall.shapeColor = "white"


  weight = Math.round(random (30,52))
  speed = Math.round(random (223,321))
  thickness = Math.round(random(22,83))
  
}

function draw() {
 

  background("black");
  

  bullet.velocityX = speed /5;

if(is_Touching(bullet,wall)){
 bullet.velocityX = 0
var deformation = 0.5 * weight * speed * speed / (thickness *thickness *thickness);
  if (deformation<10){
    bullet.shapeColor = "red"
  }
  if (deformation>10){
    bullet.shapeColor = "green"
  }
}
 drawSprites();
}


