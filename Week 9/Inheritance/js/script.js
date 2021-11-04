/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let cars = [];
let numCars = 10;



/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(600,600);

  for(let i =0; i< numCars; i++){
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    cars.push(car); //push new car into car array
  }

}


/**
Description of draw()
*/
function draw() {

  for(let i =0; i<cars.length; i++){
    let car = cars[i];
  }

}
