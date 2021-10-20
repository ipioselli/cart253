/**
Exercise 04 : Age of aquariums
Ines Pioselli

Brief :
1. user controlled shape
2. make the user interact with the "fish"
3. change the fish (change size )
4. Add at least 2 endings
*/

"use strict";

let user = {
  x: 0,
  y: 0,
  size:100

};

let bg = {
  r: 255,
  g:166,
  b: 163,
};

let school = [];
let schoolSize = 8;
//let chicks;


/**
Description of preload
*/
function preload() {
  user.image= loadImage("assets/images/chicken.png");


  // for (var i=0; i<8; i++) {
  //   school[i] = loadImage("assets/images/chick.png");
  // }

}


/**
Description of setup
*/
function setup() {

  createCanvas(1920,1080);

//creates 8 fish randomly using i
for(let i =0; i<schoolSize; i++){
  school[i]= createChicks(random(0, width), random(0, height))
}

user.x = random(0, width);
user.y = random(0, height);


}


function createChicks(x, y){
  let chicks = {
    x: x,
    y:y,
    size: 50,
    vx: 0,
    vy:0,
    speed:2,
    home: false,
  };
  return chicks;
}

/**
Description of draw()
*/
function draw() {
  background(bg.r, bg.g, bg.b);

  moveUser();


  for(let i=0; i<school.length; i++){
    checkChicks(school[i]);
  }

  for(let i=0; i<school.length; i++){
    moveChicks(school[i]);
}

displayUser();
for(let i=0; i<school.length; i++){
    displayChicks(school[i]);
}



}

function moveUser(){
  user.x = mouseX;
  user.y = mouseY;
}

function checkChicks(chicks){
    if(!chicks.home){
      let d = dist(user.x, user.y, chicks.x, chicks.y);
      if(d < user.size /2, + chicks.size /2){
        chicks.home = true;


      }
    }
}

function moveChicks(chicks){
  let change = random(0, 1);
  if (change < 0.05) { //5% change of direction will happen so they jiggle every now and then
    chicks.vx = random(-chicks.speed, chicks.speed); //random velocity
    chicks.vy = random(-chicks.speed, chicks.speed);
  }

  chicks.x = chicks.x + chicks.vx;
  chicks.y = chicks.y + chicks.vy;

  // Constrain the fish to the canvas
  chicks.x = constrain(chicks.x, 0, width);
  chicks.y = constrain(chicks.y, 0, height);
}

//moves the chicken user


//displays the chicken user
function displayUser(){
  push();
  imageMode(CENTER);
  image(user.image, user.x, user.y, user.size ,user.size);
  pop();
}

function displayChicks(chicks){
  if(!chicks.home){
      ellipse(chicks.x, chicks.y, chicks.size);
  }
}
