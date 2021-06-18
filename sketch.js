
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,right,left;
var engine,world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	restitution:0.3,
	friction:0,
	density:1.2
}
ball=Bodies.circle(230,100,20,ball_options)
World.add(world,ball)
ground=new Ground(width/2,650,width,20)
right=new Ground(1100,600,20,120)
left=new Ground(900,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.display();
  right.display();
  left.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:70,y:-70})
	}
}



