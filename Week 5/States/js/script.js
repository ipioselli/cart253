/**
5.5 States
Ines Pioselli

*/

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
};

function setup() {
  createCanvas(500, 500);
  circle.vx = circle.speed;
  textSize(32);
  textAlign(CENTER, CENTER);

}

function draw() {
  background(0);

// draw each shape or text in the order you want it be shown
  fill(255);
  text(`Life.` , width/2, height/2);

  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  ellipse(circle.x, circle.y, circle.size);

fill(127);
text(`It's all over.`, width/2, height/2);
}
