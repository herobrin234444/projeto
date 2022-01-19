
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var solo,soloop;
var bloco,bloco2,bloco3; 
var blocoop, bloco2op ,bloco3op;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	soloop = {
		isStatic:true
	}
	solo = Bodies.rectangle(400,580,800,1,soloop);
	World.add(world,solo);
	blocoop = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	bloco = Bodies.rectangle(110,50,10,10,blocoop);
	World.add(world,bloco);
	bloco2op = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
	bloco2 = Bodies.circle(220,50,10,bloco2op);
	World.add(world,bloco2);
	bloco3op = {
		restitution:0.3,
		friction:1,
		frictionAir:0.5
	}
	bloco3 = Bodies.rectangle(350,50,10,10,bloco3op);
	World.add(world,bloco3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
	Engine.update(engine);

	rect(solo.position.x,solo.position.y,800,2);
	rect(bloco.position.x,bloco.position.y,50,50);
	ellipse(bloco2.position.x,bloco2.position.y,50);
	rect(bloco3.position.x,bloco3.position.y,80,50);

  drawSprites();
 
}



