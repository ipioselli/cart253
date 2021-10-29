class Branch4{
  constructor(w, h, x, y){
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
  }

  display(){
    push();
    fill(102, 71, 39);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
