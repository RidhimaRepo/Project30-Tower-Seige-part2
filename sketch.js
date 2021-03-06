const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,
 slingShot;
var stand1,stand2;
var polygon,ball;

function preload() {
   polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1=new Ground(390,250,250,10);
    platform = new Ground(150, 305, 300, 170);
    //level 2
    block1=new Box(330,235,30,40);
    block2=new Box(360,235,30,40);
    block3=new Box(390,235,30,40);
    block4=new Box(420,235,30,40);
    block5=new Box(450,235,30,40);
    //level 3
    block6=new Box(360,195,30,40);
    block7=new Box(390,195,30,40);
    block8=new Box(420,195,30,40);
    //top
    block9=new Box(390,155,30,40);
    ball=Bodies.circle(50,200,20);
    World.add(world,ball);

    //log6 = new Log(230,180,80, PI/2);
   slingshot = new SlingShot(this.ball,{x:200, y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    stand1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    

    block6.display();
    block7.display();
    block8.display();
    block9.display();
    imageMode(CENTER);
    image(polygon_img,this.ball.position.x,this.ball.position.y,40,40);
    slingshot.display();
   

    
    
    
    //log6.display();
        
}

function mouseDragged(){
   Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed(){
   if(keyCode===32){
    slingshot.attach(this.ball );
       
   }
}
