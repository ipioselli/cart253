/**
Project 2 Final
Long Leg Fishy Dating Simulator
Ines Pioselli

This is love simulator / visual novel about fish in love.
You start your first day at school and get to choose a club.
Depending on which club you choose you can end up with the fish
in that club. There is Jake in the photography club or Edward inspect in
the music club. There is always the possibility to change
your love interest. Each fish writes you a love letter to stop
you from getting with the other fish. You can either reject or accept
the letter. BUT you must successfully finish 1/2 minigames to prove
your love for 1 of the fish.


*/

"use strict";

let tutorialButton = { // button to access the tutorial state
  x: 150,
  y: 750,
  size: 200,
}

let nextButton = { // button to access the first page of the game
  x: 600,
  y: 750,
  size: 130,
}

let okButton = { // button to access the minigames from the minigame tutorial pages
  x: 400,
  y: 600,
  size: 200,
}

let mailIcon = { //mail icon on the phone state
  x: 360,
  y: 170,
  size: 150,
}

let mailAlert = { // red mail alert on the mail icon on the phone state
  x: 380,
  y: 155,
  size: 0, //diameter
  growAmount: 0.7, //speed
  grow: true,
}

let titleScreen = { //image for the title state
  x: 400,
  y: 400,
  size: 800,
}

let page1Background = { //image for the first page
  x: 400,
  y: 400,
  size: 800,
}

let page2Background = { //image for the 2nd page
  x: 400,
  y: 400,
  size: 800,
}

let photographyRoomBg = { //image for photography room
  x: 400,
  y: 400,
  size: 800,
}

let musicRoomBg = { //bg image for the music room
  x: 400,
  y: 400,
  size: 800,
}

let pictureTimeBg = { // image for when you take a picture with Jake
  x: 400,
  y: 400,
  size: 800,
}

let notPictureTimeBg = { //image for when you choose not to take a picture with drake
  x: 400,
  y: 400,
  size: 800,
}

let notMusicTimeBg = { //image for when you choose not to listen to Edwards song
  x: 400,
  y: 400,
  size: 800,
}

let musicTimeBg = { //image for when you listen to Edwards song
  x: 400,
  y: 400,
  size: 800,
}

let phoneBg = { //image for the phone states
  x: 400,
  y: 400,
  size: 800,
}

let loveLetter01Bg = { //image for the love letter01 from Jake
  x: 400,
  y: 400,
  size: 800,
}

let loveLetter02Bg = { //image for the love letter from Edward
  x: 400,
  y: 400,
  size: 800,
}

//  minigame01 variables //
//---------------------  //
let user1; //main character
let lover; //love interest
let user01Img = undefined; //image for the main character
let loverImg = undefined; //image for love interest
let basketballs = []; //array of basketballs
let volleyballs = []; //array of volleyballs
let basketballImg = undefined; //image for the basketball
let volleyballImg = undefined; //image for the volleyball

let minigame01TutorialBg = { //bg image for the minigame01 tutorial
  x: 400,
  y: 400,
  size: 800,
}
let minigame01Bg = { //Bg image for minigame01
  x: 400,
  y: 400,
  size: 800,
}
let minigame01GoodEndingBg = { //Bg image for the good ending
  x: 400,
  y: 400,
  size: 800,
}
let minigame01SadEndingBg = { //Bg image for the sad ending
  x: 400,
  y: 400,
  size: 800,
}
let minigame01TimeoutBg = { //Bg image for when the timer runs out
  x: 400,
  y: 400,
  size: 800,
}

//  minigame2 variables //
//---------------------//
let user2; //main character
let user02Img = undefined; //img for the user
let mazeWalls = []; //array of maze walls
let doorsImg = undefined; //img for the doors
//all the doors in the maze
let door01;
let door02;
let door03;

let door01Bg = { //bg image for door01
  x: 400,
  y: 400,
  size: 800,
}
let door02Bg = { //bg image for door02
  x: 400,
  y: 400,
  size: 800,
}
let door03Bg = { //bg image for door03
  x: 400,
  y: 400,
  size: 800,
}
let minigame02Bg = { //Bg image for minigame02
  x: 400,
  y: 400,
  size: 800,
}
let minigame02TutorialBg = { //Bg image for tutorial of minigame02
  x: 400,
  y: 400,
  size: 800,
}
let minigame02FailedBg = { //Bg image for when there are too many books that appear
  x: 400,
  y: 400,
  size: 800,
}

