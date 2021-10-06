/**
Title of Project
Author Name

*/
function setup() {
  createCanvas(500,500);

}


/**
Description of draw()
*/
function draw() {
  background(0);

  let x = random(0, width);
  let y = random(0, height);

  ellipse(x, y, 100);

}
