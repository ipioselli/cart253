/**
I like to move it : Exercise 1
Ines Pioselli
*/
/**
Moving shapes exercise
*/

//setup background colour
let bg = {
  r:201,
  b:138,
  g:242,
};

//define circle 1
let circle1 = {
  x: -200,
  y:-300,
  size:150,
  fill: 255,

}

//define circle2
let circle2 = {
  x: 200,
  y:300,
  size:150,
  fill: 255,

}
//define circle3
let circle3 = {
  x: -200,
  y:300,
  size:150,
  fill: 50,
}

//define circle4
let circle4 = {
  x: 200,
  y:-300,
  size:150,
  fill: 50,

}

//define cube
let cube ={
  size:100,
  fill:0,
  r:138,
  b:201,
  g:564,
}

//define torus1
let torus1 = {
x: 100,
y: 20,
fill:0,
alpha:200,
}

//setup for the canvas size
function setup() {
  createCanvas(700, 900, WEBGL);
}

//draws all the shapes
function draw() {
background(mouseX, mouseY, bg.r, bg.g, bg.b)
bg.b = map(circle1.size, 100, width, 0, 255);


//circle 1
circle1.size= mouseX;
circle1.size = constrain(circle1.size, 0, width);
fill(circle1.fill);
ellipse(circle1.x, circle1.y, circle1.size);

//circle 2
circle2.size= mouseX;
circle2.size = constrain(circle2.size, 0, width);
fill(circle2.fill);
ellipse(circle2.x, circle2.y, circle2.size);

//circle3
circle3.size= mouseX;
circle3.size = constrain(circle3.size, 0, width);
fill(circle3.fill);
ellipse(circle3.x, circle3.y, circle3.size);

//circle4
circle4.size= mouseX;
circle4.size = constrain(circle4.size, 0, width);
fill(circle4.fill);
ellipse(circle4.x, circle4.y, circle4.size);

//torus
push();
rotateX(frameCount * 0.02);
rotateY(frameCount * 0.02);
fill(torus1.fill, torus1.alpha);
torus(torus1.x, torus1.y);
torus1.x = mouseX;
pop();

//cube
push();
rotateX(frameCount * 0.05);
rotateY(frameCount * 0.05);
fill(mouseX, mouseY, cube.r, cube.g, cube.b);
box(cube.size);
pop();


}