//timer properties to add a book in the minigame02
let books = [];
let newBookTimer = 0; //book timer starts at 0
let newBookDelay = 80; //speed of book timer
let bookImg = undefined; //img for the books


let state = `start`; // the project starts with the start state

let mainFont; //font used throughout the game

let titleMusic; //music on the homepage
let musicTimeMusic; //music for when Edward shows you his music
let suspenseMusic; //suspenseful music for when you get a mysterious message from one of the fish
let mainMusic; //main song used throughout the game

/***
---------------------------------------------
TIMERS
--------------------------------------------
*/
//Typewriter timer
let typeWriterTime = 0;
let typeWriterSpeed = 70; //speed
let typeWriterCursor = 0;
let typeWriterText = "";

//timer for the loveletter01 to appear
let letterTimer01 = 200;
let letterTimerDone01 = false;

//timer for the loveletter02 to appear
let letterTimer02 = 600;
let letterTimerDone02 = false;

//timer for the minigame01
let minigame01Timer = 1000;
let minigame01TimerDone = false;

/***
---------------------------------------------
SENTENCES
--------------------------------------------
*/
//added all the text here for the typewriter and if the sentence was too long
let photographyRoomSentence = `This is the first time I see such a fine fish strolling around. \n Would you like me to take a picture of you ;) ? \nY. Yess \nN. uhh no kinda creepy`;
let musicRoomSentence = `Hey there ;-) Thanks for joining my club. \nYou'll have a better time here than with Jake! \nDo you want to listen to my sick beats \nY. ye Defo \nN. uh no my taste in music is too sophisticated`;
let notMusicTimeSentence = `You decided to make your own music and \nbecame a star all on your own.`;
let musicTimeSentence = `Edward made you listen to his music \nand it was great!`;
let notPictureTimeSentence = `You realized everyone in this school is too weird and decided to leave`;
let minigame02TutorialSentence = `You must prove your love to Jake by finding him in the maze. \nNavigate through the maze and choose one of the doors to find your soulamte. \n Be careful books are dropping from the sky and blocking the path. \n Ps. If you choose the wrong door you might end up alone.`;
let minigame01TutorialSentence = `You must prove your love to Edward in gym class. \nMake your way towards him but make sure avoid all the balls. \nIf you touch any of the balls you will end up alone :(. \nWatch out for the timer too!`;
let loveLetter02Sentence = `You just received a love letter from Edward!?!. \nA. Do you accept it? \n B. Reject it and proclaim your love for Jake.`;
let loveLetter01Sentence = `You just received a love letter from Jake!?!. \nA. Do you accept it? \n B. Reject it and proclaim your love for Edward.`;
let minigame01SadEndingSentence = `You ended up sad and alone :( \nYou also failed gym class because you are so bad at dodging balls.`;


//loads all the assets for project2 (images, sounds and fonts)
function preload() {

  //load images
  titleScreen.image = loadImage("assets/images/titleScreen.png");
  page1Background.image = loadImage("assets/images/page01.png");
  page2Background.image = loadImage("assets/images/page02.png");
  photographyRoomBg.image = loadImage("assets/images/photographyRoom.png");
  musicRoomBg.image = loadImage("assets/images/musicRoomBg.png");
  pictureTimeBg.image = loadImage("assets/images/pictureTime.gif");
  notPictureTimeBg.image = loadImage("assets/images/notPictureTime.png");
  musicTimeBg.image = loadImage("assets/images/musicTimeBg.gif");
  notMusicTimeBg.image = loadImage("assets/images/notMusicTimeBg.png");
  mailIcon.image = loadImage("assets/images/mailIcon.png");
  phoneBg.image = loadImage("assets/images/phoneBg.png");
  loveLetter01Bg.image = loadImage("assets/images/letter01.png");
  loveLetter02Bg.image = loadImage("assets/images/letter02.png");

  //loads button images
  tutorialButton.image = loadImage("assets/images/tutorialButton.png");
  nextButton.image = loadImage("assets/images/nextButton.png");
  okButton.image = loadImage("assets/images/okButton.png");

  //Minigame01 images
  minigame01TutorialBg.image = loadImage("assets/images/minigame01Tutorial.png");
  minigame01Bg.image = loadImage("assets/images/gymClass.png");
  basketballImg = loadImage("assets/images/basketball.png");
  volleyballImg = loadImage("assets/images/volleyball.png");
  user01Img = loadImage("assets/images/user01.png");
  loverImg = loadImage("assets/images/lover.png");
  minigame01GoodEndingBg.image = loadImage("assets/images/loveEnding.png");
  minigame01SadEndingBg.image = loadImage("assets/images/badEnding.png");
  minigame01TimeoutBg.image = loadImage("assets/images/timerDone.png");

  //Minigame02 images
  minigame02TutorialBg.image = loadImage("assets/images/minigame02Tutorial.png");
  bookImg = loadImage("assets/images/book.png");
  minigame02Bg.image = loadImage("assets/images/libraryFloor.png");
  doorsImg = loadImage("assets/images/door.png");
  user02Img = loadImage("assets/images/mainCharacter.png");
  door01Bg.image = loadImage("assets/images/door01Bg.png");
  door02Bg.image = loadImage("assets/images/door02Bg.png");
  door03Bg.image = loadImage("assets/images/door03Bg.png");
  minigame02FailedBg.image = loadImage("assets/images/booksFalling.png");

  //load fonts
  mainFont = loadFont(`assets/fonts/Blackberries.otf`);

  //load music
  titleMusic = loadSound(`assets/sounds/Brasil.mp3`);
  musicTimeMusic = loadSound(`assets/sounds/musicTimeSong.mp3`);
  suspenseMusic = loadSound(`assets/sounds/suspense.mp3`);
  mainMusic = loadSound(`assets/sounds/cuteSong.mp3`);

}

