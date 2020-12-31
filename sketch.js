const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var sling1, sling2, sling3, sling4, sling5;
var world,mConstraint;


function setup() {
	createCanvas(900, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
   canvasmouse.pixelRatio = pixelDensity();
   let options ={
       mouse:canvasmouse
   };
   mConstraint = MouseConstraint.create(engine, options);

	roofObject=new roof(width/2,height/2,width/7,20);
	


	bobObject1=new Pendulum(340, 450, "black");
	bobObject2=new Pendulum(400, 450, "black");
	bobObject3=new Pendulum(460, 450, "black");
	bobObject4=new Pendulum(520, 450, "black");
	bobObject5=new Pendulum(580, 450, "black");

	sling1 = new Sling(bobObject1.body, { x: 340, y: 200 }); 
	sling2 = new Sling(bobObject2.body, { x: 400, y: 200 }); 
	sling3 = new Sling(bobObject3.body, { x: 460, y: 200 }); 
	sling4 = new Sling(bobObject4.body, { x: 520, y: 200 }); 
	sling5 = new Sling(bobObject5.body, { x: 580, y: 200 });
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bobObject1.body, {x: mouseX, y:mouseY});
}






