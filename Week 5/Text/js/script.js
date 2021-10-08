/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let name = "Hamlet";
let title = "Prince";
let country = "Denmark";
let string = `Hi, my name is ${name}, ${title} of ${country}!`;

let string2 = "Hi, my name is" + name + ", " + title + " of" + country + "!";

let hello = {
  string: `Hello, world`,
  x: 0,
  y: 0,
  vx: 5,
  vy: 1,
  size: 64,
}


function preload() {

}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(127);

  hello.x = hello.x + hello.vx;
  hello.y = hello.y + hello.vy;

  hello.size = hello.size + 1;


  textAlign(CENTER, CENTER);
  textSize(hello.size);
  textStyle(BOLD);


  fill(200,50, 200);
  stroke(50, 200, 50);
  strokeWeight(3);

  text(hello.string, hello.x, hello.y);

}
