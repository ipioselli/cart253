let circle = {
  x: undefined,
  y: undefined,
  size: 100
}
/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

  circle.x = random(0, width);
  circle.y = random(0, height);

}


function draw() {
  background(0);

  fill(255);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);

}