//setups the minigames by calling all the classes
function setup() {
  createCanvas(800, 800); //setups the canvas size

  //creates each class for minigame01
  user1 = new User01(50, 30, user01Img); //creates user 1
  lover = new Lover(750, 760, loverImg); //creates the love interest
  //creates all the basketballs
  basketballs.push(new Basketball(10, 150, basketballImg)); // (x, y, img)
  basketballs.push(new Basketball(10, 350, basketballImg));
  basketballs.push(new Basketball(10, 550, basketballImg));
  //creates all the volleyballs
  volleyballs.push(new Volleyball(780, 250, volleyballImg));
  volleyballs.push(new Volleyball(780, 450, volleyballImg));
  volleyballs.push(new Volleyball(780, 650, volleyballImg));

  //creates each class for minigame 2
  user2 = new User02(50, 50, user02Img);

  //creates the walls for the maze in minigame2
  mazeWalls.push(new Mazewalls(160, 580, 200, 10)); //(x, y, w, h)
  mazeWalls.push(new Mazewalls(50, 410, 20, 560));
  mazeWalls.push(new Mazewalls(350, 690, 620, 20));
  mazeWalls.push(new Mazewalls(450, 100, 620, 20));
  mazeWalls.push(new Mazewalls(250, 220, 10, 250));
  mazeWalls.push(new Mazewalls(470, 210, 10, 200));
  mazeWalls.push(new Mazewalls(250, 350, 220, 10));
  mazeWalls.push(new Mazewalls(355, 450, 10, 200));
  mazeWalls.push(new Mazewalls(600, 220, 100, 10));
  mazeWalls.push(new Mazewalls(545, 470, 150, 10));
  mazeWalls.push(new Mazewalls(680, 580, 170, 10));
  mazeWalls.push(new Mazewalls(615, 350, 10, 250));
  mazeWalls.push(new Mazewalls(550, 550, 10, 150));
  mazeWalls.push(new Mazewalls(760, 380, 20, 580));

  //creates the books that appear with the timer
  books.push(new Book(random(0, width), random(0, height), 50, 50, bookImg)); // (x, y, w, h, img)

  //creates the doors for the ending states
  door01 = new Door(400, 180, doorsImg); // (x, y, img)
  door02 = new Door(690, 500, doorsImg);
  door03 = new Door(120, 500, doorsImg);

}

//Draws all the states for the game
function draw() {
stateChange(); //function to switch from state to state
}

