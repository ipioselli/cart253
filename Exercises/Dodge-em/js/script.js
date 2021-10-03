
//Dodge Em
//Ines Pioselli

let bg ={
  r: 41,
  g: 29,
  b: 105

}

let problem1 = {
  x: 0,
  y: 250,
  size: 100,
  vx:0,
  vy:0,
  speed: 5,
  image:undefined
}

let user = {
  x: 250,
  y:250,
  size: 150,
  image:undefined
}


function preload() {

  user.image = loadImaeg("assets/images/cryingebichu.png");
  problem1.image= loadImage("assets/images/knife.png");

}



function setup() {
    createCanvas(windowWidth, windowHeight);
    problem1.y = random(0, height);
    //problem1.size = random();
    problem1.vx = problem1.speed;
}


/**
Description of draw()
*/
function draw() {
  background(bg.r, bg.g, bg.b);

  for (let i = 0; i <1000; i++){
    let x = random(0, width);
    let y = random(0, height);
    point(x, y);

}
