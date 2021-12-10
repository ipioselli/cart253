/**
User02 class
This is a class to create the user for minigame02
This is a class to create the second user for the minigame2
The user must navigate through the maze and choose 1 of the 3 doors to see if their soulmate
is behind one of those doors.
This class allows the user to be moved, displayed, handle keyboard input,
and check if it has been hit by the doors and maze walls
*/


class User02 {

  constructor(x, y, image) {
    //position
    this.x = x;
    this.y = y;

    //size
    this.size = 60;

    //velocity
    this.vx = 0;
    this.vy = 0;

    //image
    this.image = image;
    //speed
    this.speed = 5;

    //check if each door is opened
    this.door01Opened = true; //check if you opened the first door
    this.door02Opened = true; //check if you opened the second door
    this.door03Opened = true; // check if you opened the third door
  }

  //function to move the user
  move() {

    this.x = this.x + this.vx; //move the user on the x-axis
    this.y = this.y + this.vy; //move the user on the y-axis

    //constrains the user to the width and height of the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

  }

  //function to check if the user hit any of the maze walls
  //the velocity will be set to 0 if you hit the walls to prevent you from going into them
  hit(wall) {

    if (this.x + this.size / 2 > wall.x - wall.width / 2 &&
      this.x - this.size / 2 < wall.x + wall.width / 2 &&
      this.y + this.size / 2 > wall.y - wall.height / 2 &&
      this.y - this.size / 2 < wall.y + wall.height / 2) {

      this.x = this.x - this.vx;
      this.y = this.y - this.vy;

      this.vx = 0; // sets x velocity to 0
      this.vy = 0; // sets y velocity to 0

    }
  }

  //keyboard input with arrow keys
  handleInput() {

    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
  }

  //check if the first door is opened
  checkOpenedDoor01(door01) {

    let d = dist(this.x, this.y, door01.x, door01.y);
    if (d < this.size / 2 + door01.size / 2 - 40) {
      this.door01Opened = false;
    }
  }


  //check if the second door is opened
  checkOpenedDoor02(door02) {

    let d = dist(this.x, this.y, door02.x, door02.y);
    if (d < this.size / 2 + door02.size / 2 - 40) {
      this.door02Opened = false;
    }
  }

  //check if the third door is opened
  checkOpenedDoor03(door03) {

    let d = dist(this.x, this.y, door03.x, door03.y);
    if (d < this.size / 2 + door03.size / 2 - 40) {
      this.door03Opened = false;
    }
  }

  //displays the user with an image
  display() {
    push();
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}
