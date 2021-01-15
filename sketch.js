
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paper1,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new ground(400,600,800,10);
paper1=new Paper(50,590,20);
dustbin1=new dustbin (623,560,15,45);
dustbin2=new dustbin (670,590,100,15);
dustbin3=new dustbin (716,560,15,45);

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
 
  paper1.display()  
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed() {
if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{ x:15,y:-15})

}
}

