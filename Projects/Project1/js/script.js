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
  size: 100,

}

let user = {
  x:50,
  y:50,
  size:120,
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
  size:70,
  vx:0,
  vy:0,
  speed:5
};

let venus= {
  x:0,
  y:0,
  size:70,
  vx:0,
  vy:0,
  speed:5

};

let earth= {
  x:0,
  y:0,
  size:90,
  vx:0,
  vy:0,
  speed:5

};

let mars= {
  x:0,
  y:0,
  size:100,
  vx:0,
  vy:0,
  speed:5

};

let jupiter= {
  x:0,
  y:0,
  size:150,
  vx:0,
  vy:0,
  speed:5

};

let saturn= {
  x:0,
  y:0,
  size:180,
  vx:0,
  vy:0,
  speed:5

};

let uranus= {
  x:0,
  y:0,
  size:150,
  vx:0,
  vy:0,
  speed:5

};

let neptune= {
  x:0,
  y:0,
  size:180,
  vx:0,
  vy:0,
  speed:5

};



let moon = {
  x:0,
  y:0,
  size:170,
  vx:0,
  vy:0,
  speed:5
}

let sunState = {
  size:500,
}

let uranusState = {
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
//pluto.image = loadImage("assets/images/Pluto.png");
moon.image = loadImage("assets/images/moon.png");



//display the images for each state
sunState.image = loadImage("assets/images/sunState.png");
dead.image = loadImage("assets/images/dead.png");
//mercuryState =loadImage("assets/images/mercuryState.png");
//venusState =loadImage("assets/images/venusState.png");
//earthState =loadImage("assets/images/earthState.png");
//marsState =loadImage("assets/images/marsState.png");
//jupiterState =loadImage("assets/images/jupiterState.png");
//saturnState =loadImage("assets/images/saturnState.png");
uranusState.image =loadImage("assets/images/uranusState.png");
//neptuneState =loadImage("assets/images/neptuneState.png");
//moonState =loadImage("assets/images/moonState.png");

}

let state = `title`; //launches the title screen


function setup() {
  createCanvas(900, 900);
  setupPlanets();


}

function setupPlanets(){
user.x = random(0,width);
user.y = random(0,height);

shootingStar.x = random(0,width);
shootingStar.y = random(0, height);

shootingStar.vx = random(-shootingStar.speed, shootingStar.speed);
shootingStar.vy = random(-shootingStar.speed, shootingStar.speed);

user.vx = random(-user.speed, user.speed);
user.vy = random(-user.speed, user.speed);

//planet mercury
mercury.x = random(0,width);
mercury.y = random(0, height);

mercury.vx = random(-mercury.speed, mercury.speed);
mercury.vy = random(-mercury.speed, mercury.speed);

//planet venus
venus.x = random(0,width);
venus.y = random(0, height);

venus.vx = random(-venus.speed, venus.speed);
venus.vy = random(-venus.speed, venus.speed);

//planet earth
earth.x = random(0,width);
earth.y = random(0, height);

earth.vx = random(-earth.speed, earth.speed);
earth.vy = random(-earth.speed, earth.speed);

//planet mars
mars.x = random(0,width);
mars.y = random(0, height);

mars.vx = random(-mars.speed, mars.speed);
mars.vy = random(-mars.speed, mars.speed);

//planet jupiter
jupiter.x = random(0,width);
jupiter.y = random(0, height);

jupiter.vx = random(-jupiter.speed, jupiter.speed);
jupiter.vy = random(-jupiter.speed,jupiter.speed);

//planet saturn
saturn.x = random(0,width);
saturn.y = random(0, height);

saturn.vx = random(-saturn.speed, saturn.speed);
saturn.vy = random(-saturn.speed, saturn.speed);

//planet uranus
uranus.x = random(0,width);
uranus.y = random(0, height);

uranus.vx = random(-uranus.speed, uranus.speed);
uranus.vy = random(-uranus.speed, uranus.speed);

//planet neptune
neptune.x = random(0, width);
neptune.y = random(0, height);

neptune.vx = random(-neptune.speed, neptune.speed);
neptune.vy = random(-neptune.speed, neptune.speed);

//planet moon
moon.x = random(0,width);
moon.y = random(0, height);

moon.vx = random(-moon.speed, moon.speed);
moon.vy = random(-moon.speed, moon.speed);




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
  else if(state===`learnSun`){
    learnSun();
  }
  else if(state ===`learnMercury`){
    learnMercury();
  }
  else if(state ===`learnVenus`){
    learnVenus();
  }
  else if(state ===`learnEarth`){
    learnEarth();
  }
    else if (state ===`learnMars`){
    learnMars();
  }
  else if (state ===`learnJupiter`){
    learnJupiter();
  }
  else if (state ===`learnSaturn`){
    learnSaturn();
  }
  else if (state ===`learnUranus`){
    learnUranus();
  }
  else if (state ===`learnNeptune`){
    learnNeptune();
  }
  else if (state ===`learnMoon`){
    learnMoon();
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
  moonSetup();
}


//---------------------------------------------------------------------------------
//functions for each state
//---------------------------------------------------------------------------------
function title(){
  push();
  image(user.image, width/2, height/2, user.size*5, user.size*5);
  pop();
  textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255, 255, 255);
  text(`Bunny Space Astrology Simulator`, width/2, height/2-300);
  push();
  textSize(60);
  text(`Press the spacebar to start!`, width/2, height/2+255);
  textSize(40);
  text(`Press R to go back to the simulation `, width/2, height/2+315);
  text(`use the arrow keys to navigate`, width/2, height/2+365);
  pop();


}

