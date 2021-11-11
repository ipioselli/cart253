/**
Project 2 Prototype
Long Leg Fishy Dating Simulator
Ines Pioselli


*/

"use strict";

let tutorialButton = {
  x:350,
  y:530,
  size:520,
}


//image for the title state
let titleScreen = {
  x:400,
  y:400,
  size:800,
}


let state = `title`; // the prototype starts with the title state


/**
Description of preload
*/
function preload() {
  titleScreen.image = loadImage("assets/images/titleScreen.png");
  tutorialButton.image = loadImage("assets/images/tutorialButton.png");

}


/**
Description of setup
*/
function setup() {
  createCanvas(800, 800);

}


/**
Description of draw()
*/
function draw() {
  if(state === `title`){
    title();
  }
  else if(state === `tutorial`){
    tutorial();
  }
  else if(state === `page01`){
    page01();
  }

}

function title(){
  imageMode(CENTER, CENTER);
  image(titleScreen.image, titleScreen.x, titleScreen.y, titleScreen.size, titleScreen.size);
  displayTutorialButton();
}

function displayTutorialButton(){
  image(tutorialButton.image, tutorialButton.x, tutorialButton.y, tutorialButton.size, tutorialButton.size);

}
