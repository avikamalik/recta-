const Engine = Matter.Engine
const World = Matter.World  
const Bodies = Matter.Bodies

var engine,world,box1,box2;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new boxs(200,200,40,40);
  box2 = new boxs(230,250,40,40)
  grd= new ground(200,380,400,30);
}

function draw(){
  background(0);
  Engine.update(engine);
  box1.display()
  box2.display()
  grd.display()
  
}