function simulation(){
  displayPlanets();
  display();
  userInput();
  move();
  checkShootingStar();
  checkSun();
  checkMercury();
  checkVenus();
  checkEarth();
  checkMars();
  checkJupiter();
  checkSaturn();
  checkUranus();
  checkNeptune();
  checkMoon();
  orbits();
}

function dead(){
  textFont(myFont);
  image(dead.image,width/2, height/2, 900, 900)
}

function learnSun(){
  textFont(myFont);


  image(sunState.image, width/2, height/2, 900, 900);
}

function learnMars(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`mars`, width/2, height/2);
}

function learnVenus(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`venus`, width/2, height/2);
}

function learnEarth(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`earth`, width/2, height/2);
}

function learnMercury(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`mercury`, width/2, height/2);
}

function learnJupiter(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`jupiter`, width/2, height/2);
}

function learnSaturn(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`saturn`, width/2, height/2);
}

function learnUranus(){


  image(uranusState.image,width/2, height/2, 900, 900);
}

function learnNeptune(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`neptune`, width/2, height/2);
}

function learnMoon(){
  textFont(myFont);

  textSize(40);
  fill(200, 200, 200);
  text(`moon`, width/2, height/2);
}

//----------------------------------------------------------------------------------

function sunStar(){
  image(sun.image, sun.x, sun.y, sun.size, sun.size);


}

//------------------------------------------------------------------------------------
//check for overlaps between the planets and the user
//-----------------------------------------------------------------------------------

function checkSun(){
  let d = dist(user.x, user.y, sun.x, sun.y);
  if(d<user.size/2 -20 + sun.size/2-20){
    state = `learnSun`;
    user.x = random(0,width);
    user.y = random(0,height);
  }
}


function checkMars(){
  let d = dist(user.x, user.y, mars.x, mars.y);
  if(d < user.size/2-20  + mars.size/2-20 ){
    user.x = random(0,width);
    user.y = random(0,height);
    state = `learnMars`;
  }
}

function checkVenus(){
  let d = dist(user.x, user.y, venus.x, venus.y);
  if(d < user.size/2-20  + venus.size/2-20 ){
    user.x = random(0,width);
    user.y = random(0,height);
    state = `learnVenus`;
  }
}

function checkEarth(){
  let d = dist(user.x, user.y, earth.x, earth.y);
  if(d < user.size/2-20  + earth.size/2-20 ){
    user.x = random(0,width);
    user.y = random(0,height);
    state = `learnEarth`;
  }
}



