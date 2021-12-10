/**
Volleyball class
This is a class to create the volleyball for minigame01
This class allows the ball to be displayed, move across the screen on the x-axis
in the opposite direction from the basketball and get displayed with an image
*/

class Volleyball {
  constructor(x, y, image) {

    //position
    this.x = x;
    this.y = y;
    //size
    this.size = 50;
    //velocity
    this.vx = 20;
    //image
    this.image = image;
  }

  //function to move the ball
  move() {
    //moves the basketball along the x-axis
    this.x = this.x + this.vx;

    //constrains the ball to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

    //makes the ball bounce off the canvas only along the x axis
    if (this.x >= width || this.x <= 0) {
      this.vx = -this.vx;
    }
  }


  //displays the volleyball with an image
  display() {
    push();
    noStroke();
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }

}
