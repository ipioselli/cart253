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

let speedStar = 0.1;

let bg = {
  size:500
};

let sun = {
  x: 960,
  y: 540,
  size: 200,

}

let user = {
  x:0,
  y:0,
  size:80,
  vx:0,
  speed:5
};

let shootingStar = {
  x:0,
  y:0,
  size:400,
  vx:1,
  vy:1,
  speed:5
}

let mercury= {
  x:0,
  y:0,
  size: 70,
  angle: 0,
  radius: 130,
  speed: -0.005,


};

let venus= {
  x:0,
  y:0,
  size: 80,
  angle: 0,
  radius: 200,
  speed: -0.003,

};

let earth= {
  x:0,
  y:0,
  angle: 0,
  radius: 100,
  speed: -0.02978 * speedStar,

};

let mars= {
  x:0,
  y:0,
  angle: 0,
  radius: 150,
  speed: -0.024077 * speedStar,

};

let jupiter= {
  x:0,
  y:0,
  angle: 0,
  radius: 250,
  speed: -0.01307 * speedStar,

};

let saturn= {
  x:0,
  y:0,
  angle: 0,
  radius: 300,
  speed: -0.00969  * speedStar,

};

let uranus= {
  x:0,
  y:0,
  angle: 0,
  radius: 350,
  speed: -0.00681 * speedStar,

};

let neptune= {
  x:0,
  y:0,
  angle: 0,
  radius: 400,
  speed: -0.00543* speedStar,

};

let pluto= {  //in my heart pluto is still a planet
  x:0,
  y:0,
  angle: 0,
  radius: 450,
  speed: -0.0047 * speedStar,

};


let centerX = 960;
let centerY = 540;
/**
Description of preload
*/
function preload() {
bg.image = loadImage("assets/images/bg.png");
myFont = loadFont('assets/fonts/balloon.otf');

user.image = loadImage("assets/images/user.png");

//display planets
sun.image = loadImage("assets/images/sun.png");
mercury.image = loadImage("assets/images/Mercury.png");
venus.image = loadImage("assets/images/Venus.png");
}

let state = `title`; //launches the title screen

/**
Description of setup
*/
function setup() {
  createCanvas(1920, 1080);
  setupPlanets();


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


/**
Description of draw()
*/
function draw() {
  background(0);
  imageMode(CENTER, CENTER);
  image(bg.image, width/2, height/2, 1920, 1080);

 //launches each function depending on the state
if(state ===`title`){
  title();
}
else if(state ===`simulation`){
  simulation();
}
else if(state === `dead`){
  dead();
}

}

//function to display all the planets on the simulation page
function displayPlanets(){
  sunStar();
  mercuryPlanet();
  venusPlanet();
  earthPlanet();
  marsPlanet()
  jupiterPlanet();
  saturnPlanet();
  uranusPlanet();
  neptunePlanet();
  plutoPlanet();
}

function title(){
  push();
  image(user.image, 960, 540, user.size*5, user.size*5);
  pop();
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`Press the spacebar to start!`, width/2, height-500);

}

function simulation(){
  displayPlanets();
  display();
  userInput();
  move();
  checkShootingStar()

}

function dead(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`RIP`, width/2, height/2);
}



function sunStar(){
  image(sun.image, sun.x, sun.y, sun.size, sun.size);

}


function mercuryPlanet(){
  push();
  translate(centerX, centerY);
  image(mercury.image, 960, 540, 50, 50);
  rotate(mercury.angle);
  mercury.angle = mercury.angle + mercury.speed;
  image(mercury.image,mercury.radius, 0, mercury.size, mercury.size);
  pop();


  push();
  stroke(255,165,3,30);
  noFill();
  circle(500,500,30);
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
  ellipse(earth.radius, 0, 20, 20);
  pop();
}
function marsPlanet(){
  push();
  translate(centerX, centerY);
  rotate(mars.angle);
  mars.angle = mars.angle + mars.speed;
  ellipse(mars.radius, 0, 20, 20);
  pop();
}
function jupiterPlanet(){
  push();
  translate(centerX, centerY);
  rotate(jupiter.angle);
  jupiter.angle = jupiter.angle + jupiter.speed;
  ellipse(jupiter.radius, 0, 20, 20);
  pop();
}

function saturnPlanet(){
  push();
  translate(centerX, centerY);
  rotate(saturn.angle);
  saturn.angle = saturn.angle + saturn.speed;
  ellipse(saturn.radius, 0, 20, 20);
  pop();
}
function uranusPlanet(){
  push();
  translate(centerX, centerY);
  rotate(uranus.angle);
  uranus.angle = uranus.angle + uranus.speed;
  ellipse(uranus.radius, 0, 20, 20);
  pop();
}

function neptunePlanet(){
  push();
  translate(centerX, centerY);
  rotate(neptune.angle);
  neptune.angle = neptune.angle + neptune.speed;
  ellipse(neptune.radius, 0, 20, 20);
  pop();
}

function plutoPlanet(){
  push();
  translate(centerX, centerY);
  rotate(pluto.angle);
  pluto.angle = pluto.angle + pluto.speed;
  ellipse(pluto.radius, 0, 20, 20);
  pop();
}

function move(){
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;

  shootingStar.x = shootingStar.x + shootingStar.vx;
  shootingStar.y = shootingStar.y + shootingStar.vy;

  if(shootingStar.y < 0 || shootingStar.y >1080){
    shootingStar.y = 1080;
  }

  shootingStar.x  = constrain(shootingStar.x , 0, width);
  shootingStar.y  = constrain(shootingStar.y , 0, width);


}

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
  if(d < user.size/2 -100 + shootingStar.size/2 -100){
    state = `dead`;
  }
}


function display(){
  image(user.image, user.x, user.y, user.size, user.size);
  ellipse(shootingStar.x, shootingStar.y, 20, 20);
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