//creates all the states for the game
function stateChange() {

  if (state === `start`) {
    start();
  } else if (state === `title`) {
    title();
  } else if (state === `tutorial`) {
    tutorial();
  } else if (state === `page01`) {
    page01();
  } else if (state === `page02`) {
    page02();
  } else if (state === `photographyRoom`) {
    photographyRoom();
  } else if (state === `pictureTime`) {
    pictureTime();
  } else if (state === `notPictureTime`) {
    notPictureTime();
  } else if (state === `musicRoom`) {
    musicRoom();
  } else if (state === `musicTime`) {
    musicTime();
  } else if (state === `notMusicTime`) {
    notMusicTime();
  } else if (state === `minigame01`) {
    minigame01();
  } else if (state === `minigame01Tutorial`) {
    minigame01Tutorial();
  } else if (state === `minigame01Timeout`) {
    minigame01Timeout();
  } else if (state === `minigame02`) {
    minigame02();
  } else if (state === `door01Outcome`) {
    door01Outcome();
  } else if (state === `door02Outcome`) {
    door02Outcome();
  } else if (state === `door03Outcome`) {
    door03Outcome();
  } else if (state === `minigame01GoodEnding`) {
    minigame01GoodEnding();
  } else if (state === `minigame01SadEnding`) {
    minigame01SadEnding();
  } else if (state === `phone01`) {
    phone01();
  } else if (state === `loveLetter01`) {
    loveLetter01();
  } else if (state === `phone02`) {
    phone02();
  } else if (state === `loveLetter02`) {
    loveLetter02();
  } else if (state === `minigame02Failed`) {
    minigame02Failed();
  } else if (state === `minigame02Tutorial`) {
    minigame02Tutorial();
  }

}

//page before the homepage (made this so the music would start after a key was pressed)
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
function tutorial() {
  push();
  background(64, 175, 222);
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(255, 255, 255);
  text(`Long Leg Fish Love Story!`, width / 2, height / 2 - 300);
  textSize(35);
  text(`You are a lovely fish who has just started their first day of college.`, width / 2, height / 2 - 200);
  text(`You are asked to join clubs and meet new fish.`, width / 2, height / 2 - 150);
  text(`However, you encounter 2 love interests and must make a hard decision`, width / 2, height / 2 - 100);
  text(`and choose one of them do date!`, width / 2, height / 2 - 50);
  text(`Be careful though, you can end up with none of them`, width / 2, height / 2 - 0);
  text(`if you don't play your cards right!`, width / 2, height / 2 + 50);
  textSize(50);
  fill(24, 79, 102);
  text(`Press "Back" to go back to the homepage!`, width / 2, height / 2 + 150);
  pop();
}

//displays the first page with the main character
//you are prompted to click the next button after you read everything
function page01() {
  imageMode(CENTER, CENTER);
  image(page1Background.image, page1Background.x, page1Background.y, page1Background.size, page1Background.size);
  displayNextButton(); //button to get to the next state
  //text box for page 1
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`It's your first day of art school and you are very excited to start!`, width / 2, height / 2 + 210);
  text(`You really want to join a club but not sure which one.`, width / 2, height / 2 + 250);
  text(`While you look around you see 2 tall mysterious fish \napproach you. `, width / 2, height / 2 + 310);
  pop();
}

//displays the second page with the 2 love interests
function page02() {
  imageMode(CENTER, CENTER);
  image(page2Background.image, page2Background.x, page2Background.y, page2Background.size, page2Background.size);
  //text box for page 2
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`Orange fish: Hi there! My name is Jake! Want to join the \nphotography club? `, width / 2, height / 2 + 210);
  text(`White fish: Don't listen to him. My name is Edward and you \nshould join the music club!`, width / 2, height / 2 + 290);
  text(`A. Join the music club     B.Join the photography club`, width / 2, height / 2 + 350);
  pop();
}

//if you select B. from page02 you will end up in the photography club with Jake
function photographyRoom() {
  imageMode(CENTER, CENTER);
  image(photographyRoomBg.image, photographyRoomBg.x, photographyRoomBg.y, photographyRoomBg.size, photographyRoomBg.size);
  //textbox
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  drawTypeWriter(width / 2, height / 2 + 250); //typewriter effect for the text
  pop();
}

//if you select A. from page02 you will end up in the music club with Edward
function musicRoom() {
  imageMode(CENTER, CENTER);
  image(musicRoomBg.image, musicRoomBg.x, musicRoomBg.y, musicRoomBg.size, musicRoomBg.size);
  //text
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  drawTypeWriter(width / 2, height / 2 + 270);
  pop();
}

