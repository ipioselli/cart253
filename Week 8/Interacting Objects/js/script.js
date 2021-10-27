/**
8.4 Interacting Objects
Ines Pioselli

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden


  numFlowers: 30,
  // The color of the grass (background)

  bees:[],

  numBees: 30,
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

  for (let i =0; i<garden.numBees; i++){
    let bee = new Bee (random(0, width), random(0,height));
    garden.bees.push(bee);
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
      if (flower.alive){
        flower.shrink();
        flower.display(); //calls the display function from the flower class
      }

    }

    for (let i =0; i<garden.bees.length; i++){
      let bee = garden.bees[i];
      if(bee.alive){
        bee.shrink();
        bee.move();
        bee.display();

        for(let j = 0; j<garden.flowers.length; j++){
          let flower = garden.flowers[j];
          if(flower.alive){
            bee.tryToPollinate(flower);
          }

        }
      }
    }
}
