
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1, string1;
var ground;

function setup(){
	createCanvas(1600, 700);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(675,500,25);
	bob2 = new Bob(720,500,25);
	bob3 = new Bob(765,500,25);
	bob4 = new Bob(810,500,25);
	bob5 = new Bob(855,500,25);

	string1 = new String(bob1.body,{x:675,y:150});
	string2 = new String(bob2.body,{x:720,y:150});
	string3 = new String(bob3.body,{x:765,y:150});
	string4 = new String(bob4.body,{x:810,y:150});
	string5 = new String(bob5.body,{x:855,y:150});
	
	ground = new Ground(765,150,500,20);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  
	fill(45,42,123);
	stroke(45,42,123);
	
    rect(550,375,15,550);
	rect(975,375,15,550);
	rect(775,650,600,70);
	
	fill(45,42,123);
	stroke(45,42,123);
	text("Newton's Cradle",700,50);
	
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 string1.display();
 string2.display();
 string3.display();
 string4.display();
 string5.display();

 ground.display();

  drawSprites();
}

  function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-250,y:-200});
  
	}
}



