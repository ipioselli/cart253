class Volleyball{
  constructor(x, y){

    //position
    this.x = x;
    this.y = y;
    //size
    this.size = 50;
    //velocity
    this.vx = 0;
    this.vy = 0;
    //speed
    this.speed = 10;

  }

//function to move the ball
  move(){

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    //constrains the ball to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

    //makes the ball bounce off the canvas
    if(this.x >= width || this.x <=0){
      this.vx = -this.vx;
    }
    if(this.y >= height || this.y <=0){
      this.vy = -this.vy;
    }

  }


  //displays the ball
  display(){
    push();
    fill(181, 67, 18);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
