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
let myFont;

let orbitAngle = 160;

let bg = {
  size:500
};

let sun = {
  x: 450,
  y: 450,
  size: 80,

}

let user = {
  x:100,
  y:100,
  size:100,
  vx:0,
  vy:0,
  speed:5
};

let shootingStar = {
  x:0,
  y:0,
  size:100,
  vx:1,
  vy:1,
  speed:5
};

let mercury= {
  x:0,
  y:0,
  size: 40,
  angle: 0,
  radius: 45,
  speed: -0.005,
};

let venus= {
  x:0,
  y:0,
  size: 45,
  angle: 0,
  radius: 90,
  speed: -0.003,

};

let earth= {
  x:0,
  y:0,
  angle: 0,
  size: 45,
  radius: 135,
  speed: -0.002,

};

let mars= {
  x:0,
  y:0,
  angle: 0,
  radius: 175,
  size: 50,
  speed: -0.0013,

};

let jupiter= {
  x:0,
  y:0,
  angle: 0,
  size: 65,
  radius: 215,
  speed: -0.0009,

};

let saturn= {
  x:0,
  y:0,
  angle: 0,
  size:77,
  radius: 255,
  speed: -0.0007,

};

let uranus= {
  x:0,
  y:0,
  angle: 0,
  size:73,
  radius: 300,
  speed: -0.0006,

};

let neptune= {
  x:0,
  y:0,
  angle: 0,
  size:73,
  radius: 345,
  speed: -0.0005,

};

let pluto= {  //in my heart pluto is still a planet
  x:0,
  y:0,
  angle: 0,
  size:40,
  radius: 385,
  speed: -0.0004,

};

let sunState = {
  size:500,
}

let centerX = 450;
let centerY = 450;


//loads all the assets in my project folder

function preload() {
bg.image = loadImage("assets/images/bg.png");
myFont = loadFont('assets/fonts/balloon.otf');

user.image = loadImage("assets/images/user.png");
shootingStar.image = loadImage("assets/images/star.png");

//display planets
sun.image = loadImage("assets/images/sun.png");
mercury.image = loadImage("assets/images/Mercury.png");
venus.image = loadImage("assets/images/Venus.png");
earth.image = loadImage("assets/images/Earth.png");
mars.image = loadImage("assets/images/Mars.png");
jupiter.image = loadImage("assets/images/Jupiter.png");
saturn.image = loadImage("assets/images/Saturn.png");
uranus.image = loadImage("assets/images/Uranus.png");
neptune.image = loadImage("assets/images/Neptune.png");
pluto.image = loadImage("assets/images/Pluto.png");

sunState.image = loadImage("assets/images/sunState.png")

}

let state = `title`; //launches the title screen

/**
Description of setup
*/
function setup() {
  createCanvas(900, 900);
  setupPlanets();


}

function setupPlanets(){
user.x = 100;
user.y = 100;

shootingStar.x = random(0,width);
shootingStar.y = random(0, height);

shootingStar.vx = random(-shootingStar.speed, shootingStar.speed);
shootingStar.vy = random(-shootingStar.speed, shootingStar.speed);

user.vx = random(-user.speed, user.speed);
user.vy = random(-user.speed, user.speed);

}


/**
Description of draw()
*/
function draw() {

  background(0);
  imageMode(CENTER, CENTER);
  image(bg.image, width/2, height/2, 1920, 1080);

 //launches each function depending on the state
  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `dead`) {
    dead();
  }
  else if(state===`surprise`){
    surprise();
  }
  else if(state ===`learnMercury`){
    learnMercury();
  }
    else if (state ===`learnMars`){
    learnMars();
  }

  }


//function to display all the planets on the simulation page
function displayPlanets(){
  sunStar();
  mercuryPlanet();
  venusPlanet();
  earthPlanet();
  marsPlanet();
  jupiterPlanet();
  saturnPlanet();
  uranusPlanet();
  neptunePlanet();
  plutoPlanet();
}

function title(){
  push();
  image(user.image, width/2, height/2, user.size*5, user.size*5);
  pop();
  textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(200, 200, 200);
  text(`Press the spacebar to start!`, width/2, height/2+300);

}

function simulation(){
  displayPlanets();
  display();
  userInput();
  move();
  checkShootingStar();
  checkSun();
  checkMercury();
  checkMars();
  orbits();

}

function dead(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`RIP`, width/2, height/2);
}

function surprise(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`SURPRISE`, width/2, height/2);
  image(sunState.image, width/2, height/2, 900, 900);
}

function learnMars(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`HELLO`, width/2, height/2);
}

function learnMercury(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`HELLO`, width/2, height/2);
}





function sunStar(){
  image(sun.image, sun.x, sun.y, sun.size, sun.size);

}

