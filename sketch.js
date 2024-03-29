
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dust1, dust2, dust3, gameState

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);


	//Create the Bodies Here.
	var gOptions = {
		isStatic: true
	}
	fill('yellow');
  ground = Bodies.rectangle(width/2, 650, width, 20, gOptions);
  World.add(world, ground);
  paper = new Paper(50,615,25);
  dust1 = new Dustbin(700,635,100,10);
  dust2 = new Dustbin(645,590,10,100);
  dust3 = new Dustbin(755,590,10,100);
  gameState = 0;

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,4000,20);
  if(gameState == 0){
    fill('white');
    textSize(40);
    text("Press Space to Play", 310,200);
  
      }
  if(keyDown(32) && gameState === 0){
    gameState = 1;
  }
  if(gameState == 1){
  fill('purple');
  paper.display();
  fill('green')
  dust1.display();
  dust2.display();
  dust3.display();
  fill('white')
  textSize(30)
  text("Use UP and DOWN key to throw the trash", 200, 200);
  text("Reload To Play Again", 310, 400);
  
  if (keyCode === UP_ARROW ) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 1.75,
      y: -6
      });
  }
  

  
  
  
  
 
}

}

