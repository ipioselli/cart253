/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let bgImage = undefined;

let state = `start`;

let startInstructionTimer = 90;
let startInstructionVisible = false;


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(500, 500);

setTimeout(showInstruction, 2000);
}


/**
Description of draw()
*/
function draw() {
  if(state === `starte`){
    start();
  }
  else if(state === `simulation`){
    simulation();
  }

}

function start(){
  background(0);

  satartInstructionTimer -= 1;
  if(startInstructionTimer <= 0){
    startInstructionVisible = true;
  }
  if(startInstructionVisible){
    push();
    textAlign(CENTER, CENTER);
    fill(255);
    text(`Click to begin`, width/2, height/2);
    pop();
  }
}
