var backgroundImage;
var john, johnImage;
var junkFooodGroup, junk1, junk2, junk3, junk4, junk5;
var healthyFooodGroup, h1, h2, h3, h4, h5;
var ground, invisibleGround;
var x;
var gameState;

function preload() {
backgroundImage = loadImage("images/background.png");
johnImage = loadImage("images/John.png");

  junk1 = loadImage("images/hamburger.png");
  junk2 = loadImage("images/pizza.png");
  junk3 = loadImage("images/soft-drink.png");
  junk4 = loadImage("images/chocolate-bar.png");
  junk5 = loadImage("images/french-fries.png");

  h1 = loadImage("images/dairy-products.png");
  h2 = loadImage("images/cereals.png");
  h3 = loadImage("images/fruit.png");
  h4 = loadImage("images/vegetable.png");
  h5 = loadImage("images/protein.png");
  h6 = loadImage("images/meat.png")

}
0
function setup() {
  createCanvas(displayWidth, displayHeight);

  john = createSprite(50, displayHeight - 100,10,10);
  john.addAnimation("john", johnImage);
  john.scale = 0.2

  invisibleGround = createSprite(width/2,height-10,width,125);  
  invisibleGround.shapeColor = "#f4cbaa";
  
  ground = createSprite(width/2,height,width,2);
  ground.x = width/2
  ground.velocityX = -(6 + 3*x/100);

  junkFoodGroup = new Group();
  healthyFoodGroup = new Group();
 x = 0;
 gameState  = "Play";

}

function draw() {
  background(backgroundImage);
   
  if(touches.length>0 ||(keyDown("UP")) && john.y  >= height-105) {
        john.velocityY = -10.08 ;
        
      }
      if(touches.length>0 || keyDown("SPACE")) {      
          
        touches = []
  }

john.velocityY = john.velocityY + 0.5


  x = x + Math.round(getFrameRate()/60);
  ground.velocityX = -(6 + 3*x/100);
  
if (gameState === "Play"){

        
 

 

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  john.collide(invisibleGround);

  junkFood();
  HFood();
    

      
   
    if(junkFoodGroup.isTouching(john)){
        
        gameState = "End";

      
      
    }}
    if(gameState === "End"){
       
        
        //set velcity of each game object to 0
        ground.velocityX = 0;
        john.velocityY = 0;
        healthyFooodGroup.destroyEach();
        junkFoodGroup.destroyEach();
       
        //change john animation
        
        
        //set lifetime of the game objects so that they are never destroyed
        
        
             
        
        

}
drawSprites();     
}

function junkFood() {
  if(frameCount % 60 === 0) {
    var junk = createSprite(camera.x + 500,height-95,20,30);
    
    junk.setCollider('circle',0,0,45)
    // junk.debug = true
  
    junk.velocityX = -(6 + 3*x/100);
    
    //generate random junks
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: junk.addImage(junk1);
              break;
      case 2: junk.addImage(junk2);
              break;
      case 3: junk.addImage(junk3);
              break;
      case 4: junk.addImage(junk4);
              break;
      case 5: junk.addImage(junk5);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the junk           
    junk.scale = 0.1;
    junk.lifetime = 300;
    junk.depth = john.depth;
    john.depth +=1;
    //add each junk to the group
    junkFoodGroup.add(junk);
  }
}

function HFood() {
  if(frameCount % 60 === 0) {
    var healthy = createSprite(camera.x + 600,height-95,20,30);
    
    healthy.setCollider('circle',0,0,45)
    // junk.debug = true
  
   healthy.velocityX = -(6 + 3*x/100);
    
    //generate random junks
    var rand1 = Math.round(random(1,6));
    switch(rand1) {
      case 1: healthy.addImage(h1);
              break;
      case 2: healthy.addImage(h2);
              break;
      case 3: healthy.addImage(h3);
              break;
      case 4: healthy.addImage(h4);
              break;
      case 5: healthy.addImage(h5);
              break;
      case 56: healthy.addImage(h6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the junk           
    healthy.scale = 0.1;
    healthy.lifetime = 300;
    healthy.depth = john.depth;
    healthy.depth +=1;
    //add each junk to the group
    healthyFoodGroup.add(healthy);
  }
}