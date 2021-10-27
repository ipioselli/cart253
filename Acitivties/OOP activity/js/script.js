/**
Activity  week 8 : OOP
Ines Pioselli

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let paddle;


/**
Description of preload
*/
function preload() {

}



function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300, 20);

}



function draw() {
  background(0);

  paddle.move();
  paddle.display();

}
