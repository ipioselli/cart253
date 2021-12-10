/**
Lover class
This is a class to create the lover for minigame01
This class allows the love interest to be displayed with an image
*/
class Lover {
  constructor(x, y, image) {

    //position
    this.x = x;
    this.y = y;
    //size
    this.size = 100;
    //image
    this.image = image;

  }

  //displays the love interest
  display() {
    push();
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}
