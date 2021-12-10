/**
Maze class
This is a class to create the walls of the maze for minigame02
This class allows the walls to be displayed
*/
class Mazewalls {
  constructor(x, y, w, h) {

    //size
    this.width = w;
    this.height = h;

    //position
    this.x = x;
    this.y = y;
  }

  //displays the maze walls
  display() {
    push();
    fill(255, 255, 255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
