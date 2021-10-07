/**
5.6 Keyboard input
Ines Pioselli


*/
 let bg = 0;


/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(bg);

  if(keyIsDown(65)){ //only when you hold down the a key
    rectMode(CENTER);
    rect(250, 250, 100, 100);
  }

  textAlign(CENTER, CENTER);
  textSize(64);
  fill(255);
  text(keyCode , width/2, height/2);


}

/** function keyPressed(){
  if(key === `a`) {
    bg = 0;
  }
  else if(key === `b`) {
    bg = 127;
  }
  else if (key === `c`){
    bg = 255;
  }

  if(keyCode === 38){
    bg = bg + 10;
    bg = constrain(bg, 0, 255);
  }

  else if (keyCode === 40){
    bg= bg -10;
    bg = constrain(bg, 0, 255);
  }
} **/
