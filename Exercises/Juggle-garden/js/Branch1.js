class Branch1{

constructor(w,h){
this.width = w;
this.height = h;
this.x = 0;
this.y =  height - this.height/2;
this.vx = 0;
this.vy = 0;
this.speed = 15;
}


move(){

this.x = this.x + this.vx;

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

display(){
  push();
  fill(66, 50, 39);
  noStroke();
  rectMode(CENTER);
  rect(this.x, this.y, this.width, this.height);
  pop();
}
}
