/**
Class 04 : Conditionals
Ines Pioselli

This is a template. You must fill in the title,
author, and this description to match your project!
*/


let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 5
}


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);

}


/**
Description of draw()
*/
function draw() {
  background(backgroundShade);

  circle.x = circle.x + circle.speed;

  if (circle.x === width) {
    circle.speed = -circle.speed; //make it turn the other way
  }

  if(circle.x < 0){
    circle.speed = -circle.speed;
  }

  if (mouseX <width/2){
      fill(255, 0, 0);
    }
    else if (mouseX < 2 * width/3){
      fill(0, 255, 0)
    }
    else{
      fill(0, 0, 255);
    }
  ellipse(circle.x, circle.y, circle.size);

}
