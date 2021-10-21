/**
Class 7
Ines Pioselli

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";



function preload() {

}
let balloons = [];
let numBalloons = 5;

function setup() {
  createCanvas(500,500);

for(let i = 0; i < numBalloons; i++){
  let balloon = {
    x: random(0, width),
    y: random(0, height),
    size: 75,
    fill: color(210, 0, 0),
    popped: false //has the balloon popped
  };
  //add the balloon to the array
  balloons.push(balloon);

}


}



function draw() {
  background(0);



  push();
  noStroke();
  fill(balloon.fill);
  ellipse(balloon.x, balloon.y, balloon.size);
  pop();

}
