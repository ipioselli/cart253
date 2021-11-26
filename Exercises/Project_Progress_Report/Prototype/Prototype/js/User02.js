class User02{

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
    this.door01 = true; //check if you opened the first door
    this.door02 = true; //check if you opened the second door
    this.door03 = true; // check if you opened the third door
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
  checkOpenedDoor01(Door01){

    let d = dist(this.x, this.y, door01.x, door01.y);
    if(d < this.size + door01.size){
      this.door01 = false;
    }
  }

  //check if the user hit the ball
    checkOpenedDoor01(Door02){

      let d = dist(this.x, this.y, door02.x, door02.y);
      if(d < this.size + door02.size){
        this.door02 = false;
      }
    }

    checkOpenedDoor01(Door02){

      let d = dist(this.x, this.y, door02.x, door02.y);
      if(d < this.size + door02.size){
        this.door02 = false;
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
