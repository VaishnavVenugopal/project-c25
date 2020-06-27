var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a G
	fill("blue");
ground = Bodies.rectangle(200, 400,400, 10 , {isStatic:true} );
 	World.add(world, ground);
paper1 = new paper(400,100,70,70);
ground1=new Ground(200,675,1200,10);
bin1=new bin(400,605,120,135);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 paper1.display();
 ground1.display();
 fill("brown")
 bin1.display();

}

function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65})
	}
}

