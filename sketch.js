

var bacImg,garden;

var tom,jerry;

var tomSleeping,tomSitting,tomRunning;

var jerryStanding,jerryTeasing,jerryLast;



function preload() {
    //load the images here

 bacImg=loadImage("garden.png");

 tomSleeping=loadAnimation("cat1.png");
 tomRunning=loadAnimation("cat2.png","cat3.png");
 tomSitting=loadAnimation("cat4.png");

 jerryStanding=loadAnimation("mouse1.png");
 jerryTeasing=loadAnimation("mouse2.png","mouse3.png");
 jerryLast=loadAnimation("mouse4.png");



}

function setup(){
    createCanvas(980,700);

    

    //create tom and jerry sprites here
    
 tom=createSprite (870,500);
 tom.addAnimation("tomSleeping",tomSleeping);  
 tom.scale=0.15;
 //tom.setCollider ("rectangle",100,0,250,100);

 jerry=createSprite (200,500,50,50);
 jerry.addAnimation("jerryStanding",jerryStanding);
 jerry.scale=0.12;
 //jerry.setCollider ("rectangle",0,0,150,100);

 //tom.debug=true;
 //jerry.debug=true;

 console.log(tom.width,jerry.width);
}

function draw() {

    background(bacImg);
    //background(0);
   
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){

      tom.velocityX=0;

      tom.addAnimation("tomSitting",tomSitting);
      tom.x=350;
      tom.changeAnimation("tomSitting");

      jerry.addAnimation("jerryLast",jerryLast);
      
      jerry.changeAnimation("jerryLast");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){

  tom.velocityX=-5;
  tom.addAnimation("tomRunning",tomRunning);
  tom.changeAnimation("tomRunning",tomRunning);
  
  jerry.addAnimation("jerryTeasing",jerryTeasing);
  jerry.frameDelay=25;
  jerry.changeAnimation("jerryTeasing",jerryTeasing);
}



}
