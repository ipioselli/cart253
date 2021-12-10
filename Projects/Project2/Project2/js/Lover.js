class Lover{

  constructor(x, y,){

    //position
    this.x = x;
    this.y = y;
    //size
    this.size = 80;
    //velocity
    this.vx = 0;
    this.vy = 0;
    //speed
    this.speed = 10;
  }

//moves the lover
  move(){

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    //constrain to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

    //allows the user to bounce off the walls
    if(this.x >= width || this.x <=0){
      this.vx = -this.vx;
    }
    if(this.y >= height || this.y <=0){
      this.vy = -this.vy;
    }

  }

//draws the lover
  display(){
    push();
    fill(67, 78, 20);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
