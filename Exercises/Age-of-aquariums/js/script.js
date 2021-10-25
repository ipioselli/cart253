/**
Exercise 04 : Age of aquariums
Ines Pioselli

Catch all the chicks before the timer runs out
Use the arrow keys to navigate the chicken around the screen

Brief :
1. user controlled shape
2. make the user interact with the "fish"
3. change the fish (change size )
4. Add at least 2 endings
*/
"use strict";

let user = {
  x: 0,
  y: 0,
  size: 200,
  vx:0,
  vy:0,
  speed:5,
};

let bg = {
  r: 209,
  g: 122,
  b: 107,
};

let chickImgStart = {
  x:500,
  y:500,
  size:600,

}

let chickFamily = [];
let familySize = 10;
let chickImg;
let chicksCought = 0;

let state = `start`;

let startInstructionTimer = 400;
let startInstructionVisible = false;

let myFont;


/**
Description of preload
*/
function preload() {
  user.image = loadImage("assets/images/chicken.png");
  chickImg = loadImage("assets/images/chick-0.png");
  chickImgStart.image = loadImage("assets/images/chick-0.png");
  myFont = loadFont(`fonts/ChickenPie-8MevB.otf`)

}


/**
Description of setup
*/
function setup() {

  createCanvas(1000, 1000);

  //creates 8 chicks randomly using i
  for (let i = 0; i < familySize; i++) {
    chickFamily[i] = createChicks(random(0, width), random(0, height));
  }

  user.x = random(0, width);
  user.y = random(0, height);

  user.vx = random(-user.speed, user.speed);
  user.vy = random(-user.speed, user.speed);


}


function createChicks(x, y) {
  let chicks = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2,
    home: false,
  };
  return chicks;
}

/**
Description of draw()
*/
function draw() {
  background(bg.r, bg.g, bg.b);

  if (state === `start`) {
    start();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `gameover`) {
    gameover();
  } else if (state === `winner`) {
    winner();
  }

}

function start() {
  push();
  textFont(myFont);
  textAlign(CENTER, CENTER);
  imageMode(CENTER, CENTER)
  textSize(45);
  fill(144, 38, 38);
  image(chickImgStart.image, chickImgStart.x, chickImgStart.y, chickImgStart.size, chickImgStart.size);
  text(`Catch all the chicks before `, width / 2, height / 2 -400);
  text(`the timer runs out!`, width / 2, height / 2 -300);

  fill(255, 255, 255);

  text(`Press ENTER to begin`, width / 2, height / 2 + 250);
  textSize(40);
  text(`Use the arrows key to navigate around!`, width / 2, height / 2 + 350);
  pop();
}

function simulation() {
  moveUser();
  displayUser();

  for (let i = 0; i < chickFamily.length; i++) {
    checkChicks(chickFamily[i]);
  }

  for (let i = 0; i < chickFamily.length; i++) {
    moveChicks(chickFamily[i]);
  }

  for (let i = 0; i < chickFamily.length; i++) {
    displayChicks(chickFamily[i]);
  }

  for (let i = 0; i < chickFamily.length; i++) {
    checkChicksCought(chickFamily[i]);
  }

  for (let i = 0; i < chickFamily.length; i++) {
    chicksSize(chickFamily[i]);
  }

  startInstructionTimer -= 1;
  if(startInstructionTimer <=0){
    startInstructionVisible = true;
  }

  if(startInstructionVisible){
    state = `gameover`;
  }

}

function winner() {
  push();
  //textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(144, 38, 38);
  text(`Winner`, width / 2, height / 2);
}

function gameover() {
  push();
  //textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(144, 38, 38);
  text(`game over`, width / 2, height / 2);
}




function checkChicks(chicks) {
  if (!chicks.home) {
    let d = dist(user.x, user.y, chicks.x, chicks.y);
    if (d < user.size / 2 - 20 + chicks.size / 2 - 30) {
      chicks.home = true;
      chicksCought += 1;


    }
  }
}

function moveChicks(chicks) {
  let change = random(0, 1);
  if (change < 0.05) { //5% change of direction will happen so they jiggle every now and then
    chicks.vx = random(-chicks.speed, chicks.speed); //random velocity
    chicks.vy = random(-chicks.speed, chicks.speed);
  }

  chicks.x = chicks.x + chicks.vx;
  chicks.y = chicks.y + chicks.vy;

  // Constrain the fish to the canvas
  chicks.x = constrain(chicks.x, 0, width - 50);
  chicks.y = constrain(chicks.y, 0, height - 50);
}

function chicksSize(chicks) {
  if (chicks.x > width / 2) {
    chicks.size = 150;
  }
}

//moves the chicken user


//displays the chicken user
function displayUser() {
  push();
  imageMode(CENTER);
  image(user.image, user.x, user.y, user.size, user.size);
  pop();
}

function displayChicks(chicks) {
  if (!chicks.home) {
    push();
    image(chickImg, chicks.x, chicks.y, chicks.size, chicks.size);
    pop();

  }
}

function checkChicksCought(chicks) {
  if (chicks.home && chicksCought === chickFamily.length) {
    state = `winner`;
  }

}

function moveUser() {

  user.x = user.x + user.vx;
  user.y = user.y + user.vy;

  user.x  = constrain(user.x , 0, width);
  user.y  = constrain(user.y , 0, width);

  if (keyIsDown(LEFT_ARROW)) {
    user.vx = -user.speed;

  }
  else if (keyIsDown(RIGHT_ARROW)) {
    user.vx = user.speed;
  }
  else {
    user.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    user.vy = -user.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    user.vy = user.speed;
  }
  else {
    user.vy = 0;
  }
}
//if the key ENTER is pressed the simulation state will be launched
function keyPressed() {
  if (keyCode === 13) {
    if (state === `start`) {
      state = `simulation`;
    }
  }
}
