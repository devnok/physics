let x, y, vx, vy, t, ax, ay;
let bx, by, w, h;

// x = x0 + v * t;
// 거리 = 속력 * 시간

const width = 800;
const height = 800;

export function setup() {
  createCanvas(width, height);
  x = 0;
  y = 100;
  vx = 0;
  vy = 0;
  ax = 0;
  ay = -9.8;
  bx = 0;
  by = 0;
  w = 800;
  h = 100;
}

const T = 1 / 60;
export function draw() {
  vx += ax * T;
  vy += ay * T;
  x += vx * T;
  y += vy * T;

  if (Math.abs(x - bx) <= w / 2 + 10 && Math.abs(y - by) <= h / 2 + 10) {
    vy = -vy;
  }

  // draw
  background(255, 255, 255);
  fill(100, 100, 100);
  circle(width / 2 + x, height / 2 - y, 20);
  fill(0, 0, 0);
  noStroke();
  quad(
    width / 2 + bx - w / 2,
    height / 2 - by + h / 2,
    width / 2 + bx - w / 2,
    height / 2 - by - h / 2,
    width / 2 + bx + w / 2,
    height / 2 - by - h / 2,
    width / 2 + bx + w / 2,
    height / 2 - by + h / 2
  );
}
