/**
Door class
This is a class to create the door for minigame02
This class allows door to be displayed with an image
*/
class Door {

  constructor(x, y, image) {

    //size
    this.size = 150;

    //position
    this.x = x;
    this.y = y;

    //image properties
    this.image = image;
  }


  display() {
    push();
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}
