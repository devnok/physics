let x, y, vx, vy;

const R = 100;
const v = 100;

const width = 1200;
const height = 1200;

const cx = 600;
const cy = 600;

export function setup() {
  createCanvas(width, height);
  x = cx + R;
  y = cy;
}

const T = 1 / 60;
let theta, dx, dy;

export function draw() {
  dx = x - cx;
  dy = y - cy;
  theta = Math.atan2(dy, dx);
  vx = -Math.sin(theta) * v;
  vy = Math.cos(theta) * v;
  x += vx * T;
  y += vy * T;
  background(255, 255, 255);
  fill(100, 100, 100);
  circle(x, height - y, 20);
  fill(100, 100, 100);
  circle(cx, height - cy, 50);
}
