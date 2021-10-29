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

let branch4;

let acorns = [];

let numAcorns = 10;

let gravityForce = 0.0025;

let acornsFallen = 0;


let state = `start`; //the exercise starts with the start state

let cuteFont;

//image used for the array of acorns
let acornImg = undefined;

let squirrel = {
  x: 500,
  y:500,
  size: 1000,
}

let win = {
  x: 500,
  y:500,
  size:100,
}

let acornTimer = 1000;
let acornTimerDone = false;


/**
Description of preload
*/
function preload() {
tree.image = loadImage("assets/images/tree.png");
flowers.image = loadImage("assets/images/flowers.png");
cuteFont = loadFont(`assets/fonts/HashedBrowns-WyJgn.otf`);
acornImg = loadImage("assets/images/acorn.png");
squirrel.image = loadImage("assets/images/squirrel.png");
win.image = loadImage("assets/images/winner.png");
}


/**
Description of setup
*/
function setup() {
  createCanvas(1920, 1080);

  branch1 = new Branch1(300, 30); //parameters x, y
  branch2 = new Branch2(350, 30, random(0, width), random(0, height));
  branch3 = new Branch3(370, 30, random(0, width), random(0, height));
  branch4 = new Branch4(390, 30, random(0, width), random(0, height));


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

else if(state === `gameover`){
  gameover();
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

function gameover(){
  push();
  textFont(cuteFont);
  textAlign(CENTER, CENTER);
  imageMode(CENTER, CENTER);
  fill(202, 65, 129);
  textSize(60);
  image(squirrel.image, 1920/2, 1080/2, 1920, 1080);
  text(`Rip! The squirrel stole all the acorns!`, width/2, height/2 + 350);


  pop();
}

function winner(){

  push();
  textFont(cuteFont);
  textAlign(CENTER, CENTER);
  imageMode(CENTER, CENTER);
  fill(255, 222, 0);
  textSize(60);
  image(win.image, 1920/2, 1080/2, 1920, 1080);
  text(`YAY you made it!`, width/2, height/2 +400);
  pop();

}


//simulation state
// draws the canvas and displays all the elements in the simulation
function simulation(){
  imageMode(CENTER, CENTER);
  image(tree.image, width/2, height/2, 1920, 1080);


  branch1.move();
  branch1.display(); //displays the main moving branch
  branch2.display(); // displays the second branch
  branch3.display(); //displays the third branch
  branch4.display(); //displays the 4th branch

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
        acorn.bounce(branch4);
        acorn.display();

        }
      }

      //if the active number of acorns is equal to 0 then the gameover state is called
      if(numActiveAcorns === 0){
        state = `gameover`;
      }

      //timer starts at 1000 and goes down by 1
      acornTimer -= 1;
      if(acornTimer <= 0){
        acornTimerDone = true;
      }

      if(acornTimerDone){
        state = 'winner'; // when the timer is less than 0 then the winner state is called
      }



    }

function keyPressed() {
  if (keyCode === 13) {
    if (state === `start`) {
      state = `simulation`; // when you press enter on the start state then the simulation state is called
    }
  }

}
