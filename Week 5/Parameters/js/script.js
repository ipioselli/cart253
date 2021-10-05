/**
Video 5.2 Functions with parameters
Ines Pioselli


Description of preload
*/
function preload() {

}

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(0);

  parallels(100,100);
  parallels(50, 50);
}


  function parallels(x,y) {
    for (let i = 0; i < 20; i++) {
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(x, y, 2, 150);
      x =  x + 10;

    }
  }
