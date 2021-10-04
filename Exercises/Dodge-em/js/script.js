
//Dodge Em
//Ines Pioselli

let bg ={
  r: 41,
  g: 29,
  b: 105

}
let s = 'RIP';
let s2= 'Better luck next time';

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
  size: 300,
  vx:0,
  vy:0,
  ax: 0,
  ay:0,
  acceleration: 0.25,
  maxSpeed: 5,
  image:undefined
}

let circle1 ={
  x: 0,
  y: 255,
  size: 100,
  speed: 5

}


function preload() {

  user.image = loadImage("assets/images/cryingebichu.png");
  problem1.image= loadImage("assets/images/knife.png");
  myFont = loadFont('assets/DebugFreeTrial-MVdYB.otf');


}



function setup() {
    createCanvas(windowWidth, windowHeight);

    problem1.y = random(0, height);
    problem1.vx = problem1.speed;
    textFont(myFont);
    textSize(100);


}

//draw function
function draw() {

  background(bg.r, bg.g, bg.b);

//changes the colour of the background as the user moves across the page
  if (user.x < width/2){
      background(22, 34, 54);
    }
    else if (mouseX < 2 * width/3){
      background(68, 68, 90)
    }
    else{
      background(bg.r, bg.g, bg.b);
    }

  //add sparkling effect
  for (let i = 0; i <1000; i++){
    let x = random(0, width);
    let y = random(0, height);
    stroke(400);
    //fill(217, 199, 37);
    point(x, y);

}

w

if(problem1.x > width){
  problem1.x = 0;
  problem1.y = random(0, height);
}





problem1.x = problem1.x + problem1.vx;
problem1.y = problem1.y + problem1.vy;

//loop to change the origin of the knife


// allows the user to move with the mouse movements
if(mouseX < user.x) {
  user.ax = -user.acceleration;
}
else {
  user.ax = user.acceleration;
}

if(mouseY < user.y){
  user.ay = -user.acceleration;
}
else{
  user.ay = user.acceleration;
}

user.vx= user.vx + user.ax;
user.vx = constrain(user.vx, -user.maxSpeed, user.maxSpeed);
user.vy= user.vy + user.ay;
user.vy = constrain(user.vy, -user.maxSpeed, user.maxSpeed);

user.x = user.x + user.vx;
user.y = user.y + user.vy;

//stops everything if the user touches problem 1s
let d = dist(user.x, user.y, problem1.x, problem1.y);
if (d < problem1.size/2 + user.size/2) {
  user.size = user.size - 100 ;
  }
  if(user.size < 50){

      noLoop();
        text(s, 200, 200);
        text(s2, 500, 600);
  }


  imageMode(CENTER);
  image(problem1.image, problem1.x, problem1.y, problem1.size, problem1.size);
  image(user.image, user.x, user.y, user.size, user.size);
//  ellipse(circle1.x, circle1.y, circle1.size);

}
