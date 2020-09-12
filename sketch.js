const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground,slingShot,bg;
var stand1,stand2;

function preload(){
    bg = loadImage("BG.png")
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  ball = Bodies.rectangle(200,300,100,100,{'density':1.0});
  World.add(world,ball);

  slingShot = new Slingshot(ball,{x:200,y:300})
  
  stand1 = new Stand(700,200,200,10);
  stand2 = new Stand(700,500,300,10);
  //line one
  box1 = new Box(300+310,275+200,30,40);
  box2 = new Box(330+310,275+200,30,40);
  box3 = new Box(360+310,275+200,30,40);
  box4 = new Box(390+310,275+200,30,40);
  box5 = new Box(420+310,275+200,30,40);
  box6 = new Box(450+310,275+200,30,40);
  box7 = new Box(480+310,275+200,30,40);
  bx11 = new Box(300+280,275+200,30,40);
  bx22 = new Box(820,275+200,30,40);
  //line two
  box8 = new Box(330+310,235+200,30,40);
  box9 = new Box(360+310,235+200,30,40);
  box10 = new Box(390+310,235+200,30,40);
  box11 = new Box(420+310,235+200,30,40);
  box12 = new Box(450+310,235+200,30,40);
  box33 = new Box(330+280,235+200,30,40);
  box44 = new Box(450+340,235+200,30,40);
  //line three
  box13 = new Box(360+310,195+200,30,40);
  box14 = new Box(390+310,195+200,30,40);
  box15 = new Box(420+310,195+200,30,40);
  box55 = new Box(360+280,195+200,30,40);
  box66 = new Box(420+340,195+200,30,40);
  //line 4
  box16 = new Box(390+310,155+200,30,40);
  box77 = new Box(390+280,155+200,30,40);
  box88 = new Box(390+340,155+200,30,40);
  //top
  box99 = new Box(390+310,115+200,30,40);

  //set 2 for second stand
  //first line
  boxs1 = new Box(640,175,30,40);
  boxs2 = new Box(670,175,30,40);
  boxs3 = new Box(700,175,30,40);
  boxs4 = new Box(730,175,30,40);
  boxs5 = new Box(760,175,30,40);
  //second line
  boxs6 = new Box(670,135,30,40);
  boxs7 = new Box(700,135,30,40);
  boxs8 = new Box(730,135,30,40);
  //top line
  boxs9 = new Box(700,95,30,40);

}
function draw() {
  background(bg); 
  Engine.update(engine);

  fill('gold')
  push();
  polygon(ball.position.x, ball.position.y, 40, 5);
  pop();

  ground.display();

  
  slingShot.display();
  
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("maroon");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  bx11.display();
  bx22.display();
  fill("red");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box33.display();
  box44.display();
  fill("orange");
  box13.display();
  box14.display();
  box15.display();
  box55.display();
  box66.display();
  fill("gold");
  box16.display();
  box77.display();
  box88.display();
  fill("yellow");
  box99.display();
  fill("darkgreen");
  boxs1.display();
  boxs2.display();
  boxs3.display();
  boxs4.display();
  boxs5.display();
  fill("green");
  boxs6.display();
  boxs7.display();
  boxs8.display();
  fill("lightgreen")
  boxs9.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }