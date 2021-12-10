class Lover{

  constructor(x, y, image){

    //position
    this.x = x;
    this.y = y;
    //size
    this.size = 100;

    this.image = image;

  }



//draws the lover
display(){
  push();
  image(this.image, this.x, this.y, this.size, this.size);
  pop();
}
}
