let x, y, x0, y0, vx, vy, t;

// x = x0 + v * t;

export function setup() {
  createCanvas(600, 600);
  x0 = 300;
  y0 = 300;
  vx = 20;
  vy = -10;
  t = 0;
}

export function draw() {
  t = t + 1 / 60;
  x = x0 + vx * t;
  y = y0 + vy * t;
  background(255, 255, 255);
  fill(100, 100, 100);
  circle(x, y, 20);
}