function checkSun(){
  let d = dist(user.x, user.y, sun.x, sun.y);
  if(d<user.size/2 -20 + sun.size/2-20){
    state = `surprise`;
  }
}



function checkMars(){
  let d = dist(user.x, user.y, mars.x, mars.y);
  if(d < user.size/2  + mars.size/2 ){
    state = `learnMars`;
  }
}

function checkMercury(){
  let d = dist(user.x, user.y, mercury.x, mercury.y);
  if(d < user.size/2  + mercury.size/2 ){
    state = `learnMercury`;
  }
}

function mercuryPlanet(){
  push();
  translate(centerX, centerY);
  image(mercury.image, 960, 540, 50, 50);
  rotate(mercury.angle);
  mercury.angle = mercury.angle + mercury.speed;
  image(mercury.image,mercury.radius, 0, mercury.size, mercury.size);
  pop();

}

function venusPlanet(){
  push();
  translate(centerX, centerY);
  rotate(venus.angle);
  venus.angle = venus.angle + venus.speed;
  image(venus.image,venus.radius, 0, venus.size, venus.size);
  pop();

}

function earthPlanet(){
  push();
  translate(centerX, centerY);
  rotate(earth.angle);
  earth.angle = earth.angle + earth.speed;
  image(earth.image,earth.radius, 0, earth.size, earth.size);
  pop();


}


function marsPlanet(){

  push();
  translate(centerX, centerY);
  rotate(mars.angle);
  mars.angle = mars.angle + mars.speed;
  image(mars.image,mars.radius, 0, mars.size, mars.size);
  pop();

}


function jupiterPlanet(){
  push();
  translate(centerX, centerY);
  rotate(jupiter.angle);
  jupiter.angle = jupiter.angle + jupiter.speed;
  image(jupiter.image,jupiter.radius, 0, jupiter.size, jupiter.size);
  pop();

}

function saturnPlanet(){
  push();
  translate(centerX, centerY);
  rotate(saturn.angle);
  saturn.angle = saturn.angle + saturn.speed;
  image(saturn.image,saturn.radius, 0, saturn.size, saturn.size);
  pop();
}
function uranusPlanet(){
  push();
  translate(centerX, centerY);
  rotate(uranus.angle);
  uranus.angle = uranus.angle + uranus.speed;
  image(uranus.image,uranus.radius, 0, uranus.size, uranus.size);
  pop();
}

function neptunePlanet(){
  push();
  translate(centerX, centerY);
  rotate(neptune.angle);
  neptune.angle = neptune.angle + neptune.speed;
  image(neptune.image,neptune.radius, 0, neptune.size, neptune.size);
  pop();
}

function plutoPlanet(){
  push();
  translate(centerX, centerY);
  rotate(pluto.angle);
  pluto.angle = pluto.angle + pluto.speed;
  image(pluto.image,pluto.radius, 0, pluto.size, pluto.size);
  pop();
}

function orbits(){

  let planets = 9;
  for (let i =0; i<planets; i++){

    let diameter = 5 +((planets -i)*85);

    strokeWeight(6);
    stroke(255,255,255,30);
    noFill();
    ellipse(centerX,centerY, diameter, diameter);

  }

}


//function to move the user and shooting star
function move(){
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;

  user.x  = constrain(user.x , 0, width);
  user.y  = constrain(user.y , 0, width);

  shootingStar.x = shootingStar.x + shootingStar.vx;
  shootingStar.y = shootingStar.y + shootingStar.vy;


  shootingStar.x  = constrain(shootingStar.x , 0, width);
  shootingStar.y  = constrain(shootingStar.y , 0, width);

  //make the star bounce off the walls of the simulation
  if(shootingStar.x >= width || shootingStar.x <= 0){
    shootingStar.vx = -shootingStar.vx;
  }
  if(shootingStar.y >= height || shootingStar.y <= 0){
    shootingStar.vy = -shootingStar.vy;
  }


}

//moves the user (bunny in the spaceship)
function userInput(){

  if(keyIsDown(LEFT_ARROW)){
    user.vx = -user.speed;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    user.vx = user.speed;
  }
  else{
    user.vx =0;
  }

  if(keyIsDown(UP_ARROW)){
    user.vy = -user.speed;
  }
  else if(keyIsDown(DOWN_ARROW)){
      user.vy = user.speed;
  }
  else{
    user.vy =0;
  }

}

function checkShootingStar(){
  let d = dist(user.x, user.y, shootingStar.x, shootingStar.y);
  if(d < user.size/2 -20 + shootingStar.size/2 -20){
    state = `dead`;
  }
}




function display(){
  image(user.image, user.x, user.y, user.size, user.size);
  image(shootingStar.image, shootingStar.x, shootingStar.y, shootingStar.size, shootingStar.size);

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
