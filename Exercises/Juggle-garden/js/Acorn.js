class Acorn{

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    this.active = true;
  }

  gravity(force){
    this.ay = this.ay + force;
  }

  move(){
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    //constrain the velocity
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.y - this.size/2 > height){
      this.active = false;
    }
  }

  bounce(branch) {

    if (this.x > branch.x - branch.width / 2 &&
      this.x < branch.x + branch.width / 2 &&
      this.y + this.size / 2 > branch.y - branch.height / 2 &&
      this.y - this.size / 2 < branch.y + branch.height / 2) {

      let dx = this.x - branch.x;
      this.vx = this.vx + map(dx, -branch.width/2, branch.width/2, -2, 2 );
      //Bounce
      this.vy = -this.vy;
      this.ay = 0;

  }
}

  display(){
    push();
    fill(255, 50, 50);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
