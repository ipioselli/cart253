/**
10.5 Sound activity
Ines Pioselli


*/



"use strict";

let balls = [];

//f minor
let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`];
function preload() {

}


function setup() {
  createCanvas(600, 600);

  userStartAudio();

}


function draw() {
  background(0);

  for(let i =0; i < balls.length; i++){
    let ball = balls[i]; // temporary variable
    ball.move();
    ball.bounce();
    ball.display();
  }

}

function mousePressed(){
  createBall(mouseX, mouseY);
}

function createBall(x, y){
  let note = random(notes);
  let ball = new Ball(x, y, note);
  balls.push(ball);
}
