var terriorist1,terrioristimg;
var background1;
var camp1,campimg;
var forestbackground,forestbackgroundimg;
var missile,missileimg;
var plane,planeimg;
var blasting,blastingimg;
var cargoplane,cargoplaneimg,cargoplaneGrp;
var terroristGrp
var music;
var gameState="play"

function preload(){

terrioristimg=loadAnimation("terriorist1.png","terriorist2.png","terriorist3.png","terriorist4.png","terriorist5.png")
background1=loadImage("forest background.jpg")
campimg=loadImage("camp.png")
missileimg=loadImage("missile.png")
planeimg=loadImage("plane.png")
blastingimg=loadImage("blasting.png")
cargoplaneimg=loadImage("cargo plane.png");
music=loadSound("music.mp3")
}



function setup() {
  createCanvas(displayWidth,displayHeight-150);
   
  camp1=createSprite(100,500);
  camp1.addImage(campimg);

  missile=createSprite(width/2-650,80)
  missile.addImage(missileimg)
  missile.scale=0.1
  missile.visible=false;

  plane=createSprite(width/2-650,40);
  plane.addImage(planeimg);
  plane.scale=0.5;
  plane.setCollider("rectangle",0,0,plane.width,plane.height)

  

//bullets.visible=false
  
 // blasting=createSprite(width/2-650,80)
 // blasting.visible=false;
  
   terroristGrp= new Group()
   cargoplaneGrp= new Group()
    
   music.play();
   
}

function draw() {
  background(background1);  

  if(gameState==="play"){

  running();
  

//plane.x=mouseX;


if(keyCode === LEFT_ARROW)
  {
    plane.x = plane.x - 2; 
    
    
  }
  
  if(keyCode === RIGHT_ARROW)
  {
    plane.x = plane.x + 2; 
    
  }
  cp();
  if(keyCode === DOWN_ARROW){
     plane.y=plane.y+2
  }
  if(keyCode===UP_ARROW){
    plane.y=plane.y-2
  }
  
  
     //shootingSound.play();
   
  
  
  if(keyDown("space")){
    blasting=createSprite(plane.x,height-400)
    blasting.addImage(blastingimg)
   // blasting.visible=false;
  //missile.setVelocity(0,6)
  //missile.visible=true;   
  blasting.visible=true;
  blasting.scale=1
  blasting.lifetime=100
  //plane.x=blasting.x
  //missile.destroy();
  }
  if(terroristGrp.isTouching(blasting)){
    terroristGrp.destroyEach()
    blasting.destroy();
    //blasting.lifetime=100
         }
     
  if(cargoplaneGrp.isTouching(plane)){
   gameState="end";
    
  }
  drawSprites();
}
else if(gameState==="end"){
  plane.destroy();
  textSize(40)
  fill ("black")
  text("GAME OVER",width/2-100,height/2-200)
  missile.destroy();
  terrioristGrp.destroyEach();
   

  
}



}






function running(){
if(frameCount%150===0){

  terriorist1=createSprite(displayWidth/2-350,displayHeight-300)
  terriorist1.addAnimation("running",terrioristimg)
  
  terriorist1.velocityX=4
  terriorist1.x=Math.round(random(110,800))
  terriorist1.y=Math.round(random(500,655))
terroristGrp.add(terriorist1)
}
}

function cp(){
 if(frameCount%500===0){
   cargoplane=createSprite(displayWidth-100,displayHeight/2-300)
   cargoplane.addImage(cargoplaneimg)
   cargoplane.velocityX=-1
   cargoplane.scale=0.6
   cargoplane.lifetime=300
   cargoplaneGrp.add(cargoplane)
   //cargoplane.x=bullets.x
   cargoplane.setCollider("rectangle",0,0,400,50)
 }

}