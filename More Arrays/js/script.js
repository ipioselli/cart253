/**
7.3 More Arrays
Ines Pioselli


*/

"use strict";

let fortunes = {
  `It's not looking so good.`,
  `You will trip over Bradd Pitt today`,
  `You are going to enjoy gum`,
  `Happiness is your for the taking.`,
  `You will meet David lynch`.

}

let chosenFortune = `Click to see your future!`;

/**
Description of setup
*/
function setup() {
  createCanvas(600,600);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);

}


/**
Description of draw()
*/
function draw() {
  background(0);
  text(chosenFortune, width/2, height/2);


}

function mousePressed(){
  chosenFortune = random(fortunes);
}
