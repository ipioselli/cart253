/**
Love, Actually : Exercise 03
Ines Pioselli


*/
let ghost1 = {
  x: 960,
  y:540,
  size:300,
  vx:0,
  vy:0,
  speed:3
};

let ghost2 = {
  x: 0,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:3
};

let bg={

  size: 500,
};



//preloads all the images from the project folder
function preload() {
  ghost1.image = loadImage("assets/images/ghost1.png");
  //ghost2.image = loadImage();
  bg.image = loadImage("assets/images/background.jpg");
  myFont = loadFont('assets/fonts/mummy-halloween-font/MummyHalloween-jEWq7.TTF');

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
  ghost1.x = width/3;
  ghost2.x = 2 * width/3;

  //ghost2.vx = random(-circle2.speed, circle2.speed);
  //ghost2.vy = random(-circle2.speed, circle2.speed);


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
}

function title(){
  push();
  textFont(myFont);
  fill(0, 0, 0, 100);
  rectMode(CENTER);
  rect(width/2, height/2, 500, 500);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(210, 0, 30);
  text(`Spooky Romance`, width/2, height/2);
  textSize(20);
  fill(200, 200, 200);
  text(`Press the spacebar to start!`, width/2, height-150);
  pop();


}

function simulation(){
  move();
  checkOffScreen();
  checkOverlap();
  checkCandy();
  display();
}

function love(){
  push();
  textFont(myFont);
  textSize(90);
  fill(255, 100, 100);
  textAlign(CENTER, CENTER);
  text(`You found your match!`, width/2, height/2);
  pop();
}

function sadness(){
  push();
  textSize(64);
  fill(255, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Sadness`, width/2, height/2);
}

function display(){
  imageMode(CENTER);
  image(ghost1.image, ghost1.x, ghost1.y, ghost1.size, ghost1.size);

}
