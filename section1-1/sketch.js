function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(178, 100, 162);
  triangle(12,120,116,120,116,10);
  fill(94, 185, 84);
  circle(0,108,106,108,100,0);
  fill(254);
  textSize(32);
  textFont("serif");
  text("50", 68, 100);
}
