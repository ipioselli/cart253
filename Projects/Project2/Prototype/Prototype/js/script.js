/**
Project 2 Prototype
Long Leg Fishy Dating Simulator
Ines Pioselli

This is a prototype of my love simulator. The first few states show examples of how the style will look.
The minigame is a very rough and samll scale of what will happen. The user will have an array of balls bouncing around and they must doge them and
get to their fish lover to win their heart back. For now I just used 3 ellipses to show what will happen.


*/

"use strict";

let tutorialButton = { // button to access the tutorial state
  x:150,
  y:750,
  size:200,
}

let nextButton = { // button to access the first page of the game
  x:600,
  y:750,
  size:100,
}


//image for the title state
let titleScreen = {
  x:400,
  y:400,
  size:800,
}

//image for the first page
let page1Background = {
  x:400,
  y:400,
  size:800,
}


//image for the 2nd page
let page2Background = {
  x:400,
  y:400,
  size:800,
}

let gymClass = {
  x:400,
  y:400,
  size:800,
}


//minigame variables
let user;
let lover;
let ball;


let state = `title`; // the prototype starts with the title state

let tutorialFont;

/**
Description of preload
*/
function preload() {
  titleScreen.image = loadImage("assets/images/titleScreen.png");
  tutorialButton.image = loadImage("assets/images/tutorialButton.png");
  nextButton.image = loadImage("assets/images/nextButton.png");
  page1Background.image = loadImage("assets/images/page01.png");
  page2Background.image = loadImage("assets/images/page02.png");
  gymClass.image = loadImage("assets/images/gymClass.png");
  tutorialFont = loadFont(`assets/fonts/Blackberries.otf`);
  titleMusic = loadSound(`assets/sounds/Brasil.mp3`);


}


/**
Description of setup
*/
function setup() {
  createCanvas(800, 800);

  //creates each class
  user = new User(random(0, width), random(0, height)); // random x and y position
  lover = new Lover(random(0, width), random(0, height)); // random x and y position
  ball = new Ball(random(0, width), random(0, height)); // random x and y position

  //random speed for the fish lover
  lover.vx = random(-lover.speed, lover.speed);
  lover.vy = random(-lover.speed, lover.speed);

  //random speed for the ball
  ball.vx = random(-ball.speed, ball.speed);
  ball.vy = random(-ball.speed, ball.speed);

}


//Draws all the states for the game
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
  else if(state === `page02`){
    page02();
  }
  else if(state === `end`){
    end();
  }
  else if(state === `minigame1`){
    minigame1();
  }
  else if(state === `happyEnding`){
    happyEnding();
  }
  else if(state === `sadEnding`){
    sadEnding();
  }

}


//title state : homepage
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


//displays the first page with the main character
function page01(){


  imageMode(CENTER, CENTER);
  image(page1Background.image, page1Background.x, page1Background.y, page1Background.size, page1Background.size);
  checkNextButtonClicked()
  displayNextButton()
  push();

  //text box for page 1
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`It's your first day of art school and you are very excited to start!`, width/2, height/2 +210);
  text(`You really want to join a club but not sure which one.`, width/2, height/2 +250);
  text(`While you look around you see 2 tall mysterious fish `, width/2, height/2 +290);
  text(`approach you!`, width/2, height/2 +330);

  pop();
}

//displays the second page with the 2 love interests
function page02(){
  imageMode(CENTER, CENTER);
  image(page2Background.image, page2Background.x, page2Background.y, page2Background.size, page2Background.size);

  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`Orange fish: Hi there! My name is Jake! want to join the `, width/2, height/2 +210);
  text(`photography club? `, width/2, height/2 +250);
  text(`White fish: Don't listen to him. My name is Edward and you`, width/2, height/2 + 290);
  text(`should join the music club!`, width/2, height/2 + 330);
  text(`A. Join the music club     B.Join the photography club`, width/2, height/2 +360);
  pop();
}


//if you select B. photography club you will end up on this state
function end(){
  background(99, 145, 186);
  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(45);
  fill(255, 255, 255);
  text(`For now this is the end but will add more for the final :3`, width/2, height/2);

  pop();
}


//if you select A. The music club you will end up on this state
function minigame1(){
  imageMode(CENTER, CENTER);
  image(gymClass.image, gymClass.x, gymClass.y, gymClass.size, gymClass.size);
  user.move();
  user.display();
  user.handleInput();
  user.checkHit(lover);
  user.checkHitBall(ball);
  ball.move();
  ball.display();
  lover.move();
  lover.display();

  if(!user.foundLover){
    state = `happyEnding`;
  }
  if(!user.ballHit){
   state = `sadEnding`;
   }


}


//happy ending for the minigame
function happyEnding(){
  background(191, 66, 245);

  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`You fell in love with Edward and rode off into the sunset!`, width/2, height/2);
  pop();
}


//sad ending for the minigame
function sadEnding(){
  background(150, 116, 101);
  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`You ended up sad and alone :( `, width/2, height/2);
  pop();
}


//displays the tutorial button
function displayTutorialButton(){
  image(tutorialButton.image, tutorialButton.x, tutorialButton.y, tutorialButton.size, tutorialButton.size);

}


//displays next button
function displayNextButton(){
  image(nextButton.image, nextButton.x, nextButton.y, nextButton.size, nextButton.size);
}


//hover your mouse over the tutorial button to access it
function checkTutorialButtonClicked(){
  let d = dist(mouseX, mouseY, tutorialButton.x, tutorialButton.y );
  if (d <tutorialButton.size /2 - 60){
    state = `tutorial`;
  }
}

//hover over the nextButton to access the second page
function checkNextButtonClicked(){
  let d = dist(mouseX, mouseY, nextButton.x, nextButton.y );
  if (d <nextButton.size /2 - 20){
    state = `page02`;
  }
}


//keyboard input
function keyPressed(){
  if (keyCode === 13){ //keycode for ENTER
    state = `page01`;
  }
  if (keyCode === 8){ // keycode for backspace
    state = `title`;
  }
  if(state === `page02`){
    if(keyCode === 65){ // keycode for letter A
      state = `minigame1`;
    }
    else if(keyCode === 66){ //keycode for letter B
      state = `end`;
    }
  }

}
