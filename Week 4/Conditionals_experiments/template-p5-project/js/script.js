/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/


let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1
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

}
