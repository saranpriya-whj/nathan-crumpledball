
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;
var ground;
var canvas;

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	canvas=createCanvas(1200, 700);


	
	ball = new paperball(100,10,50)
	//Create the Bodies Here.
	ground = Bodies.rectangle(600, 650, 1200, 30 , {isStatic:true} );
	World.add(world, ground);

	box1 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	World.add(world, box1);
	box2 = Bodies.rectangle(300, 600, 200, 20 , {isStatic:true} );
	World.add(world, box2);
    box3 = Bodies.rectangle(500, 600, 200, 20 , {isStatic:true} );
	World.add(world, box3);
 
	
	


	Engine.run(engine);
  
}


function draw() {
 
  background(0);
 
  ball.display();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,30)
  rect(box1.position.x,box1.position.y,200,20)
  rect(box2.position.x,box2.position.y,20,120)
  rect(box3.position.x,box3.position.y,20,120)
 


 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}



