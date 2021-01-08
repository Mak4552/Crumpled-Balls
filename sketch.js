
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1= new Wall(600,650,200,20);
	wall2= new Wall(500,610,20,100);
	wall3= new Wall(700,610,20,100);

	paper= new Paper(100,600,20);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,800,10)
  wall1.display();
  wall2.display();
  wall3.display();

  paper.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


