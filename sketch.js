const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var constraintlog, score=0;
var gameState = "onSling";
var bg = "sprites/bg.png";

function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    constraintlog = new Log(230,180,80,PI/2);

    bird = new Bird(200,100);
    bird1 = new Bird(150,170);
    bird2 = new Bird(100,170);
    bird3 = new Bird(50,170);
    slingshot = new slingshot(bird.body,{x:200, y:100});

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    else{
        background(bg);
    }
    
    Engine.update(engine);
   // console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();

    //constraintlog.display();
    slingshot.display();
    bird1.display();
    bird2.display();
    bird3.display();

    text("score: " + score,1100,75);  
    pig1.score();
    pig3.score();  
}



function mouseDragged(){
   //if (bird.body.position.x<210){
       if (gameState !== "launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
}
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}
function keyPressed(){
   // Matter.Body.setPosition(bird.body,{x:200, y:100});
 //  if (bird.body.position.x<210){
    if (keyCode===32){
        slingshot.attach(bird.body)
        Matter.Body.setPosition(bird.body,{x:200, y:100});
        gameState = "onSling";
    }
//}
}

async function getTime(){
    var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responceJSON=await responce.json();
    var dateTime = responceJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour)
    if(hour>=06 && hour<=18){
bg = "sprites/bg.png"
    }
else{
    bg = "bg2.jpg"
}
backgroundImg = loadImage(bg);
}