const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball,stand1,stand2;
var slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,
    block15,block16,block17,block18,block19,block20,block21;

    var box1,box2,box3,box4,box5,box6,box7,box8,box9;


function setup(){
    engine = Engine.create();
    world = engine.world;

 createCanvas(900,400);
    
    ground = new Ground();

    stand1 = new Stand(380,300,370,10);
    stand2 = new Stand(700,200,200,10);
    //for 1st
    block1 = new Block(280,275,30,30);
    block2 = new Block(310,275,30,30);
    block3 = new Block(340,275,30,30);
    block4 = new Block(370,275,30,30);
    block5 = new Block(400,275,30,30);
    block6 = new Block(430,275,30,30);
    block7 = new Block(460,275,30,30);
    block8 = new Block(490,275,30,30);

    block9 = new Block(310,235,30,30);
    block10 = new Block(340,235,30,30);
    block11 = new Block(370,235,30,30);
    block12 = new Block(400,325,30,30);
    block13 = new Block(430,235,30,30);
    block14 = new Block(460,235,30,30);

    block15 = new Block(340,195,30,30);
    block16 = new Block(370,195,30,30);
    block17 = new Block(400,195,30,30);
    block18 = new Block(430,195,30,30);

    block19 = new Block(370,155,30,30);
    block20 = new Block(400,155,30,30);

    block21 = new Block(385,115,30,30);

//for second
    box1 = new Block(640,175,30,30);
    box2 = new Block(670,175,30,30);
    box3 = new Block(700,175,30,30);
    box4 = new Block(730,175,30,30);
    box5 = new Block(760,175,30,30);

    box6 = new Block(670,135,30,30);
    box7 = new Block(700,135,30,30);
    box8 = new Block(730,135,30,30);

    box9 = new Block(700,95,30,30);

     ball = Bodies.circle(50,200,20);
     World.add(world,ball);

     slingshot = new Slingshot(this.ball,{x:200,y:200});


   
}

function draw(){
    background(blue);

    Engine.update(engine);

    strokeWeight(2);
    stroke(15);

    stand1.display();
    stand2.display();

    stroke(15);
    fill("green");
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();


    stroke(15);
    fill("pink");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    ellipse(ball.position.x,ball.position.y,20);
    slingshot.display();

}

function mouseDragged(){
Matter.body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
