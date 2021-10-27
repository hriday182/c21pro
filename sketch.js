const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
option={
isStatic:true


}
  //create player base body
  playerBase=Bodies.rectangle(200,500,100,100,option);
World.add(world,playerBase)
  //create player body
  player=Bodies.rectangle(230,360,100,100,option);
  World.add(world,player)


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
image(baseimage,playerBase.position.x,playerBase.position.y,150,150)
  //show the playerbase image using image() function
  image(playerimage,player.position.x,player.position.y,80,150)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
