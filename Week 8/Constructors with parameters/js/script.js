/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 20,
  // The color of the grass (background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};


function preload() {

}

function setup() {
  createCanvas(600, 600);


  for (let i = 0; i < garden.numFlowers; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50,80);
    let stemLength = random(50,100);
    let petalColor = {
      r:random(100,255),
      g: random(100,255),
      b:random(100,255)
    };

    let flower = new Flower(x, y, size, stemLength, petalColor); //calls the constructor from the flower class

    garden.flowers.push(flower);
  }
}



/**
Description of draw()
*/
function draw() {

//display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

    // Loop through all the flowers in the array and display them
    for (let i = 0; i < garden.flowers.length; i++) {
      let flower = garden.flowers[i];
      flower.display(); //calls the display function from the flower class
    }
}
