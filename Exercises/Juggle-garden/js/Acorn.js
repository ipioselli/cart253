class Acorn{

  constructor(x, y, image){

    //position
    this.x = x;
    this.y = y;
    //velocity
    this.vx = 0;
    this.vy = 0;
    //acceleration
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    //size of the acorn
    this.size = 100;
    //the image for the acorn
    this.image = image;
    //check if its on screen
    this.active = true;


  }
  //gravity force to the acceleration
  gravity(force){
    this.ay = this.ay + force;
  }

  move(){
    //update velocity with acceleration
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    //constrain the velocity
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    //update the position with velocity
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    //check if the acorn is at the bottom of the canvas
    if (this.y - this.size/2 > height){
      this.active = false; // offscreen

    }
  }

  bounce(branch) {

    //checks overlap of the acorn with the branches
    if (this.x > branch.x - branch.width / 2 &&
      this.x < branch.x + branch.width / 2 &&
      this.y + this.size / 2 > branch.y - branch.height / 2 &&
      this.y - this.size / 2 < branch.y + branch.height / 2) {

      //calculate the distance between the center of the acorn and the center of the branch
      let dx = this.x - branch.x;
      this.vx = this.vx + map(dx, -branch.width/2, branch.width/2, -2, 2 );

      //Bounce off the branch
      this.vy = -this.vy;
      this.ay = 0;


  }
}

//displays the acorn
  display(){
    push();
    fill(255, 50, 50);
    stroke(0);
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }

}
