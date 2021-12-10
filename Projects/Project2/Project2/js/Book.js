/**
Book class
This is a class to create the books for minigame02
This class allows the ball to be displayed with an image
*/

class Book {

  constructor(x, y, w, h, image) {

    //position
    this.x = x;
    this.y = y;
    //size
    this.width = w;
    this.height = h;
    //image
    this.image = image;

  }

  //displays the book with an image
  display() {
    push();
    noStroke();
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}
