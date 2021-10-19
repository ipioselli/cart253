/**
6.2 Use strict
Ines Pioselli

This is a template. You must fill in the title,
author, and this description to match your project!
*/
"use strict";
let circle = {
  x: 0,
  y: 0,
  size:100
}

function preload() {

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
  circle.x = mouseX;
  circle.y = mouseY;

  ellipse(circle.x, circle.y, 100);

}
