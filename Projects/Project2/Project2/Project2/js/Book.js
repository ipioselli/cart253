class Book{

constructor(x, y, w, h, image){

  this.x = x;
  this.y = y;

  this.width = w;
  this.height = h;

  this.image = image;
  //this.size = 100;

}


//displays the seaweed
display(){
  push();
      fill(255, 50, 50);
      stroke(0);
      image(this.image, this.x, this.y, this.width, this.height);
      pop();
    }
}
