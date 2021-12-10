class Door{

  constructor(x, y, image){

//size
this.size = 150;

//position
this.x = x;
this.y =  y;

//image properties
this.image = image;
  }


  display(){
    push();
    fill(168, 50, 86);
    noStroke();
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}
