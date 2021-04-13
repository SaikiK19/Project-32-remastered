
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon,slingshot;
var ground, ground2,ground3;
var polygon_img;
var backgroundImg;
var bg;
var score = 0;

function preload()
{
	polygon_img = loadImage("sprites/polygon.png");
	getBackgroundImg();
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(990,260,300,20);
	ground2 = new Ground(600,780,1200,20);
	ground3 = new Ground(620,710,500,30);
	block1 = new Block(900,235,50,50);
	block2 = new Block(940,235,50,50);
	block3 = new Block(980,235,50,50);
	block4 = new Block(1020,235,50,50);
	block5 = new Block(1060,235,50,50);
	block6 = new Block(940,195,50,50);
	block7 = new Block(980,195,50,50);
	block8 = new Block(1020,195,50,50);
	block9 = new Block(980,145,50,50);
	block10 = new Block(500,700,50,50);
	block11 = new Block(540,700,50,50);
	block12 = new Block(580,700,50,50);
	block13 = new Block(620,700,50,50);
	block14 = new Block(660,700,50,50);
	block15 = new Block(700,700,50,50);
	block16 = new Block(740,700,50,50);
	block17 = new Block(540,630,50,50);
	block18 = new Block(540,650,50,50);
	block18 = new Block(580,650,50,50);
	block19 = new Block(620,650,50,50);
	block20 = new Block(660,650,50,50);
	block21 = new Block(700,650,50,50);
	block22 = new Block(580,600,50,50);
	block23 = new Block(620,600,50,50);
	block24 = new Block(660,600,50,50);
	block25 = new Block(620,550,50,50);
	polygon = new Polygon(200,500,40);
	slingshot = new Slingshot(polygon.body,{x:200,y:400});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  getBackgroundImg();
  if(backgroundImg)
  	background(backgroundImg);

  	noStroke();
  	textSize(35)
  	fill("white")
  	text("Score  " + score, width-300, 50)

 
  ground.display();
  ground2.display();
  ground3.display();
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  block25.display();
  block25.score();

  polygon.display();
  slingshot.display();
  detectCollision(polygon,block1);
  detectCollision(polygon,block2);
  detectCollision(polygon,block3);
  detectCollision(polygon,block4);
  detectCollision(polygon,block5);
  detectCollision(polygon,block6);


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon.body,{x:200,y:400})
		//slingshot.attach(stone.body)
		slingshot = new Slingshot(polygon.body,{x:200,y:400});
	}
}
function detectCollision(polygon,block){
	blockBodyPosition = block.body.position
	polygonBodyPosition = polygon.body.position

	var distance = dist(polygonBodyPosition.x,polygonBodyPosition.y,blockBodyPosition.x,blockBodyPosition.y)
	if(distance<=block.r+polygon.r)
	{
		Matter.Body.setStatic(block.body,false);
	}
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "black";
    }
    else{
        bg = "blue";
    }

    backgroundImg = bg
    console.log(backgroundImg);
}