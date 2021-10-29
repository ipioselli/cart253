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

let yay = {
  x:150,
  y:150,
  size:600,
}

let chickFamily = []; // array of chicks
let familySize = 10; // array size
let chickImg;
let chicksCought = 0;

let state = `start`;

let chickTimer = 600;
let chickTimerDone = false;

let myFont;


// Preload all my assets
function preload() {
  user.image = loadImage("assets/images/chicken.png");
  chickImg = loadImage("assets/images/chick-0.png");
  chickImgStart.image = loadImage("assets/images/chick-0.png");
  myFont = loadFont(`fonts/ChickenPie-8MevB.otf`);
  yay.image = loadImage("assets/images/confetti.gif");

}


//setup canvas size and user and chick positions
function setup() {

  createCanvas(1000, 1000);

  //creates 8 chicks randomly using i
  for (let i = 0; i < familySize; i++) {
    chickFamily[i] = createChicks(random(0, width), random(0, height));
  }

  // set a random position for the user
  user.x = random(0, width);
  user.y = random(0, height);

  //gives the user a random speed
  user.vx = random(-user.speed, user.speed);
  user.vy = random(-user.speed, user.speed);


}

//function that creates the chicks
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

//draws the background and calls each function when their state changes
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

// title screen
//Prompts the user to press enter to start the simulation
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


//simulation function
// calls all the functions that allow the user to interact with the chicks
function simulation() {
  moveUser();
  displayUser();

  //calls the checkChicks function for the array of chicks
  for (let i = 0; i < chickFamily.length; i++) {
    checkChicks(chickFamily[i]);
  }

  //calls the moveChicks function for the array of chicks
  for (let i = 0; i < chickFamily.length; i++) {
    moveChicks(chickFamily[i]);
  }

  //calls the displayChicks for the array of chicks
  for (let i = 0; i < chickFamily.length; i++) {
    displayChicks(chickFamily[i]);
  }

  //calls the checkChicksCought for the array of chicks
  for (let i = 0; i < chickFamily.length; i++) {
    checkChicksCought(chickFamily[i]);
  }

  for (let i = 0; i < chickFamily.length; i++) {
    chicksSize(chickFamily[i]);
  }

  //timer in the simulation to activate the gameover state
  chickTimer -= 1;
  if(chickTimer <=0){
    chickTimerDone = true;
  }

  if(chickTimerDone){
    state = `gameover`; // if the chickTimer is <= 0 then the gameover state is called
  }

}

//Winner State called when the simulation is done before the timer runs out
function winner() {
  push();
  textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(144, 38, 38);
  text(`You WON!`, width / 2, height / 2 - 200);
  image(yay.image, yay.x, yay.y, yay.size, yay.size);
  text(`Congrats!`, width / 2, height / 2 +200);

}

//calls the gameover function from the gameover state
function gameover() {
  push();
  textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(100);
  fill(144, 38, 38);
  text(`game over`, width / 2, height / 2);
}



//function to check if the chicks overlap with the user
function checkChicks(chicks) {
  if (!chicks.home) {
    let d = dist(user.x, user.y, chicks.x, chicks.y);
    if (d < user.size / 2 - 50 + chicks.size / 2 - 50) {
      chicks.home = true;
      chicksCought += 1;


    }
  }
}

//function to move the chicks
function moveChicks(chicks) {
  let change = random(0, 1);
  if (change < 0.05) { //5% change of direction will happen so they jiggle every now and then
    chicks.vx = random(-chicks.speed, chicks.speed); //random velocity
    chicks.vy = random(-chicks.speed, chicks.speed);
  }

  chicks.x = chicks.x + chicks.vx;
  chicks.y = chicks.y + chicks.vy;

  // Constrain the chicksS to the canvas
  chicks.x = constrain(chicks.x, 0, width - 50);
  chicks.y = constrain(chicks.y, 0, height - 50);
}

//function to vary the size of the chicks when it reaches more than 1/2 the width of the canvas
function chicksSize(chicks) {
  if (chicks.x > width / 2) {
    chicks.size = 120;
  }
}

//displays the chicken user
function displayUser() {
  push();
  imageMode(CENTER);
  image(user.image, user.x, user.y, user.size, user.size);
  pop();
}

//function to display the image for each chick in the array
function displayChicks(chicks) {
  if (!chicks.home) {
    push();
    image(chickImg, chicks.x, chicks.y, chicks.size, chicks.size);
    pop();

  }
}

//function to check of all the chicks have been cough
function checkChicksCought(chicks) {
  if (chicks.home && chicksCought === chickFamily.length) {
    state = `winner`;
  }

}

//function to move the user using the arrow keys
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
