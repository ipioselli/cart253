/**
7.2 Introducing Arrays
Ines Pioselli


*/

"use strict";

let school = [];
let schoolSize = 4;
//fish
// let fish1;
// let fish2;
// let fish3;
// let fish4;

/**
Description of setup
*/
function setup() {
  createCanvas(600,600);

//creates 4 fish using i
  for (let i =0; i < schoolSize; i++){
    school[i] = createFish(random(0, width), random(0, height));
  }

  // Create four fish, positioned randomly
    // school[0] = createFish(random(0, width), random(0, height)); //index 0
    // school[1] = createFish(random(0, width), random(0, height)); // index 1
    // school[2] = createFish(random(0, width), random(0, height)); // index 2
    // school[3] = createFish(random(0, width), random(0, height)); // index 3
  }

  // createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return fish;
}


// draw()
// Moves and displays our fish
function draw() {
  background(0);

for(let i=0; i<school.length; i++){
    moveFish(school[i]);
}

for(let i=0; i<school.length; i++){
    displayFish(school[i]);
}


  // moveFish(school[0]);
  // moveFish(school[1]);
  // moveFish(school[2]);
  // moveFish(school[3]);

  // displayFish(school[0]);
  // displayFish(school[1]);
  // displayFish(school[2]);
  // displayFish(school[3]);
}

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) { //5% change of direction will happen so they jiggle every now and then
    fish.vx = random(-fish.speed, fish.speed); //random velocity
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

//creates fish when you click
function mousePressed(){
  let fish = createFish(mouseX, mouseY);
  school.push(fish);
}
