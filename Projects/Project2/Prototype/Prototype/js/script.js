/**
Project 2 Prototype
Long Leg Fishy Dating Simulator
Ines Pioselli


*/

"use strict";

let tutorialButton = {
  x:150,
  y:750,
  size:200,
}


//image for the title state
let titleScreen = {
  x:400,
  y:400,
  size:800,
}

let page1Background = {
  x:400,
  y:400,
  size:800,
}


let state = `title`; // the prototype starts with the title state

let tutorialFont;
let titleMusic;

/**
Description of preload
*/
function preload() {
  titleScreen.image = loadImage("assets/images/titleScreen.png");
  tutorialButton.image = loadImage("assets/images/tutorialButton.png");
  page1Background.image = loadImage("assets/images/page01.png");
  tutorialFont = loadFont(`assets/fonts/Blackberries.otf`);
  titleMusic = loadSound(`assets/sounds/Brasil.mp3`);


}


/**
Description of setup
*/
function setup() {
  createCanvas(800, 800);
  //titleMusic.play();

}


/**
Description of draw()
*/
function draw() {
  if(state === `title`){
    title();
  }
  else if(state === `tutorial`){
    tutorial();
  }
  else if(state === `page01`){
    page01();
  }

}

function title(){
  imageMode(CENTER, CENTER);
  image(titleScreen.image, titleScreen.x, titleScreen.y, titleScreen.size, titleScreen.size);
  displayTutorialButton();
  checkTutorialButtonClicked();

  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 255, 255);
  text(`Press ENTER to start!`, width / 2 + 50, height / 2+350);

  pop();

}


//When you hover over the tutorial button it will bring you to the tutorial state
function tutorial(){
  push();
  background(64, 175, 222);
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(255, 255, 255);
  text(`Long Leg Fish Love Story!`, width / 2, height / 2-300);
  textSize(35);
  text(`You are a lovely fish who has just started their first day of college.`, width / 2, height / 2-200);
  text(`You are asked to join clubs and meet new fish.`, width / 2, height / 2-150);
  text(`However, you encounter 2 love interests and must make a hard decision` ,width / 2, height / 2-100);
  text(`and choose one of them do date!` ,width / 2, height / 2-50);
  text(`Be careful though, you can end up with none of them`, width / 2, height / 2-0);
  text(`if you don't play your cards right!`, width / 2, height / 2 + 50);

  textSize(50);
  fill(24, 79, 102);
  text(`Press "Back" to go back to the homepage!` ,width / 2, height / 2 + 150);
  pop();
}


function page01(){
  push();
  image(page1Background.image, page1Background.x, page1Background.y, page1Background.size, page1Background.size);
  pop();
}

function displayTutorialButton(){
  image(tutorialButton.image, tutorialButton.x, tutorialButton.y, tutorialButton.size, tutorialButton.size);

}


//hover your mouse over the tutorial button to access it
function checkTutorialButtonClicked(){
  let d = dist(mouseX, mouseY, tutorialButton.x, tutorialButton.y );
  if (d <tutorialButton.size /2 - 60){
    state = `tutorial`;
  }
}

function keyPressed(){
  if (keyCode === 13){ //if you press enter
    state = `page01`;
  }
  if (keyCode === 8){ // if you
    state = `title`;
  }
}
