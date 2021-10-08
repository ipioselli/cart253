/**
Love, Actually : Exercise 03
Ines Pioselli


*/
let ghost1 = {
  x: 960,
  y:540,
  size:400,
  vx:0,
  vy:0,
  speed:4
};

let ghost2 = {
  x: 250,
  y:250,
  size:400,
  vx:0,
  vy:0,
  speed:5
};

let candy1 ={
  x: 640,
  y: 360,
  size: 300,
};

let bg={

  size: 500,
};



//preloads all the images from the project folder
function preload() {
  ghost1.image = loadImage("assets/images/ghost1.png");
  ghost2.image = loadImage("assets/images/ghost2.png");
  candy1.image = loadImage("assets/images/candy.png");
  bg.image = loadImage("assets/images/background.jpg");
  myFont = loadFont('assets/fonts/HalloweenBlack-4BRdx.otf');

}

let state = `title`; //launches the title screen

/**
Description of setup
*/
function setup() {
  createCanvas(1920, 1080);
  setupGhosts();

}

function setupGhosts(){
  ghost1.x = random(0, width);
  ghost1.y= random(0, height);

  ghost2.x = random(0, width);
  ghost2.y= random(0, height);

  candy1.x = random(0, width);
  candy1.y= random(0, height);
  //ghost2.x = 2 * width/3;

  ghost1.vx = random(-ghost2.speed, ghost2.speed);
  ghost1.vy = random(-ghost2.speed, ghost2.speed);
  ghost2.vx = random(-ghost2.speed, ghost2.speed);
  ghost2.vy = random(-ghost2.speed, ghost2.speed);

}


/**
Description of draw()
*/
function draw() {
    background(0);
    imageMode(CENTER, CENTER);
    image(bg.image, width/2, height/2, 1920,1080);

    if(state ===`title`){
      title();
    }
    else if(state === `simulation`){
      simulation();
    }
    else if(state ===`love`){
      love();
    }
    else if(state ===`candy`){
      candy();
    }
    else if(state===`sadness`){
      sadness();
    }
    else if(state ===`self love`){
      selfLove();
    }
}

function title(){
  push();
  textFont(myFont);
  //fill(0, 0, 0, 100);
  //rectMode(CENTER);
  //rect(width/2, height/2, 500, 500);

  textAlign(CENTER, CENTER);
  textSize(60);
  fill(144, 38, 38);
  text(`Spooky Romance`, width/2, height-800);

  textSize(40);
  fill(200, 200, 200);
  text(`Press the spacebar to start!`, width/2, height-500);

  textSize(20);
  fill(200, 200, 200);
  text(`And use the arrow keys to nagivate!`, width/2, height-300);
  pop();


}

function simulation(){
  move();
  userInput()
  checkOffScreen();
  checkOverlap();
  checkCandy();
  display();
}

function love(){
  push();
  textFont(myFont);
  textSize(50);
  fill(250, 250, 250);
  textAlign(CENTER, CENTER);
  text(`You found your match!`, width/2, height/2);
  pop();
}

function sadness(){
  push();
  textFont(myFont);
  textSize(64);
  fill(115, 26, 27);
  textAlign(CENTER, CENTER);
  text(`Sadness`, width/2, height/2);
}

function selfLove(){
  push();
  textFont(myFont);
  textSize(40);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text(`You don't need no man!`, width/2, height/2);
}

function candy(){
  push();
  textFont(myFont);
  textSize(30);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text(`RIP! You are poisoned!`, width/2, height/2);
  pop();
}

function move(){

  ghost1.x = ghost1.x + ghost1.vx;
  ghost1.y = ghost1.y + ghost1.vy;

  ghost2.x = ghost2.x + ghost2.vx;
  ghost2.y = ghost2.y + ghost2.vy;
}

function userInput(){

  if(keyIsDown(LEFT_ARROW)){
    ghost1.vx = -ghost1.speed;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    ghost1.vx = ghost1.speed;
  }
  else{
    ghost1.vx =0;
  }

  if(keyIsDown(UP_ARROW)){
    ghost1.vy = -ghost1.speed;
  }
  else if(keyIsDown(DOWN_ARROW)){
      ghost1.vy = ghost1.speed;
  }
  else{
    ghost1.vy =0;
  }

}

function checkOffScreen(){
  if(isOffScreen(ghost2)){
    state = `sadness`;
  }
  else if(isOffScreen(ghost1))
  state = `self love`;
}

function isOffScreen(ghost){
  if (ghost.x < 0 || ghost.x > width || ghost.y < 0 || ghost.y > height){
    return true;
  }
  else {
    return false;
  }
}

function checkOverlap(){
  let d = dist(ghost1.x, ghost1.y, ghost2.x, ghost2.y);
  if(d < ghost1.size/2 + ghost2.size/2){
    state = `love`;
  }
}

function checkCandy(){

  let d2 = dist(ghost1.x, ghost1.y, candy1.x, candy1.y);
  if(d2 < ghost1.size/2 + candy1.size/2 -100){
    state = `candy`;
  }

}

function display(){
  imageMode(CENTER);
  image(ghost1.image, ghost1.x, ghost1.y, ghost1.size, ghost1.size);
  image(ghost2.image, ghost2.x, ghost2.y, ghost2.size, ghost2.size);
  image(candy1.image, candy1.x, candy1.y, candy1.size, candy1.size);


}



function keyPressed(){
  if(keyCode === 32){
    if(state===`title`){
      state = `simulation`;
    }
  }
}
