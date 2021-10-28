class User {
  constructor(w, h){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.size = 100;
    this.active = true;
    this.speed = 5;

  }

  move(){
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.x = constrain(this.x , 0, width);
    this.y = constrain(this.y, 0, height);
  }
}