function checkMercury(){
  let d = dist(user.x, user.y, mercury.x, mercury.y);
  if(d < user.size/2  + mercury.size/2 ){
    user.x = random(0,width);
    user.y = random(0,height);
  state = `learnMercury`;
  }
}

function checkJupiter(){
  let d = dist(user.x, user.y, jupiter.x, jupiter.y);
  if(d < user.size/2-20 + jupiter.size/2-20 ){
    user.x = random(0,width);
    user.y = random(0,height);
  state = `learnJupiter`;
  }
}

function checkSaturn(){
  let d = dist(user.x, user.y, saturn.x, saturn.y);
  if(d < user.size/2  + saturn.size/2 ){
    user.x = random(0,width);
    user.y = random(0,height);
  state = `learnSaturn`;
  }
}


function checkUranus(){
  let d = dist(user.x, user.y, uranus.x, uranus.y);
  if(d < user.size/2  + uranus.size/2 ){
    user.x = random(0,width);
    user.y = random(0,height);
  state = `learnUranus`;
  }
}

function checkNeptune(){
  let d = dist(user.x, user.y, neptune.x, neptune.y);
  if(d < user.size/2  + neptune.size/2 ){
    user.x = random(0,width);
    user.y = random(0,height);
  state = `learnNeptune`;
  }
}

function checkMoon(){
  let d = dist(user.x, user.y, moon.x, moon.y);
  if(d < user.size/2  + moon.size/2 ){
    user.x = random(0,width);
    user.y = random(0,height);
  state = `learnMoon`;
  }
}



function checkShootingStar(){
  let d = dist(user.x, user.y, shootingStar.x, shootingStar.y);
  if(d < user.size/2 -20 + shootingStar.size/2 -20){
    user.x = random(0,width);
    user.y = random(0,height);
    state = `dead`;
  }
}

//-------------------------------------------------------------------------------

//----------------------------------------------------------------------------------
//function to set up the speed of the planets
//----------------------------------------------------------------------------------

function mercuryPlanet(){

  mercury.x = mercury.x + mercury.vx;
  mercury.y = mercury.y + mercury.vy;


  mercury.x  = constrain(mercury.x , 0, width);
  mercury.y  = constrain(mercury.y , 0, height);

  //make the star bounce off the walls of the simulation
  if(mercury.x >= width || mercury.x <= 0){
    mercury.vx = -mercury.vx;
  }
  if(mercury.y >= height || mercury.y <= 0){
    mercury.vy = -mercury.vy;
  }
}

function venusPlanet(){
  venus.x = venus.x + venus.vx;
  venus.y = venus.y + venus.vy;


  venus.x  = constrain(venus.x , 0, width);
  venus.y  = constrain(venus.y , 0, width);

  //make the star bounce off the walls of the simulation
  if(venus.x >= width || venus.x <= 0){
    venus.vx = -venus.vx;
  }
  if(venus.y >= height || venus.y <= 0){
    venus.vy = -venus.vy;
  }
}

function earthPlanet(){
  earth.x = earth.x + earth.vx;
  earth.y = earth.y + earth.vy;


  earth.x  = constrain(earth.x , 0, width);
  earth.y  = constrain(earth.y , 0, width);

  //make the star bounce off the walls of the simulation
  if(earth.x >= width || earth.x <= 0){
    earth.vx = -earth.vx;
  }
  if(earth.y >= height || earth.y <= 0){
    earth.vy = -earth.vy;
  }


}


function marsPlanet(){

  mars.x = mars.x + mars.vx;
  mars.y = mars.y + mars.vy;


  mars.x  = constrain(mars.x , 0, width);
  mars.y  = constrain(mars.y , 0, width);

  //make the star bounce off the walls of the simulation
  if(mars.x >= width || mars.x <= 0){
    mars.vx = -mars.vx;
  }
  if(mars.y >= height || mars.y <= 0){
    mars.vy = -mars.vy;
  }

}


