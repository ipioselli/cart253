/**
Project 01:
Ines Pioselli

This is a Bunny Planet Astrology Simulator
*/

"use strict";

let bg = {
  size:500
};

/**
Description of preload
*/
function preload() {
bg.image = loadImage("assets/images/bg.png");
}


/**
Description of setup
*/
function setup() {
  createCanvas(810, 780);

}


/**
Description of draw()
*/
function draw() {
  background(0);
  imageMode(CENTER, CENTER);
  image(bg.image, width/2, height/2, 810, 780);


}
