const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ground, division, side1, side2;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(700, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(240, 800, 480, 10);

	for(var a = 0; a < width; a +=80){
		divisions.push(new Division(a, height-divisionHeight/2,10,divisionHeight));
	}
	for(var j = 40; j< width; j+=50){
		plinkos.push(new Plinko(j, 75));
	}
	for(var k = 15; k< width; k+=50){
		plinkos.push(new Plinko(k, 175));
	}
	for(var l = 40; l< width; l+=50){
		plinkos.push(new Plinko(l, 275));
	}
	for(var m = 15; m< width; m+=50){
		plinkos.push(new Plinko(m, 375));
	}

	
	 Engine.run(engine); 
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(frameCount%60 === 0){
	particles.push(new Particle(random(10, 470),10));
  }

  for(var i = 0; i < plinkos.length;i++ ){
	plinkos[i].display();
  }

  for(var b =0; b<divisions.length; b++){
	  divisions[b].display();
  }
  

 	 for(var d =0; d < particles.length; d ++){
		particles[d].display();
	}

	ground.display();
  drawSprites();
 
}