class Maze{

  constructor(w, h){

    //size
this.width = w;
this.height = h;

//position
this.x = 0;
this.y =  height - this.height/2;
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
