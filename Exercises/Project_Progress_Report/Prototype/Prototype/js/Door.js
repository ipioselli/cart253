class Door{

  constructor(x, y, w, h){

    //size
this.width = w;
this.height = h;
this.size = 50;

//position
this.x = x;
this.y =  y;
  }


  display(){
    push();
    fill(168, 50, 86);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, this.size);
    pop();
  }
}
