let x, y, vx, vy, t, ax, ay;

// x = x0 + v * t;
// 거리 = 속력 * 시간

const width = 1200;
const height = 1200;

export function setup() {
  createCanvas(width, height);
  x = 300;
  y = 900;
  vx = 50;
  vy = 50;
  ax = 0;
  ay = -9.8;
}

const T = 1 / 60;
export function draw() {
  vx += ax * T;
  vy += ay * T;
  x += vx * T;
  y += vy * T;
  background(255, 255, 255);
  fill(100, 100, 100);
  circle(x, height - y, 20);
}
