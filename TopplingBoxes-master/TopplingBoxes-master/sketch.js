const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(300,300,50,50);
    Pig1 = new Pig(250,300,50,50);
    log1 = new Log(250,280,20,180,PI/2);
    ground = new Ground(200,height,400,20)
    box3 = new Box(200,260,50,50);
    box4 = new Box(300,260,50,50);
    Pig2 = new Pig(250,260,50,50);
    log2 = new Log(250,250,20,180,PI/2);
    box5 = new Box(250,230,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    log1.display();
    box3.display();
    box4.display();
    Pig2.display();
    log2.display();
    box5.display();
}