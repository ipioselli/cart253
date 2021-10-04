//let displayCircle = false;

let caterpillar = {
  x: 100,
  y: 250,
  segmentSize: 50
}


function setup() {
  createCanvas(500,500);
}

function draw() {

  background(0);
  noStroke();
  fill(100,200,100);


//while loop
  /** let x = caterpillar.x;
  let numSegments = 5;
  let segmentsDrawn = 0;

  while (segmentsDrawn < numSegments) {
    ellipse(x, caterpillar.y, caterpillar.segmentSize);
    x = x + 40;
    segmentsDrawn++;

  }
**/


  let x = caterpillar.x;
  let numSegments = 10;


  for( let i = 0; i < numSegments; i++){
    ellipse(x, caterpillar.y, caterpillar.segmentSize);
    x = x + 40;

  }





 /** if (mouseIsPressed){
    displayCircle = true;
  } //if the mouse is pressed the circle will appear

  if(displayCircle){
    ellipse(250, 250, 100, 100);
  }
  */

}
