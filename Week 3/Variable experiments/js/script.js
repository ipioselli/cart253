/**
Experimenting with Variables
Ines Pioselli

This is a template. You must fill in the title,
author, and this description to match your project!
*/
let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 200;
let circleSpeed = 2;
let circleAcceleration = 0.25;

function setup() {
createCanvas(500, 500);

}

function draw() {
  backgroundShade = backgroundShade + 0.5;
  background(backgroundShade); //covers the background
  circleX += circleSpeed;
  circleSpeed += circleAcceleration;

  ellipse(circleX, circleY, circleSize);

}
