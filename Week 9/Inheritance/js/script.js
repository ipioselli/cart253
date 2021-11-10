/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let cars = [];
let numCars = 10;

let motorcycles = [];
let numMotorcycles = 10;



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

  for(let i=0; i<numMotorcycles; i++){
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    motorcycles.push(motorcycle);
  }

}


/**
Description of draw()
*/
function draw() {

  for(let i =0; i<cars.length; i++){
    let car = cars[i];
    car.move();
    car.wrap();
    car.display();
  }

  for(let i =0; i<motorcycles.length; i++){
    let motorcyle = motorcycles[i];
    motorcyle.move();
    motorcyle.wrap();
    motorcyle.display();
  }

}