
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5;
var boyImage;
var boy;
var stone;
var ground;
var tree;

function preload()
{
	boyImage = loadImage("Images/boy.png");

}

function setup() 
{
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

		boy = createSprite(100,630,60,60);
		boy.addImage("human", boyImage);
		boy.scale= 0.1;

	//creating the objects
		stone  = new Stone  (35,570,20,20);
		tree   = new Tree   (600,500,500,500);
		ground = new Ground (660,700,1700,25);	
		mango1 = new Mango  (550,370,50,40);
		mango2 = new Mango  (620,390,50,40);
		mango3 = new Mango  (650,300,50,40);
		mango4 = new Mango  (670,480,50,40);
		mango5 = new Mango  (590,320,50,40);

	//var options = 
	//{
		//bodyA : boy,
		//bodyB : stone.body,
		//stiffness : 0.04,
       //length : 10
	//}

//	var chain = Constraint.create(options)
   // World.add(world,chain);

}

function draw() 
{
	background("lightblue");
	Engine.update(engine);

	//displaying the objects
		stone.display();
		tree.display();
		ground.display();
		mango1.display();
		mango2.display();
		mango3.display();
		mango4.display();
		mango5.display();
	
	drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body, {x: mouseX , y:mouseY});
}

function mouseReleased()
{
	stone.fly();
}