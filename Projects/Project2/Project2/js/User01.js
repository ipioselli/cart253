class User01{

  constructor(x, y, image){
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

    this.image = image;
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
    if(d < this.size/2 + lover.size/2){
      this.foundLover = false;
    }
  }

  //check if the user hit the ball
    checkHitBall(ball){

      let d = dist(this.x, this.y, ball.x, ball.y);
      if(d < this.size/2 + ball.size/2){
        this.ballHit = false;
      }


  }

//displays the user with an image
  display(){
    push();
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}
