const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var groundObj,base1,base2;
// base 1
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
//base2
var block18,block19,block20,block21,block22;
var block23,block24,block25;
var block26;

var polygon,slingShot;

var world,engine;

function setup() {
createCanvas(800,400);
groundObj =new Ground(450,390,900,20);
base1 =new stand(450,250,150,5);
base2 =new stand(350,150,150,5);
//base1 bottom row
block1=new block(375,240,30,40);
block2=new block(405,240,30,40);
block3=new block(435,240,30,40);
block4=new block(465,240,30,40);
block5=new block(495,240,30,40);
block6=new block(515,240,30,40);
block7=new block(545,240,30,40);
//base1 third row
block8=new block(405,200,30,40);
block9=new block(435,200,30,40);
block10=new block(465,200,30,40);
block11=new block(495,200,30,40);
block12=new block(515,200,30,40);
//base1 2nd row
block13=new block(435,160,30,40);
block14=new block(465,160,30,40);
block15=new block(495,160,30,40);
//base1 top row
block16=new block(465,120,30,40);

//base2bottom row
block18=new block(405,200,30,40);
block19=new block(435,200,30,40);
block20=new block(465,200,30,40);
block21=new block(495,200,30,40);
block22=new block(515,200,30,40);
//base2 middle row
block23=new block(435,160,30,40);
block24=new block(465,160,30,40);
block25=new block(495,160,30,40);
//base 2 top row
block26=new block(465,120,30,40);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot=new Slingshot(polygon.body,{x:100,y:200});
}

function draw() {
rectMode(CENTER);
background(0);  
groundObj.display();
base1.display();
base2.display();
//base1 bottom row
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
//base1 third row
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
//base1 2nd row
block13.display();
block14.display();
block15.display();
//base1 top row
block16.display();

//base2 bottom row
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
//base2 middle row
block23.display();
block24.display();
block25.display();
//base 2 top row
block26.display();

slingShot.display();

drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(bird.body, {x:mouseX , y:mouseY});
    
}
    
function mouseReleased(){
slingShot.fly();
    
}