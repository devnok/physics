let x, y;

export function setup() {
  createCanvas(600, 600);
  x = 300;
  y = 300;
}

export function draw() {
  x = x + 1;
  background(255, 255, 255);
  fill(100, 100, 100);
  circle(x, y, 20);
}
