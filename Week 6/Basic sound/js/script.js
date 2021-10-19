/**
6.1 Basic Sound
Ines Pioselli

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let music;

function preload(){
  barkSFX = loadSound(`assets/sounds/bark.wav`);

}


function setup() {
  createCanvas(500, 500);

}



function draw() {
background(0);
}

function mousePressed(){
  tryMusic();

}

function keyPressed(){
tryMusic();
}

function tryMusic(){
  if(!music.isPlaying()){
    music.loop();
  }
}
