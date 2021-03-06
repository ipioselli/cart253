class User02{

  constructor(x, y){
    //position
    this.x = x;
    this.y = y;
    //size
    this.size = 30;
    //velocity
    this.vx = 0;
    this.vy = 0;
    //speed
    this.speed = 5;
    this.door01Opened = true; //check if you opened the first door
    this.door02Opened = true; //check if you opened the second door
    this.door03Opened = true; // check if you opened the third door
  }

//function to move the user
  move(){

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

  }

  bounce(door){

    if(this.x > door.x - door.width/2 -10  && this.x < door.x + door.width/2 &&
    this.y + this.size/2  > door.y - door.height/2 &&
    this.y - this.size/2 < door.y + door.height/2 ){

      //let dx = this.x - door.x;
      //let dy = this.y - door.y;
      //this.vx = this.vx + map(dx, -door.width/2, door.width/2, -5, 5);
      //this.vy = this.vy + map(dy, -door.width/2, door.width/2, -2, 2);

      this.speed = this.speed *-1;
    }
    else{
      this.speed = 5;
    }





      //bounce off the wall
      //this.vy = -this.vy;
      //this.vx = -this.vx;






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
  checkOpenedDoor01(door01){

    let d = dist(this.x, this.y, door01.x, door01.y);
    if(d < this.size + door01.size -50){
      this.door01Opened = false;
    }
  }

  //check if the user hit the ball
    checkOpenedDoor02(door02){

      let d = dist(this.x, this.y, door02.x, door02.y);
      if(d < this.size + door02.size - 50){
        this.door02Opened = false;
      }
    }

    checkOpenedDoor03(door03){

      let d = dist(this.x, this.y, door03.x, door03.y);
      if(d < this.size + door03.size - 50){
        this.door03Opened = false;
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
