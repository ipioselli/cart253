/**
Experimenting with Variables
Ines Pioselli

This is a template. You must fill in the title,
author, and this description to match your project!
*/
let backgroundShade = 0;


let circle = {
  x: 250,
  y: 250,
  size: 100,
  speed: 1,
  fill: 255
};

function setup() {
createCanvas(500, 500);

}

function draw() {
  //backgroundShade = backgroundShade + 0.5;
  background(backgroundShade); //covers the background
  //circle.speed = random(-10, 10);
  circle.x = circle.x + circle.speed;
  circle.x = constrain(circle.x, 0, width);
  //circle.y = random(0, height);
  //circle.size = random(10, 100);
  //circle.fill = random(0,255);

  circle.size = map(mouseY, 0, height, 50, 500);
  circle.fill = map(mouseX, 0, width, 0, 255);
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);




}
