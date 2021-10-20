/**
Project 01:
Ines Pioselli

Requirements:
1. include at least 2 things
2. user should interact with the simulation
3. aesthetic should make sense
4. Have a beginning, middle, and end

This is a Bunny Planet Astrology Simulator
*/

"use strict";



let bg = {
  size:500
};

let user = {
  x:0,
  y:0,
  size:400,
  vx:0,
  speed:5
};

let shootingStar = {
  x:0,
  y:0,
  size:400,
  vx:0,
  speed:5
}

let mercury= {
  x:0,
  y:0,
  angle: 0,
  radius: 20,
  speed: 0.009,

};

let centerX = 500;
let centerY = 500;
/**
Description of preload
*/
function preload() {
bg.image = loadImage("assets/images/bg.png");
user.image = loadImage("assets/images/user.png");
}

let state = `title`; //launches the title screen

/**
Description of setup
*/
function setup() {
  createCanvas(1000, 1000);
  setupPlanets();
  //mercuryPlanet();

}

function setupPlanets(){
user.x = 0;
user.y = 0;

shootingStar.x = random(0,width);
shootingStar.y = random(0, height);

shootingStar.vx = random(-shootingStar.speed, shootingStar.speed);
shootingStar.vy = random(-shootingStar.speed, shootingStar.speed);
user.vx = random(-user.speed, user.speed);
user.vy = random(-user.speed, user.speed);



}

//function simulation(){}
/**
Description of draw()
*/
function draw() {
  background(0);
  imageMode(CENTER, CENTER);
  image(bg.image, width/2, height/2, 1000, 1000);
  display();
  mercuryPlanet();


  //sun
  strokeWeight(4);
 fill(210,210,210)
 //circle(300,300,25)
 noStroke();

 //launches each function depending on the state
if(state ===`title`){
  title();
}

}

function title(){
  push();
  image(user.image, 500, 500, user.size, user.size);
  pop();

}


function display(){
  //sun
  circle(500,500,25);

}


function mercuryPlanet(){
  push();
  translate(centerX, centerY);
  rotate(mercury.angle);
  mercury.angle = mercury.angle + mercury.speed;
  ellipse(mercury.radius, 0, 10, 10);
  pop();
}

function keyPressed(){
  if(keyCode === 32){
    if(state ===`title`){
      state = `simulation`;
    }
  }
  if(keyCode === 82){
    if(state != `simulation`){
      state = `simulation`;

    }
  }
}
