/**
Activity 5: Looking for love
Ines Pioselli

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed:3
};
let circle2 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed:3
};

let state = `title`; //can be: title, simulation, love, sadness


function setup() {
  createCanvas(500,500);
  setupCircles();

}

function setupCircles(){
  circle1.x = width/3;
  circle2.x = 2 * width /3;

  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}

function draw() {
  background(0);

  if(state === `title`){
    title();

  }
  else if(state ===`simulation`){
    simulation();
  }
  else if(state ===`love`){
    love();

  }
  else if(state ===`sadness`){
    sad();

  }

}

function title(){
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`LOVE?`, width/2, height/2 );
  pop();
}

function simulation(){ //function to call all the other functions
  move();
  checkOffScreen();
  checkOverlap();
  display();
}

function love(){
  push();
  textSize(64);
  fill(255, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Love!`, width/2, height/2 );
  pop();
}

function sad(){
  push();
  textSize(64);
  fill(255, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Sadness`, width/2, height/2 );
  pop();
}


function move(){
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

function checkOffScreen(){
  //if the circles go off the screen
    if(isOffScreen(circle1) || isOffScreen(circle2)){
      //sad ending goes here
      state = `sadness`;
    }
}

function isOffScreen(circle){
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height){
    return true;
  }
  else {
    return false;
  }
}

function checkOverlap(){
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d< circle1.size/2 + circle2.size/2){ //adding the 2 radius together
    state = `love`;
  }
}

function display(){
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function keyPressed(){
  if(keyCode === 32){
    if(state ===`title`){
      state = `simulation`;
    }
  }

}