// if you say yes for a picture with Jake you will end up on the this state
function pictureTime() {
  imageMode(CENTER, CENTER);
  image(pictureTimeBg.image, pictureTimeBg.x, pictureTimeBg.y, pictureTimeBg.size, pictureTimeBg.size);
  //text
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255, 255, 255);
  text(`You just took a picture with Jake!`, width / 2, height / 2 + 330);
  pop();

  //timer for phone01 state to pop up
  letterTimer01 -= 1;
  if (letterTimer01 <= 0) {
    letterTimerDone01 = true;
  }
  if (letterTimerDone01) { //if the timer is done you go to phone01 state
    state = `phone01`;
    mainMusic.stop(); //stops the main music
    suspenseMusic.loop(); //starts the suspensful music
  }
}

//if you choose not to take a picture with Jake you will end up here
function notPictureTime() {
  imageMode(CENTER, CENTER);
  image(notPictureTimeBg.image, notPictureTimeBg.x, notPictureTimeBg.y, notPictureTimeBg.size, notPictureTimeBg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  drawTypeWriter(width / 2, height / 2 + 250); //typewriter effect
  pop();
}

//if you choose to listen to Edwards song you will end up here
function musicTime() {
  imageMode(CENTER, CENTER);
  image(musicTimeBg.image, musicTimeBg.x, musicTimeBg.y, musicTimeBg.size, musicTimeBg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 255, 255);
  drawTypeWriter(width / 2, height / 2 - 310);
  pop();

  //timer to get the phone02 state to appear
  letterTimer02 -= 1;
  if (letterTimer02 <= 0) {
    letterTimerDone02 = true;
  }
  if (letterTimerDone02) {
    state = `phone02`;
    musicTimeMusic.stop(); //stops Edwards song
    suspenseMusic.loop(); //plays the suspensful music
  }
}

//if you choose not to listen to Edwards song you will end up here
function notMusicTime() {
  imageMode(CENTER, CENTER);
  image(notMusicTimeBg.image, notMusicTimeBg.x, notMusicTimeBg.y, notMusicTimeBg.size, notMusicTimeBg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 255, 255);
  drawTypeWriter(width / 2, height / 2 + 250); //typewriter effect
  pop();
}

//function to display the phone after you listen to Edwards song
function phone01() {
  imageMode(CENTER, CENTER);
  image(phoneBg.image, phoneBg.x, phoneBg.y, phoneBg.size, phoneBg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`YOU GOT MAIL!!! \n Click the red dot to see who it's from!`, width / 2, height / 2 + 250);
  pop();

  moveMailAlert(); //move the red alert dot on the mail icon
  displayMailIcon(); //display the mail icon on the phone
  displayMailAlert(); //display the alert on the phone
}

//function to display the phone after you take a picture with Jake
function phone02() {
  imageMode(CENTER, CENTER);
  image(phoneBg.image, phoneBg.x, phoneBg.y, phoneBg.size, phoneBg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`YOU GOT MAIL!!! \n Click the red dot to see who it's from!`, width / 2, height / 2 + 250);
  pop();

  moveMailAlert(); //move the red alert dot on the mail icon
  displayMailIcon(); //display the mail icon on the phone
  displayMailAlert(); //display the alert on the phone
}

//function to make the red dot shrink and grow on the phone state
function moveMailAlert() {
  if (mailAlert.size > 30) { //max size is 30
    mailAlert.grow = false;
  }
  if (mailAlert.size < 0) {
    mailAlert.grow = true;
  }

  if (mailAlert.grow === true) {
    mailAlert.size += mailAlert.growAmount; //if the size is at 0 it will grow
  } else {
    mailAlert.size -= mailAlert.growAmount //if the size is at 30 it will shrink
  }
}

//function to display the love letter from Jake after you click the alert on the phone
function loveLetter01(){
  imageMode(CENTER, CENTER);
  image(loveLetter01Bg.image, loveLetter01Bg.x, loveLetter01Bg.y, loveLetter01Bg.size, loveLetter01Bg.size );
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(loveLetter01Sentence, width / 2, height / 2+250);
  pop();
}

//function to display the love letter from Edward after you click the alert on the phone
function loveLetter02(){
  imageMode(CENTER, CENTER);
  image(loveLetter02Bg.image, loveLetter02Bg.x, loveLetter02Bg.y, loveLetter02Bg.size, loveLetter02Bg.size );
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(loveLetter02Sentence, width / 2, height / 2+250);
  pop();
}

//function to display the tutorial for minigame01
function minigame01Tutorial(){
  imageMode(CENTER, CENTER);
  image(minigame01TutorialBg.image, minigame01TutorialBg.x, minigame01TutorialBg.y, minigame01TutorialBg.size, minigame01TutorialBg.size );
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(80);
  fill(255, 255, 255);
  text(`Minigame Tutorial`,  width / 2, height / 2 -250);
  textSize(40);
  text(minigame01TutorialSentence, width / 2, height / 2);
  pop();
  displayOkButton(); //click the ok button to get to the actual game
}

//function to run the minigame01
//basketballs and volleyballs are moving accross the screen in different directions
//you must get to Edward without touching any of the balls
//There is also a timer if you take too long
function minigame01() {
  imageMode(CENTER, CENTER);
  image(minigame01Bg.image, minigame01Bg.x, minigame01Bg.y, minigame01Bg.size, minigame01Bg.size);

  user1.handleInput(); //keyboard input for user1

  //move functions
  user1.move();

  //moves the basketballs
  for (let i = 0; i < basketballs.length; i++) {
    let basketball = basketballs[i];
    basketball.move();
  }

  //moves the volleyballs
  for (let i = 0; i < volleyballs.length; i++) {
    let volleyball = volleyballs[i];
    volleyball.move();
  }

  user1.checkHit(lover); //checks if the user found their lover
  //checks if the user hit the basketballs
  for (let i = 0; i < basketballs.length; i++) {
    let basketball = basketballs[i];
    user1.checkHitBall(basketball);
  }
  //checks if the user hit the volleyballs
  for (let i = 0; i < volleyballs.length; i++) {
    let volleyball = volleyballs[i];
    user1.checkHitBall(volleyball);
  }

  //booleans
  if (!user1.notFoundLover) {
    state = `minigame01GoodEnding`; // if the user reaches the lover, you get the good ending
  }
  if (!user1.ballNotHit) {
    state = `minigame01SadEnding`; // if the user hits a ball, you get the bad ending
  }

  //timer
  minigame01Timer -= 1; //timer goes down by 1
  if (minigame01Timer <= 0) {
    minigame01TimerDone = true;
  }
  if (minigame01TimerDone) {
    state = `minigame01Timeout`; //if the timer runs out you get another bad ending
  }

  //diplay functions
  user1.display(); // displays the user
  lover.display(); // displays the lover

  //displays all the basketballs in the array
  for (let i = 0; i < basketballs.length; i++) {
    let basketball = basketballs[i];
    basketball.display();
  }
  //displays all the volleyballs in the array
  for (let i = 0; i < volleyballs.length; i++) {
    let volleyball = volleyballs[i];
    volleyball.display();
  }

}

//brings you to this state when the timer in minigame01 is done
//another bad ending
function minigame01Timeout(){
  imageMode(CENTER, CENTER);
  image(minigame01TimeoutBg.image, minigame01TimeoutBg.x, minigame01TimeoutBg.y, minigame01TimeoutBg.size, minigame01TimeoutBg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255, 255, 255);
  text(`You ran out of time :/ \nand ended up alone`, width/2, height/2 + 300);
  pop();
}

//happy ending for the minigame01
//achieved by getting to your lover without touchings the balls
function minigame01GoodEnding(){
  imageMode(CENTER, CENTER);
  image(minigame01GoodEndingBg.image, minigame01GoodEndingBg.x, minigame01GoodEndingBg.y, minigame01GoodEndingBg.size, minigame01GoodEndingBg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255, 255, 255);
  text(`You fell in love with Edward and rode off into the sunset!`, width/2, height/2 + 350);
  pop();
}

//sad ending for the minigame01
//achieved by touching any of the balls
function minigame01SadEnding(){
  imageMode(CENTER, CENTER);
  image(minigame01SadEndingBg.image, minigame01SadEndingBg.x, minigame01SadEndingBg.y, minigame01SadEndingBg.size, minigame01SadEndingBg.size);

  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(minigame01SadEndingSentence, width/2, height/2 + 250);
  pop();
}

//tutorial for the 2nd minigame
function minigame02Tutorial() {
  imageMode(CENTER, CENTER);
  image(minigame02TutorialBg.image, minigame02TutorialBg.x, minigame02TutorialBg.y, minigame02TutorialBg.size, minigame02TutorialBg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(80);
  fill(255, 255, 255);
  text(`Minigame Tutorial`, width / 2, height / 2 - 250);
  textSize(55);
  text(`Aquarium Library Maze`, width / 2, height / 2 - 150);
  textSize(30);
  text(minigame02TutorialSentence, width / 2, height / 2);
  pop();
  displayOkButton();//click ok button to get to the actual game
}

//function to run the MINIGAME02
//you must navigate through the maze and choose 1 of the 3 doors to find your lover
//there are also books falling from the sky blocking your path
//if there are too many books you will get a bad ending
function minigame02() {
  imageMode(CENTER, CENTER);
  image(minigame02Bg.image, minigame02Bg.x, minigame02Bg.y, minigame02Bg.size, minigame02Bg.size);

  //keyboard input
  user2.handleInput();

  //movement
  user2.move(); //move the user

  //check if the user hits the walls
  for (let i = 0; i < mazeWalls.length; i++) {
    let wall = mazeWalls[i];
    user2.hit(wall);
  }

  //creates a new book using a timer
  newBookTimer++; //increments the book timer
  if (newBookTimer >= newBookDelay) {
    //adds a book to block the path
    books.push(new Book(random(0, width), random(0, height), 50, 50, bookImg));
    newBookTimer = 0; //resets the timer
  }

  //check if the doors are opened
  user2.checkOpenedDoor01(door01);
  user2.checkOpenedDoor02(door02);
  user2.checkOpenedDoor03(door03);

  //checks the user hit any of the books
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    user2.hit(book);
  }

  //Display functions
  user2.display(); //displays the user

  //displays the maze walls in the array for minigame01
  for (let i = 0; i < mazeWalls.length; i++) {
    let wall = mazeWalls[i];
    wall.display();
  }
  //displays each door in the maze
  door01.display();
  door02.display();
  door03.display();

  //displays all the books in the array
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    book.display();
  }

  //stops the minigame if there are too many books blocking the path
  if (books.length >= 40) {
    state = `minigame02Failed`;
  }

  //checks if any of the doors are open and then brings you to the state for each door
  if (!user2.door01Opened) {
    state = `door01Outcome`;
  }
  if (!user2.door02Opened) {
    state = `door02Outcome`;
  }
  if (!user2.door03Opened) {
    state = `door03Outcome`;
  }
}

