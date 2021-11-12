class Lover{

  constructor(x, y,){
    this.x = x;
    this.y = y;
    this.size = 80;
    this.vx = 0;
    this.vy = 0;
    this.speed = 10;
  }

  move(){

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

    if(this.x >= width || this.x <=0){
      this.vx = -this.vx;
    }
    if(this.y >= height || this.y <=0){
      this.vy = -this.vy;
    }
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);

  }

  display(){
    push();
    fill(67, 78, 20);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
