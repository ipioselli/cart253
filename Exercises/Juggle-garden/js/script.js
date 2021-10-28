/**
Exercise #5
Juggle-Garden
Ines Pioselli

Brief:
1. Add another form of user control
2. add a new class and objects
3. add at least 2 endings

*/

"use strict";

let user;

let tree = {

  size:500,

}

let branch1;

let branch2;

let branch3;

let acorn = [];

let numAcorns = 10;

let gravityForce = 0.0025;

let bg = {
  r:77,
  g:181,
  b: 219
};


/**
Description of preload
*/
function preload() {
tree.image = loadImage("assets/images/tree.png");
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  branch1 = new Branch1(300, 30); //parameters x, y
  branch2 = new Branch2(300, 30, random(0, width), random(0, height));
  branch3 = new Branch2(300, 30, random(0, width), random(0, height));


  for ( let i=0; i<numAcorns; i++){
    let x = random(0, width);
    let y = random(-400,-100);
    //let acorn = new Acorn(x, y);
    //acorns.push(acorn);
  }
}


/**
Description of draw()
*/
function draw() {

imageMode(CENTER, CENTER);
image(tree.image, width/2, height/2, 1920, 1080);
//background(bg.r, bg.g, bg.b);


branch1.move();
branch1.display();

branch2.display();
branch3.display();
}
