class User{

  constructor(x, y){
    //position
    this.x = x;
    this.y = y;
    //size
    this.size = 100;
    //velocity
    this.vx = 0;
    this.vy = 0;
    //speed
    this.speed = 5;
    this.foundLover = true; //check if you found your lover
    this.ballHit = true; //check if the ball hit you
  }

//function to move the user
  move(){

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

  }

//keyboard input
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

  //check if the user hit their lover
  checkHit(lover){

    let d = dist(this.x, this.y, lover.x, lover.y);
    if(d < this.size + lover.size){
      this.foundLover = false;
    }
  }

  //check if the user hit the ball
    checkHitBall(ball){

      let d = dist(this.x, this.y, ball.x, ball.y);
      if(d < this.size + ball.size){
        this.ballHit = false;
      }


  }

//displays the user
  display(){
    push();
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
