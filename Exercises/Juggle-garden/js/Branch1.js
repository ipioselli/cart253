class Branch1{

constructor(w,h){

//size
this.width = w;
this.height = h;

//position
this.x = 0;
this.y =  height - this.height/2;

//velocity
this.vx = 0;
this.vy = 0;
this.speed = 15;
}


//function the move the branch
move(){

this.x = this.x + this.vx;

//keyboard input from the user
  if(keyIsDown(LEFT_ARROW)){
    this.vx = -this.speed;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    this.vx = this.speed;
  }
  else{
    this.vx = 0;
  }
}

//displays the branch
display(){
  push();
  fill(66, 50, 39);
  noStroke();
  rectMode(CENTER);
  rect(this.x, this.y, this.width, this.height);
  pop();
}
}
