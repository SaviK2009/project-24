
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  P1=new paper(30,680,10);
  g1=new Ground(400,700,800,20);
  b1=new Box(700,685,100,10) 
  b2=new Box(750,640,10,100)
  b3=new Box(650,640,10,100)
	//Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("white");
  P1.display();
   g1.display();
   b1.display();
   b2.display();
   b3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(P1.body, P1.body.position,{x:20,y:-14});
	}
}

