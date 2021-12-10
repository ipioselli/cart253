class Basketball{
  constructor(x, y, image){

    //position
    this.x = x;
    this.y = y;
    //size
    this.size = 70;
    //velocity
    this.vx = 12;

    //image
    this.image = image;

  }

//function to move the ball
  move(){

    this.x = this.x + this.vx;

    //constrains the ball to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

    //makes the ball bounce off the canvas
    if(this.x >= width || this.x <=0){
      this.vx = -this.vx;
    }


  }


  //displays the ball
  display(){
    push();
    noStroke();
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }

}
