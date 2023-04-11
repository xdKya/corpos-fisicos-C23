const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var chao;

function setup() {
  createCanvas(500, 800);
  engine = Engine.create();
  world = engine.world;

  chao = Bodies.rectangle(250, 790, 500, 20, { isStatic: true });
  World.add(world, chao);

  console.log(chao);
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("black");

  fill("rgb(79,10,6)");
  rect(chao.position.x, chao.position.y, 500, 20);
}
