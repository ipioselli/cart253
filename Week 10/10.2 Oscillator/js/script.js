/**
10.2 p5 Oscillator
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let oscillator;
let t = 0;
let angle =0;
/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(600, 600);
  userStartAudio();

  oscillator = new p5.Oscillator(440, `sine`);
  oscillator.amp(0.2);

}


/**
Description of draw()
*/
function draw() {
  background(0);

  let noiseValue = noise(t);
  //let r = random(0, 1);
  let newFreq = map(noiseValue, 0, 1, 440, 880);

  //let newFreq = map(mouseY, height, 0, 0, 880);
  oscillator.freq(newFreq);

  t = t + 0.1;

  //angle = angle + 0.1;

  // push();
  // textSize(32);
  // textAlign(LEFT, CENTER);
  // fill(255);
  // text(newFreq, 100, height/2 );
  // pop();

}

function mousePressed(){
  oscillator.start();

}

function mouseReleased(){
  oscillator.stop();
}
