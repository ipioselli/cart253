class User{

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 100;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.foundLover = true;
    this.ballHit = true;
  }

  move(){

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

  }

  handleInput(){

    if(keyIsDown(LEFT_ARROW)){
      this.vx = - this.speed;
    }
    else if(keyIsDown(RIGHT_ARROW)){
      this.vx = this.speed;
    }
    else{
      this.vx = 0;
    }

    if(keyIsDown(UP_ARROW)){
      this.vy = -this.speed;
    }
    else if(keyIsDown(DOWN_ARROW)){
      this.vy = this.speed;
    }

    else{
      this.vy = 0;
    }
  }

  checkHit(lover){

    let d = dist(this.x, this.y, lover.x, lover.y);
    if(d < this.size + lover.size){
      this.foundLover = false;
    }
  }

    checkHitBall(ball){

      let d = dist(this.x, this.y, ball.x, ball.y);
      if(d < this.size + ball.size){
        this.ballHit = false;
      }


  }

  display(){
    push();
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
