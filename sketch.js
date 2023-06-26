//girl running to get chocolate cake
var girl, girlImg;
var cake, cakeImg, cakeGroup;
var candybackground, candyImg;
var gamestate = "play";

function preload() {
  cakeImg = loadImage("cake.jpg");
  candybackgroundImg = loadImage("background.jpg");
  gI = loadImage("girl.jpg");
}

function setup() {
  createCanvas(400, 400);

  candybackground = createSprite(200, 200);
  candybackground.addImage("candy", candybackgroundImg);
  candybackground.scale = 0.30;
  candybackground.velocityX = -1;
  
  girl = createSprite(50, 210, 20, 20);
  girl.addImage("girlImg", gI); 

  invisible = createSprite(200, 390, 400, 10); // Adjusted position

  cakeGroup = new Group();
}

function draw() {
  background(0);

  if (gamestate === "play") {
    
    if (candybackground.x <100) {
      candybackground.x = candybackground.width/2;
    }

    if (keyDown("space")) {
      girl.velocityY = -2;
    }

    girl.collide(invisible); // Making the girl stand 

    if (cakeGroup.isTouching(girl) || girl.x > 600) {
      girl.destroy();
      gamestate = "end";
    }
  }

  drawSprites();
  // spawnObstacles();

  if (gamestate === "end") {
    stroke("pink");
    fill("orange");
    textSize(30);
    text("Game Over", 230, 250);
  }
}

function spawnObstacles() {
  if (frameCount % 240 === 0) {
    cake = createSprite(400, 370, 40, 10);
    cake.scale = 0.5;
    cake.addImage("cake", cakeImg);
    cake.velocityX = -1;
    cake.lifetime = 300;
    cakeGroup.add(cake);
  }
}