//brings you to this ending if the # of books added is >= 40
function minigame02Failed(){
  imageMode(CENTER, CENTER);
  image(minigame02FailedBg.image, minigame02FailedBg.x, minigame02FailedBg.y, minigame02FailedBg.size, minigame02FailedBg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255, 255, 255);
  text(`Sorry there were too many books you ended up alone :(`, width/2, height/2 +250);
  pop();
}

//DOORS
//this door gives you a bad ending and you end up alone
function door01Outcome() {
  imageMode(CENTER, CENTER);
  image(door01Bg.image, door01Bg.x, door01Bg.y, door01Bg.size, door01Bg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`You are alone in the void :(`, width / 2, height / 2 + 250);
  pop();
}

//this door gives you the good ending
function door02Outcome() {
  imageMode(CENTER, CENTER);
  image(door02Bg.image, door02Bg.x, door02Bg.y, door02Bg.size, door02Bg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 255, 255);
  text(`You found your soulmate!`, width / 2, height / 2 - 350);
  pop();
}

//this door gives you another bad ending
function door03Outcome() {
  imageMode(CENTER, CENTER);
  image(door03Bg.image, door03Bg.x, door03Bg.y, door03Bg.size, door03Bg.size);
  push();
  textFont(mainFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255, 255, 255);
  text(`You ended up alone but that's okay because you are \n a boss woman.`, width / 2, height / 2 - 250);
  pop();
}

