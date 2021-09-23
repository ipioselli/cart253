/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(400, 600);
background(144,209, 152);
noStroke();
push();
//draw mona's hair
fill(50, 10, 10);
ellipse(210, 180, 180, 240);


// draw mona's beautiful face
fill(219, 195,114 );
ellipse(200, 150, 120, 160);
pop();

noFill();
stroke(0);
strokeWeight(10);
arc(200, 50, 300, 300, 5.5 * PI / 4+ TWO_PI +PI, 6.5 * PI / 4 + PI, OPEN);

//line(180, 200, 220 , 200);

ellipse(180, 150, 10, 10);
ellipse(220, 150, 10, 10);



}


/**
Description of draw()
*/
function draw() {

}
