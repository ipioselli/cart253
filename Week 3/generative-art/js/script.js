/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let rectangle = {
  x: 250,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  shade: 0,
  sizeAngle: 0

}

function setup() {
  createCanvas(500,500);
  rectangle.vx = random(-5,-5);
  rectangle.vy = random(-5, 5);
  background(0);
}

/**
Description of draw()
*/
function draw() {

  rectangle.x = rectangle.x + rectangle.vx;
  rectangle.y = rectangle.y + rectangle.vy;
  rectangle.size =  sin(rectangle.sizeAngle); //osulate between -1 and 1
  rectangle.shade = rectangle.shade + 2;

  rectMode(CENTER);
  noFill();
  stroke(rectangle.shade);
  rect(rectangle.x, rectangle.y, rectangle.size, rectangle.size);
}
