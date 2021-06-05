
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper1;


function setup() {
	createCanvas(1600, 700);
	console.log("createCanvas");
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
    console.log("groundObject...................................... created................");

	dustbinObj=new dustbin(1200,650);
	
    console.log("dustbinObject is made..........................................");

    paperObject = new Paper(200,450,80);
console.log("paperObject is made...............................................");
var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1600,
	  height: 700,
	  wireframes: false
	}
  });
	Engine.run(engine);

	Render.run(render);
   console.log("sketch.js.............");
}


function draw() {
  rectMode(CENTER);
  background(230);
  paperObject.display();

  groundObject.display();
  dustbinObj.display();
}  
 
function keyPressed(){
if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{X:130,y:-145});
 }

}
  


