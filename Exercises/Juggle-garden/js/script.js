/**
Exercise #5
Juggle-Garden
Ines Pioselli

Brief:
1. Add another form of user control
2. add a new class and objects
3. add at least 2 endings

*/

"use strict";

let user;

let tree = {

  size:500,

}

let flowers = {

  y:500,
  x:500,
  size:1000,
}

let branch1;

let branch2;

let branch3;

let acorns = [];

let numAcorns = 10;

let gravityForce = 0.0025;

let acornsFallen = 0;

let bg = {
  r:77,
  g:181,
  b: 219
};

let state = `start`;

let cuteFont;

//image used for the array of acorns
let acornImg = undefined;


/**
Description of preload
*/
function preload() {
tree.image = loadImage("assets/images/tree.png");
flowers.image = loadImage("assets/images/flowers.png");
cuteFont = loadFont(`assets/fonts/HashedBrowns-WyJgn.otf`);
acornImg = loadImage("assets/images/acorn.png");
}


/**
Description of setup
*/
function setup() {
  createCanvas(1920, 1080);

  branch1 = new Branch1(300, 30); //parameters x, y
  branch2 = new Branch2(350, 30, random(0, width), random(0, height));
  branch3 = new Branch2(370, 30, random(0, width), random(0, height));


  for ( let i=0; i<numAcorns; i++){
    let x = random(0, width);
    let y = random(-400,-100);
    let acorn = new Acorn(x, y, acornImg);
    acorns.push(acorn);
  }


}


/**
Description of draw()
*/
function draw() {
if(state === `start`){
  start();
}
else if(state === `simulation`){
  simulation();
}

else if (state === `winner`){
  winner();
}

else if(state === `dead`){
  dead();
}



}

function start(){
  push();
  textFont(cuteFont);
  textAlign(CENTER, CENTER);
  imageMode(CENTER, CENTER);
  fill(202, 65, 129);
  textSize(60);
  image(flowers.image, 1920/2, 1080/2, 1920, 1080);
  text(`Tree Simulation!`, width/2, height/2 - 400);
  textSize(50);

  text(`Try Bounce all the acorns off the branches!`, width/2 , height/2 -200 );
  text(`Try to bounce as many as you can before the timer runs out!`, width/2, height/2 -100);
  text(`Press ENTER to begin!`, width/2, height/2);
  text(`And use the left and arrow keys to move the main branch!`, width/2, height/2 + 100);



  pop();

}

function dead(){
  background(255);
}

function winner(){
  background(234);
}

function simulation(){
  imageMode(CENTER, CENTER);
  image(tree.image, width/2, height/2, 1920, 1080);
  //background(bg.r, bg.g, bg.b);


  branch1.move();
  branch1.display();
  branch2.display();
  branch3.display();

  let numActiveAcorns = 0;

  for (let i =0; i< acorns.length; i++){
      let acorn = acorns[i];

      if(acorn.active){
        numActiveAcorns++;
        acorn.gravity(gravityForce);
        acorn.move();
        acorn.bounce(branch1);
        acorn.bounce(branch2);
        acorn.bounce(branch3);
        acorn.display();

        }


      }

      if(numActiveAcorns === 0){
        state = `dead`;
      }



    }

function keyPressed() {
  if (keyCode === 13) {
    if (state === `start`) {
      state = `simulation`;
    }
  }

}
