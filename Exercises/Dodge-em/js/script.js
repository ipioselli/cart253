
//Dodge Em
//Ines Pioselli

let bg ={
  r: 41,
  g: 29,
  b: 105

}

let problem1 = {
  x: 250,
  y: 250,
  size: 200,
  vx:0,
  vy:0,
  ax: 0,
  ay:0,
  acceleration: 0.25,
  speed: 10,
  maxSpeed: 5,
  image:undefined
};

let user = {
  x: 250,
  y:250,
  size: 200,
  image:undefined
}


function preload() {

  user.image = loadImage("assets/images/cryingebichu.png");
  problem1.image= loadImage("assets/images/knife.png");

}



function setup() {
    createCanvas(windowWidth, windowHeight);

    problem1.y = random(0, height);
    problem1.vx = problem1.speed;
}

//draw function
function draw() {

  background(bg.r, bg.g, bg.b);

  //add sparkling effect
  for (let i = 0; i <1000; i++){
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);

}
if(problem1.x > width){
  problem1.x = 0;
  problem1.y = random(0, height);
  //problem.size = random(0, 500);
}

/** if(mouseX < problem1.x) {
  problem1.ax = -problem1.acceleration;
}
else {
  problem1.ax = problem1.acceleration;
}

if(mouseY < problem1.y){
  problem1.ay = -problem1.acceleration;
}
else{
  problem1.ay = problem1.acceleration;
}

problem1.vx= problem1.vx + problem1.ax;
problem1.vx = constrain(problem1.vx, -problem1.maxSpeed, problem1.maxSpeed);
problem1.vy= problem1.vy + problem1.ay;
problem1.vy = constrain(problem1.vy, -problem1.maxSpeed, problem1.maxSpeed);
**/


problem1.x = problem1.x + problem1.vx;
problem1.y = problem1.y + problem1.vy;

//loop to change the origin of the knife


// allows the user to move with the mouse movements
user.x = mouseX;
user.y = mouseY;

let d = dist(user.x, user.y, problem1.x, problem1.y);
if (d < problem1.size/2 + user.size/2) {
    noLoop();
  }

  imageMode(CENTER);
  image(problem1.image, problem1.x, problem1.y, problem1.size, problem1.size);
  image(user.image, user.x, user.y, user.size, user.size);
}
