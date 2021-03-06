/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/
let score =0;

let startCircle = {
  x: undefined,
  y: undefined,
  size:100,

};


let target = {
  x: undefined,
  y: undefined,
  size:50,
  vx: 1,
  vy:1,
};



let state = `title`

function setup() {
  createCanvas(640, 640);

  target.x = width/2;
  target.y = height/2;
  target.vx = random(-1, 1);
  target.vy = random(-1, 1);

}

function draw(){
  if(state === `title`){
    title();
  }
  else if (state === `game`){
    game();
  }
}

function title(){
  background(255, 255, 0);

  let d = dist(mouseX, mouseY, startCircle.x, startCircle.y);
  if(d < startCircle.size /2){
    state = `game`;


  }

  push();
  noStroke();
  fill(0);
  ellipse(startCircle.x, startCircle.y, startCircle.size);
  pop();
}
/**
Description of draw()
*/
function game() {
background(0);

score++;

target.x += target.vx;
target.y += target.vy;

moveTarget();
displayTarget();
displayScore();


}

function displayScore(){
  push();
  fill(255);
  textAlign(LEFT, TOP);
  textSize(32);
  text(score, width /8, height /8);
  pop();
}