function jupiterPlanet(){
  jupiter.x = jupiter.x + jupiter.vx;
  jupiter.y = jupiter.y + jupiter.vy

  jupiter.x  = constrain(jupiter.x , 0, width);
  jupiter.y  = constrain(jupiter.y , 0, height);

  //make the star bounce off the walls of the simulation
  if(jupiter.x >= width || jupiter.x <= 0){
    jupiter.vx = -jupiter.vx;
  }
  if(jupiter.y >= height || jupiter.y <= 0){
    jupiter.vy = -jupiter.vy;
  }

}

function saturnPlanet(){
  saturn.x = saturn.x + saturn.vx;
  saturn.y = saturn.y + saturn.vy;


  saturn.x  = constrain(saturn.x , 0, width);
  saturn.y  = constrain(saturn.y , 0, height);

  //make the star bounce off the walls of the simulation
  if(saturn.x >= width || saturn.x <= 0){
    saturn.vx = -saturn.vx;
  }
  if(saturn.y >= height || saturn.y <= 0){
  saturn.vy = -saturn.vy;
  }
}


function uranusPlanet(){
  uranus.x = uranus.x + uranus.vx;
  uranus.y = uranus.y + uranus.vy;


  uranus.x  = constrain(uranus.x , 0, width);
  uranus.y  = constrain(uranus.y , 0, width);

  //make the star bounce off the walls of the simulation
  if(uranus.x >= width || uranus.x <= 0){
    uranus.vx = -uranus.vx;
  }
  if(uranus.y >= height || uranus.y <= 0){
    uranus.vy = -uranus.vy;
  }
}

function neptunePlanet(){
  neptune.x = neptune.x + neptune.vx;
  neptune.y = neptune.y + neptune.vy;


  neptune.x  = constrain(neptune.x , 0, width);
  neptune.y  = constrain(neptune.y , 0, height);

  //make the star bounce off the walls of the simulation
  if(neptune.x >= width ||neptune.x <= 0){
  neptune.vx = -neptune.vx;
  }
  if(neptune.y >= height ||neptune.y <= 0){
  neptune.vy = -neptune.vy;
  }
}

function moonSetup(){
  moon.x = moon.x + moon.vx;
  moon.y = moon.y + moon.vy;


  moon.x  = constrain(moon.x , 0, width);
  moon.y  = constrain(moon.y , 0, width);

  //make the star bounce off the walls of the simulation
  if(moon.x >= width || moon.x <= 0){
    moon.vx = -moon.vx;
  }
  if(moon.y >= height || moon.y <= 0){
    moon.vy = -moon.vy;
  }
}

function orbits(){

  let planets = 10;
  for (let i =0; i<planets; i++){

    let diameter =((planets -i)*85);

    push();
    strokeWeight(6);
    stroke(255,255,255,30);
    noFill();
    ellipse(centerX,centerY, diameter, diameter);
    pop();

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






function display(){
  image(user.image, user.x, user.y, user.size, user.size);
  image(shootingStar.image, shootingStar.x, shootingStar.y, shootingStar.size, shootingStar.size);
  image(mercury.image,mercury.x, mercury.y, mercury.size, mercury.size);
  image(venus.image,venus.x, venus.y, venus.size, venus.size);
  image(earth.image,earth.x, earth.y, earth.size, earth.size);
  image(mars.image,mars.x, mars.y, mars.size, mars.size);
  image(jupiter.image,jupiter.x, jupiter.y, jupiter.size, jupiter.size);
  image(saturn.image,saturn.x, saturn.y, saturn.size, saturn.size);
  image(uranus.image,uranus.x, uranus.y, uranus.size, uranus.size);
  image(neptune.image,neptune.x, neptune.y, neptune.size, neptune.size);
  image(moon.image,moon.x, moon.y, moon.size, moon.size);

}

function keyPressed(){
  if(keyCode === 32){
    if(state ===`title`){
      state = `simulation`;
    }
  }
  if(keyCode === 82){
    if(state != `simulation` && state != `dead`){
      state = `simulation`;

    }
  }

  if(keyCode === 32){
    if(state ===`dead`){
      state =`title`;
    }
  }
}
