/**
Project 2 Progress Report
Long Leg Fishy Dating Simulator
Ines Pioselli

This is a progress of my love simulator. The first few states show examples of how the style will look.
The minigame is a very rough and small scale of what will happen. The user will have an array of balls bouncing around and they must doge them and
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

//image for photography room
let photographyRoomBg = {
  x: 400,
  y: 400,
  size: 800,

}

//picture bg with Jake
let pictureTimeBg = {
  x: 400,
  y:400,
  size: 800,
}

//maze placeholder image
let maze = {
  x:400,
  y:400,
  size:800,
}


//minigame1 variables
let user;
let lover;
let ball;

//minigame2 variables
let user2;
let maze1;
let maze2;
let maze3;
let maze4;
let maze5;
let maze6;
let maze7;
let maze8;
let maze9;
let maze10;
let maze11;
let maze12;
let maze13;
let maze14;



let door1;
let door2;
let door3;


let state = `minigame2`; // the prototype starts with the start state

let tutorialFont;

let titleMusic;

//MADELINE ADDED CODE//

let typeWriterTime = 0;
let typeWriterSpeed = 65;
let typeWriterCursor = 0;
let typeWriterText = "";


let sentence03 = `This is the first time I see such a fine fish strolling around. \n Would you like me to take a picture of you ;) ? \nY. Yess \nN. uhh no kinda creepy`

//



function preload() {

  //load images
  titleScreen.image = loadImage("assets/images/titleScreen.png");
  tutorialButton.image = loadImage("assets/images/tutorialButton.png");
  nextButton.image = loadImage("assets/images/nextButton.png");
  page1Background.image = loadImage("assets/images/page01.png");
  page2Background.image = loadImage("assets/images/page02.png");
  gymClass.image = loadImage("assets/images/gymClass.png");
  photographyRoomBg.image = loadImage("assets/images/photographyRoom.png");
  pictureTimeBg.image = loadImage("assets/images/pictureTime.gif");
  maze.image = loadImage("assets/images/mazeTest.png");

  //load fonts
  tutorialFont = loadFont(`assets/fonts/Blackberries.otf`);

  //load music
  titleMusic = loadSound(`assets/sounds/Brasil.mp3`);



}



function setup() {
  createCanvas(800, 800);


  //creates each class
  user = new User(random(0, width), random(0, height)); // random x and y position
  lover = new Lover(random(0, width), random(0, height)); // random x and y position
  ball = new Ball(random(0, width), random(0, height)); // random x and y position

  //creates each class for minigame 2
  user2 = new User02(50, 50);

  //creates the walls for the maze
  maze1 = new Maze(160, 580, 200, 10); //(x, y, w, h)
  maze2 = new Maze(50, 410, 20, 560);
  maze3 = new Maze(350, 690, 620, 20);
  maze4 = new Maze(450, 100, 620, 20);
  maze5 = new Maze(250, 220, 10, 250);
  maze6 = new Maze(470, 210, 10, 200);
  maze7 = new Maze(250, 350, 220, 10);
  maze8 = new Maze(355, 450, 10, 200);
  maze9 = new Maze(630, 220, 140, 10);
  maze10 = new Maze(545, 470, 150, 10);
  maze11 = new Maze(680, 580, 170, 10);

  maze12 = new Maze(615, 350, 10, 250);
  maze13 = new Maze(550, 550, 10, 150);
  maze14 = new Maze(760, 380, 20, 580);


  //creates the doors for the ending states
  door1 = new Door(400, 180, 70, 110);
  door2 = new Door(690, 500, 70, 110);
  door3 = new Door(140, 490, 70, 110 );

  //random speed for the fish lover
  lover.vx = random(-lover.speed, lover.speed);
  lover.vy = random(-lover.speed, lover.speed);

  //random speed for the ball
  ball.vx = random(-ball.speed, ball.speed);
  ball.vy = random(-ball.speed, ball.speed);


}

//Draws all the states for the game
function draw() {

stateChange();


}

//creates all the states for the game
function stateChange(){

  if (state === `start`){
    start();
  }

  else if(state === `title`){
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
  else if (state === `photographyRoom`){
    photographyRoom();
}
  else if(state === `end`){
    end();
  }
  else if(state === `minigame1`){
    minigame1();
  }
  else if(state === `minigame2`){
    minigame2();
  }
  else if(state === `door01Outcome`){
    door01Outcome();
  }
  else if(state === `door02Outcome`){
    door02Outcome();
  }
  else if(state === `door03Outcome`){
    door03Outcome();
  }
  else if(state === `happyEnding`){
    happyEnding();
  }
  else if(state === `sadEnding`){
    sadEnding();
  }
  else if(state === `pictureTime`){
    pictureTime();
  }
  else if(state === `notPictureTime`){
    notPictureTime();
  }


}


//page before the title page
function start(){
  background(0);
  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 255, 255);
  text(`Welcome! Press spacebar`, width / 2, height / 2);
  pop();
}


//title state : homepage
function title(){

  imageMode(CENTER, CENTER);
  image(titleScreen.image, titleScreen.x, titleScreen.y, titleScreen.size, titleScreen.size);
  displayTutorialButton();


  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 255, 255);
  text(`Press ENTER to start!`, width / 2 + 50, height / 2+350);

  pop();

}


//When you click on the tutorial button it will bring you to the tutorial state
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
  text(`A. Join the music club     B.Join the photography club`, width/2, height/2 +355);
  pop();
}


//if you select B. photography club you will end up on this state
function photographyRoom(){
  imageMode(CENTER, CENTER);
  image(photographyRoomBg.image, photographyRoomBg.x, photographyRoomBg.y, photographyRoomBg.size, photographyRoomBg.size);


  push();

  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  drawTypeWriter(width / 2, height / 2 + 250);
  pop();
}

// if you say yes for a picture you will end up on the this state
function pictureTime(){
  imageMode(CENTER, CENTER);
  image(pictureTimeBg.image, pictureTimeBg.x, pictureTimeBg.y, pictureTimeBg.size, pictureTimeBg.size );

  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255, 255, 255);
  text(`You just took a picture with Jake! \nPress ENTER to see what happens next`,  width/2, height/2 + 330);
  pop();


}

function notPictureTime(){
  background(0);
  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255, 255, 255);
  text(`:( \n place holder for now`,  width/2, height/2 );
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

function minigame2(){
  //imageMode(CENTER, CENTER);
  //image(maze.image, maze.x, maze.y, maze.size, maze.size);
  background(49, 69, 122);

  user2.display();
  user2.move();
  user2.handleInput()
  user2.bounce(maze1);
  user2.bounce(maze2);
  user2.bounce(maze3);
  user2.bounce(maze4);
  user2.bounce(maze5);
  user2.bounce(maze6);
  user2.bounce(maze7);
  user2.bounce(maze8);
  user2.bounce(maze9);
  user2.bounce(maze10);
  user2.bounce(maze11);
  user2.bounce(maze12);
  user2.bounce(maze13);
  user2.bounce(maze14);

  user2.checkOpenedDoor01(door1);
  user2.checkOpenedDoor02(door2);
  user2.checkOpenedDoor03(door3);
  maze1.display();
  maze2.display();
  maze3.display();
  maze4.display();
  maze5.display();
  maze6.display();
  maze7.display();
  maze8.display();
  maze9.display();
  maze10.display();
  maze11.display();
  maze12.display();
  maze13.display();
  maze14.display();


  door1.display();
  door2.display();
  door3.display();


  // for(let x = 0; x < width; x += 10){
  //   for(let y = 0; y <height; y += 10){
  //     let d = dist(x, y, mouseX, mouseY);
  //     let c = map(d, 0, 100, 255, 0);
  //     //fill(c);
  //     //rect(x, y, 10, 10);
  //   }
  // }


  if(!user2.door01Opened){
    state = `door01Outcome`;
  }
  if(!user2.door02Opened){
    state = `door02Outcome`;
  }
  if(!user2.door03Opened){
    state = `door03Outcome`;
  }

}



function door01Outcome(){
  background(0);
  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`You are alone in the void :(`, width/2, height/2);
  pop();
}

function door02Outcome (){
  background(0);
  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`You found your soulmate!`, width/2, height/2);
  pop();
}

function door03Outcome(){
  background(0);
  push();
  textFont(tutorialFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`Wrong door :(`, width/2, height/2);
  pop();
}


//happy ending for the minigame1
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


//sad ending for the minigame1
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

//displays the next button
function displayNextButton(){
  image(nextButton.image, nextButton.x, nextButton.y, nextButton.size, nextButton.size);
}


//keyboard input
function keyPressed(){

  if(state === `start`){
    if(keyCode === 32){ // keycode for spacebar
      state = `title`
      titleMusic.loop();
    }
  }
  if(state === `title`){
    if (keyCode === 13){ //keycode for ENTER
      state = `page01`;
      if(titleMusic.isPlaying()){
        titleMusic.stop();
      }
    }
  }
  if (state === `tutorial`) {
    if (keyCode === 8) { // keycode for backspace
        state = `title`;
  }
}

  if(state === `page02`){
    if(keyCode === 65){ // keycode for letter A
      state = `minigame1`;
    }
    else if(keyCode === 66){ //keycode for letter B
      state = `photographyRoom`;
      startTypeWriter(sentence03);
    }
  }

    if(state=== `photographyRoom`){
      if(keyCode === 89){ //keycode for the letter Y
        state = `pictureTime`;
      }
      else if(keyCode === 78){ //keycode for the letter N
        state = `notPictureTime`;
      }
    }

    if(state === `pictureTime`){
      if(keyCode === 13){ //keycode for Enter
        state = `minigame2`;
      }
    }

  }




//function to click buttons to change states
function mousePressed(){
  let d = dist(mouseX, mouseY, tutorialButton.x, tutorialButton.y );
  if (d <tutorialButton.size /2 - 60){
      state = `tutorial`;
    }

  let d2 = dist(mouseX, mouseY, nextButton.x, nextButton.y );
  if (d2 <nextButton.size /2 - 20){
      state = `page02`;
    }

}

//MADELINE ADDED CODE//

function startTypeWriter(sentence){
    typeWriterTime = typeWriterSpeed;
    typeWriterCursor = 0;
    typeWriterText = sentence;
}


function drawTypeWriter(x,y) {

    //MADELINE ADDED CODE//
    typeWriterTime -= deltaTime;

    if (typeWriterTime <= 0) {

      if (typeWriterCursor < typeWriterText.length){
        typeWriterCursor++;
      }
      typeWriterTime = typeWriterSpeed;
    }
    if (typeWriterCursor > 0){
      text(typeWriterText.substring(0, typeWriterCursor), x, y);
    }

}
//