//displays the tutorial button on the title page
function displayTutorialButton(){
  image(tutorialButton.image, tutorialButton.x, tutorialButton.y, tutorialButton.size, tutorialButton.size);
}

//displays the next button
function displayNextButton(){
  image(nextButton.image, nextButton.x, nextButton.y, nextButton.size, nextButton.size);
}

//displays the ok button on the minigame tutorial states
function displayOkButton(){
  image(okButton.image, okButton.x, okButton.y, okButton.size, okButton.size);
}

//displays mail icon for the phone
function displayMailIcon(){
  image(mailIcon.image, mailIcon.x, mailIcon.y, mailIcon.size, mailIcon.size);
}

//displays the mail red alert
function displayMailAlert(){
  fill(158, 45, 25);
  circle(mailAlert.x, mailAlert.y, mailAlert.size);
}


//keyboard input
function keyPressed() {

  if (state === `start`) {
    if (keyCode === 32) { // keycode for spacebar
      state = `title`
      titleMusic.loop(); //plays the title music after the start state
    }
  }
  if (state === `title`) {
    if (keyCode === 13) { //keycode for ENTER
      state = `page01`;

      if (titleMusic.isPlaying()) {
        titleMusic.stop(); //stops the title music at page01
        mainMusic.loop(); //plays the main music as of page01
      }
    }
  }
  if (state === `tutorial`) {
    if (keyCode === 8) { // keycode for backspace
      state = `title`;
    }
  }

  if (state === `page02`) {
    if (keyCode === 65) { // keycode for letter A
      state = `musicRoom`;
      startTypeWriter(musicRoomSentence); //starts the typewriter after A is clicked
    } else if (keyCode === 66) { //keycode for letter B
      state = `photographyRoom`;
      startTypeWriter(photographyRoomSentence); //starts the typewriter after B is clicked
    }
  }

  if (state === `photographyRoom`) {
    if (keyCode === 89) { //keycode for the letter Y
      state = `pictureTime`;
    } else if (keyCode === 78) { //keycode for the letter N
      state = `notPictureTime`;
      startTypeWriter(notPictureTimeSentence); //starts the typewriter after N is clicked

    }
  }
  if (state === `musicRoom`) {
    if (keyCode === 89) { //keycode for the letter Y
      state = `musicTime`;
      startTypeWriter(musicTimeSentence);
      musicTimeMusic.loop(); //Edwards song starts playin
      if (mainMusic.isPlaying()) {
        mainMusic.stop(); //stops the main music when Edward shows you his song
      }
    } else if (keyCode === 78) { //keycode for the letter N
      state = `notMusicTime`;
      startTypeWriter(notMusicTimeSentence);
    }
  }

  if (state === `loveLetter01`) {
    if (keyCode === 65) { //keycode for the letter A
      state = `minigame02Tutorial`;
      mainMusic.loop(); //loops the main music when you get to the tutorial of mingame02
      if (suspenseMusic.isPlaying()) {
        suspenseMusic.stop();//stops the suspense music
      }
    } else if (keyCode === 66) { // keycode for the letter B
      state = `minigame01Tutorial`;
      mainMusic.loop(); //loops the main music when you get to the tutorial of mingame01
      if (suspenseMusic.isPlaying()) {
        suspenseMusic.stop(); //stops the suspense music
      }
    }
  }

  if (state === `loveLetter02`) {
    if (keyCode === 65) { //keycode for the letter A
      state = `minigame01Tutorial`;
      mainMusic.loop(); //loops the main music when you get to the tutorial of mingame01
      if (suspenseMusic.isPlaying()) {
        suspenseMusic.stop(); //stops the suspense music
      }
    } else if (keyCode === 66) { // keycode for the letter B
      state = `minigame02Tutorial`;
      mainMusic.loop(); //loops the main music when you get to the tutorial of mingame02
      if (suspenseMusic.isPlaying()) {
        suspenseMusic.stop(); //stops the suspense music
      }
    }
  }
}


