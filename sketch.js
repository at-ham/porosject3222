const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score;
var engine,world;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1100,550);
ground = new Ground (550,400,250,10)
ground2 = new Ground (900,250,250,10);

ball= new Bird (50,350);
boox=new Box(550,350,40,40);
slingshot = new SlingShot(ball.body,{x:150, y:350});
b1 = new Box(510,350,40,40);
b2 = new Box(590,350,40,40);
b3 = new Box(470,350,40,40);
b4 = new Box(630,350,40,40);
b5 = new Box(610,310,40,40);
b6 = new Box(570,310,40,40);
b7 = new Box(530,310,40,40);
b8 = new Box(490,310,40,40);
b9 = new Box(510,270,40,40);
b10 = new Box(550,270,40,40);
b11 = new Box(590,270,40,40);
b12 = new Box(530,230,40,40);
b13 = new Box(570,230,40,40);
b14 = new Box(550,190,40,40);
b15 = new Box(550+350,350-150,40,40);
b16 = new Box(940,200,40,40);
b17 = new Box(980,200,40,40);
b18 = new Box(860,200,40,40);
b19 = new Box(820,200,40,40);
b20 = new Box(840,160,40,40);
b21 = new Box(880,160,40,40);
b22 = new Box(920,160,40,40);
b23 = new Box(960,160,40,40);
b24 = new Box(940,120,40,40);
b25 = new Box(900,120,40,40);
b26 = new Box(860,120,40,40);
b27 = new Box(880,80,40,40);
b28 = new Box(920,80,40,40);
b29 = new Box(900,40,40,40);
grounnd=new Ground(550,500,1100,20);
score=0;
}
function keyPressed(){
  if (keyCode===32){
    slingshot.attach(ball.body);
  }
}
function draw() {
  Engine.update(engine);
  background("lightblue");  
ground.display();
text("score "+score,100,100);


ground2.display();
ball.display();
boox.display();
slingshot.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
b23.display();
b24.display();
b25.display();
b26.display();
b27.display();
b28.display();
b29.display();
grounnd.display();
boox.SSCCOORREE();
b1.SSCCOORREE();
b2.SSCCOORREE();
b3.SSCCOORREE();
b4.SSCCOORREE();
b5.SSCCOORREE();
b6.SSCCOORREE();
b7.SSCCOORREE();
b8.SSCCOORREE();
b9.SSCCOORREE();
b10.SSCCOORREE();
b11.SSCCOORREE();
b12.SSCCOORREE();
b13.SSCCOORREE();
b14.SSCCOORREE();
b15.SSCCOORREE();
b16.SSCCOORREE();
b17.SSCCOORREE();
b18.SSCCOORREE();
b19.SSCCOORREE();
b20.SSCCOORREE();
b21.SSCCOORREE();
b22.SSCCOORREE();
b23.SSCCOORREE();
b24.SSCCOORREE();
b25.SSCCOORREE();
b26.SSCCOORREE();
b27.SSCCOORREE();
b28.SSCCOORREE();
b29.SSCCOORREE();

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

