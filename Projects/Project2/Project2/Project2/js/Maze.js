class Maze{

  constructor(x, y, w, h){

    //size
this.width = w;
this.height = h;

//position
this.x = x;
this.y =  y;
  }


  display(){
    push();
    fill(255, 255,255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
