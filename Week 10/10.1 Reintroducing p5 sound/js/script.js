/**
10.1 Reintroducing p5.sound
Ines Pioselli

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

;et barkSFX;



/**
Description of preload
*/
function preload() {
barkSFX = loadSound(`assets/sounds/bark.wav`);
}


/**
Description of setup
*/
function setup() {
  createCanvas(600,600);
  useStartAudio();

}


/**
Description of draw()
*/
function draw() {
  background(0);

  let newRate = map(mouseX, 0, width, -3, 3);
  barkSFX.rate(newRate);

}

function mousePressed(){
  barkSFX.rate(-1);
  barkSFX.play();

}
