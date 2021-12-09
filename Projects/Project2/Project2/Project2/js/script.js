/**
Project 2 Final
Long Leg Fishy Dating Simulator
Ines Pioselli

This is love simulator / visual novel about fish in love.


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

let okButton = {
  x:400,
  y:600,
  size:200,
}

let mailIcon = { //mail icon to access the letter
  x: 360,
  y: 170,
  size: 150,
}

let mailAlert = {
  x: 380,
  y: 155,
  size: 20,
}

let diameter = 0;
let growAmount =0.7;
let grow = true;


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

let minigame01Bg = {
  x:400,
  y:400,
  size:800,
}

let minigame01TutorialBg = {
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

let notPictureTimeBg = {
  x: 400,
  y:400,
  size: 800,
}

let minigame02Bg = {
  x:400,
  y:400,
  size:800,
}

let minigame02TutorialBg = {
  x:400,
  y:400,
  size:800,
}

//
let phoneBg = {
  x: 400,
  y: 400,
  size: 800,
}

let letter01Bg = {
  x: 400,
  y: 400,
  size: 800,
}

//minigame1 variables
let user;
let lover;
let ball;



//minigame2 variables
let user2;
let user02Img = undefined;
let mazeWalls = [];
let doorsImg = undefined;
let door01;
let door02;
let door03;

let door01Bg = {
  x: 400,
  y: 400,
  size: 800,
}

let door02Bg = {
  x: 400,
  y: 400,
  size: 800,
}

let door03Bg = {
  x: 400,
  y: 400,
  size: 800,
}


let books = [];
let newBookTimer = 0;
let newBookDelay = 50;
let bookImg = undefined;


let state = `start`; // the project starts with the start state

let mainFont;

let titleMusic;

//MADELINE ADDED CODE//

let typeWriterTime = 0;
let typeWriterSpeed = 65;
let typeWriterCursor = 0;
let typeWriterText = "";

let letterTimer01 = 200;
let letterTimerDone01 = false;


let sentence03 = `This is the first time I see such a fine fish strolling around. \n Would you like me to take a picture of you ;) ? \nY. Yess \nN. uhh no kinda creepy`;

let sentence04 = `You realized everyone in this school is too weird and decided to leave`;


let minigame02TutorialSentence = `You must prove your love to Jake by finding him in the maze. \nNavigate through maze and choose one of the doors to find your soulamte. \n Be careful books are dropping from the sky and blocking the path. \n Ps. If you choose the wrong door you might end up alone.`;
let letter01Sentence = `You just received a love letter from Edward!?!. \nA. Do you accept it? \n B. Reject it and proclaim your love for Jake.`;
let letter02Sentence = `You just received a love letter from Jake!?!. \nA. Do you accept it? \n B. Reject it and proclaim your love for Edward.`;





//



function preload() {

  //load images
  titleScreen.image = loadImage("assets/images/titleScreen.png");


  page1Background.image = loadImage("assets/images/page01.png");
  page2Background.image = loadImage("assets/images/page02.png");
  minigame01Bg.image = loadImage("assets/images/gymClass.png");
  photographyRoomBg.image = loadImage("assets/images/photographyRoom.png");
  pictureTimeBg.image = loadImage("assets/images/pictureTime.gif");
  notPictureTimeBg.image = loadImage("assets/images/notPictureTime.png");
  mailIcon.image = loadImage("assets/images/mailIcon.png");
  letter01Bg.image = loadImage("assets/images/letter01.png");

//buttons
  tutorialButton.image = loadImage("assets/images/tutorialButton.png");
  nextButton.image = loadImage("assets/images/nextButton.png");
  okButton.image = loadImage("assets/images/okButton.png");

//Minigame02 images
  minigame02TutorialBg.image = loadImage("assets/images/minigame02Tutorial.png");
  bookImg = loadImage("assets/images/book.png");
  phoneBg.image = loadImage("assets/images/phoneBg.png");
  minigame02Bg.image = loadImage("assets/images/libraryFloor.png");
  doorsImg = loadImage("assets/images/door.png");
  user02Img = loadImage("assets/images/mainCharacter.png");
  door01Bg.image = loadImage("assets/images/door01Bg.png");
  door02Bg.image = loadImage("assets/images/door02Bg.png");
  door03Bg.image = loadImage("assets/images/door03Bg.png");

  //load fonts
  mainFont = loadFont(`assets/fonts/Blackberries.otf`);

  //load music
  titleMusic = loadSound(`assets/sounds/Brasil.mp3`);



}



function setup() {
  createCanvas(800, 800);


  //creates each class
  user = new User01(random(0, width), random(0, height)); // random x and y position
  lover = new Lover(random(0, width), random(0, height)); // random x and y position
  ball = new Ball(random(0, width), random(0, height)); // random x and y position

  //creates each class for minigame 2
  user2 = new User02(50, 50, user02Img);

  //creates the walls for the maze in minigame2
    mazeWalls.push(new Maze(160, 580, 200, 10)); //(x, y, w, h)
    mazeWalls.push(new Maze(50, 410, 20, 560));
    mazeWalls.push(new Maze(350, 690, 620, 20));
    mazeWalls.push(new Maze(450, 100, 620, 20));
    mazeWalls.push(new Maze(250, 220, 10, 250));
    mazeWalls.push(new Maze(470, 210, 10, 200));
    mazeWalls.push(new Maze(250, 350, 220, 10));
    mazeWalls.push(new Maze(355, 450, 10, 200));
    mazeWalls.push(new Maze(630, 220, 140, 10));
    mazeWalls.push(new Maze(545, 470, 150, 10));
    mazeWalls.push(new Maze(680, 580, 170, 10));
    mazeWalls.push(new Maze(615, 350, 10, 250));
    mazeWalls.push(new Maze(550, 550, 10, 150));
    mazeWalls.push(new Maze(760, 380, 20, 580));

    books.push(new Book(random(0, width), random(0, height),50, 50, bookImg));



  //creates the doors for the ending states
  door01 = new Door(400, 180, doorsImg);
  door02 = new Door(690, 500, doorsImg);
  door03 = new Door(120, 500, doorsImg );



  //random speed for the fish lover
  lover.vx = random(-lover.speed, lover.speed);
  lover.vy = random(-lover.speed, lover.speed);

  //random speed for the ball
  ball.vx = random(-ball.speed, ball.speed);
  ball.vy = random(-ball.speed, ball.speed);


}

//Draws all the states for the game
function draw() {

stateChange(); //function to switch from state to state

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
  else if(state === `minigame01`){
    minigame01();
  }
  else if(state === `minigame02`){
    minigame02();
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

  else if(state === `phone01`){
    phone01();
  }
  else if(state === `letter01`){
    letter01();
  }

  else if(state === `minigame02Failed`){
    minigame02Failed();
  }

  else if(state === `minigame02Tutorial`){
    minigame02Tutorial();
  }



}


//page before the homepage
function start(){
  background(64, 175, 222);
  push();
  textFont(mainFont);
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
  textFont(mainFont);
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
  textFont(mainFont);
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

//text box for page 1
  push();
  textFont(mainFont);
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
  textFont(mainFont);
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
  textFont(mainFont);
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
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255, 255, 255);
  text(`You just took a picture with Jake! \nPress ENTER to see what happens next`,  width/2, height/2 + 330);
  pop();


//timer for phone01 state to pop up
  letterTimer01 -= 1;
  if(letterTimer01 <= 0){
    letterTimerDone01 = true;
  }
  if(letterTimerDone01){
    state = `phone01`;
    }
}


function notPictureTime(){
  imageMode(CENTER, CENTER);
  image(notPictureTimeBg.image, notPictureTimeBg.x, notPictureTimeBg.y, notPictureTimeBg.size, notPictureTimeBg.size );

  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  drawTypeWriter(width / 2, height / 2 + 250);
  pop();
}


//if you select A. The music club you will end up on this state
function minigame01(){
  imageMode(CENTER, CENTER);
  image(minigame01Bg.image, minigame01Bg.x, minigame01Bg.y, minigame01Bg.size, minigame01Bg.size);
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

//happy ending for the minigame1
function happyEnding(){
  background(191, 66, 245);

  push();
  textFont(mainFont);
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
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`You ended up sad and alone :( `, width/2, height/2);
  pop();
}

function minigame02Tutorial(){
  imageMode(CENTER, CENTER);
  image(minigame02TutorialBg.image, minigame02TutorialBg.x, minigame02Bg.y, minigame02TutorialBg.size, minigame02TutorialBg.size);
}
function minigame02(){
  imageMode(CENTER, CENTER);
  image(minigame02Bg.image, minigame02Bg.x, minigame02Bg.y, minigame02Bg.size, minigame02Bg.size);

  //keyboard input
  user2.handleInput();

  //movement
  user2.move();

  for (let i = 0; i < mazeWalls.length; i++) {
    let wall = mazeWalls[i];
    user2.hit(wall);
  }


  newBookTimer++; //increments the book timer
  if(newBookTimer >= newBookDelay){
    //add a book to block the path
    books.push(new Book(random(0, width), random(0, height),50, 50, bookImg));
    newBookTimer = 0;


  }

  //check if the doors are opened
  user2.checkOpenedDoor01(door01);
  user2.checkOpenedDoor02(door02);
  user2.checkOpenedDoor03(door03);

  //Display
  user2.display();

  for (let i = 0; i < mazeWalls.length; i++) {
    let wall = mazeWalls[i];
    wall.display();
  }


  door01.display();
  door02.display();
  door03.display();


  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    user2.hit(book);
  }
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
     book.display();
   }

//stops the minigame if there are too many books blocking the path
   if(books.length >= 40){
     state = `start`;
   }

//checks if any of the doors are open and then brings you to the state for each door
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
  imageMode(CENTER, CENTER);
  image(door01Bg.image, door01Bg.x, door01Bg.y, door01Bg.size, door01Bg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`You are alone in the void :(`, width/2, height/2 +250);
  pop();
}

function door02Outcome(){
  imageMode(CENTER, CENTER);
  image(door02Bg.image, door02Bg.x, door02Bg.y, door02Bg.size, door02Bg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 255, 255);
  text(`You found your soulmate!`, width/2, height/2 - 350);
  pop();
}

function door03Outcome(){
  imageMode(CENTER, CENTER);
  image(door03Bg.image, door03Bg.x, door03Bg.y, door03Bg.size, door03Bg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`You ended up alone but that's okay because you are \n a boss woman.`, width/2, height/2 - 250);
  pop();
}




function phone01(){
  imageMode(CENTER, CENTER);
  image(phoneBg.image, phoneBg.x, phoneBg.y, phoneBg.size, phoneBg.size );

  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`YOU GOT MAIL!!! \n Click the red dot to see who it's from!`, width/2, height/2 + 250);
  pop();

  moveMailAlert();
  displayMailIcon();
  displayMailAlert();
}

function phone02(){

}

function letter01(){
  imageMode(CENTER, CENTER);
  image(letter01Bg.image, letter01Bg.x, letter01Bg.y, letter01Bg.size, letter01Bg.size );
  startTypeWriter(letter01Sentence);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(letter01Sentence, width / 2, height / 2+250);
  pop();
}

function letter02(){
background(0);
}

function moveMailAlert(){
if (diameter > 30){
  grow = false;
  }
if(diameter <0){
  grow = true;
  }

if (grow === true){
  diameter += growAmount;
  }
else{
  diameter -= growAmount
  }
}

function minigame02Tutorial(){
  imageMode(CENTER, CENTER);
  image(minigame02TutorialBg.image, minigame02TutorialBg.x, minigame02TutorialBg.y, minigame02TutorialBg.size, minigame02TutorialBg.size );
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255, 255, 255);
  text(`Minigame Tutorial`,  width / 2, height / 2 -250);
  textSize(30);
  text(minigame02TutorialSentence, width / 2, height / 2);
  pop();
  displayOkButton();
}


//displays the tutorial button
function displayTutorialButton(){
  image(tutorialButton.image, tutorialButton.x, tutorialButton.y, tutorialButton.size, tutorialButton.size);
}

//displays the next button
function displayNextButton(){
  image(nextButton.image, nextButton.x, nextButton.y, nextButton.size, nextButton.size);
}

function displayOkButton(){
  image(okButton.image, okButton.x, okButton.y, okButton.size, okButton.size);
}

//displays mail icon for the phone
function displayMailIcon(){
  image(mailIcon.image, mailIcon.x, mailIcon.y, mailIcon.size, mailIcon.size);
}

function displayMailAlert(){
  fill(158, 45, 25);
  circle(mailAlert.x, mailAlert.y, diameter);
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
      state = `minigame01`;
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
        startTypeWriter(sentence04);
      }
    }

    if(state === `letter01`){
      if(keyCode === 65){ //keycode for the letterA
        state = `minigame01`;
      }
      else if(keyCode === 66){ // keycode for the letter B
        state = `minigame02Tutorial`;
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

    let d3 = dist(mouseX, mouseY, mailAlert.x, mailAlert.y);
    if(d3 < diameter/2){
      state = `letter01`;
    }

  let d4 = dist(mouseX, mouseY, okButton.x, okButton.y);
  if (d4 <okButton.size /2 - 20){
      state = `minigame02`;
    }



}


//Madeline helped with this CODE
//
function startTypeWriter(sentence){
    typeWriterTime = typeWriterSpeed;
    typeWriterCursor = 0;
    typeWriterText = sentence;
}


function drawTypeWriter(x,y) {


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