//function to click buttons to change states
function mousePressed() {

  //click tutorial button on the title page
  let d = dist(mouseX, mouseY, tutorialButton.x, tutorialButton.y);
  if (state === `title`) {
    if (d < tutorialButton.size / 2 - 60) { // -60 is added so the mouse only clicks on the button and not dead space around it
      state = `tutorial`;
    }
  }
  //click next button on page01
  let d2 = dist(mouseX, mouseY, nextButton.x, nextButton.y);
  if (state === `page01`) {
    if (d2 < nextButton.size / 2 - 20) {
      state = `page02`;
    }
  }
  //click the mail alert dot on phone01 and phone02
  let d3 = dist(mouseX, mouseY, mailAlert.x, mailAlert.y);
  if (state === `phone01`) {
    if (d3 < mailAlert.size / 2) {
      state = `loveLetter02`;
    }
  }
  else if (state === `phone02`) {
    if (d3 < mailAlert.size / 2) {
      state = `loveLetter01`;
    }
  }
  //click the ok button minigame01Tutorial and minigame02Tutorial
  let d4 = dist(mouseX, mouseY, okButton.x, okButton.y);
  if (state === `minigame01Tutorial`) {
    if (d4 < okButton.size / 2 - 20) {
      state = `minigame01`;
    }
  }
  else if (state === `minigame02Tutorial`) {
    if (d4 < okButton.size / 2 - 20) {
      state = `minigame02`;
    }
  }
}

//Madeline helped with this CODE
//functions to add a typewriter effect to the text like in most visual novels
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
