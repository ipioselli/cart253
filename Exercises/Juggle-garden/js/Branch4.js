class Branch4{
  constructor(w, h, x, y){

    //size
    this.width = w;
    this.height = h;

    //position
    this.x = x;
    this.y = y;
  }

//displays the branch
  display(){
    push();
    fill(102, 71, 39);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
