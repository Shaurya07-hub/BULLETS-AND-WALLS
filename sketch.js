  var bullet,wall,weight;
  var speed,height,thickness;

function setup() {

  createCanvas(1370,610);

  speed=random(100,200);
  weight=random(30,52);
  thickness=random(22,83);

  wall= createSprite(1100, 250,thickness, height/2);
  wall.shapeColor="white";

  bullet= createSprite(50,250,50,10);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

}

function draw() {

  background("black");  

  if(hasCollided(bullet,wall)){

   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>8){
     wall.shapeColor="red";
   }

   if(damage<8){
     wall.shapeColor=color(0,255,0);
   }
  }

  drawSprites();

}
