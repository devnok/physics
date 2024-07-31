const mSun = 322946;
const G = 1 / mSun;
const width = 800;
const height = 800;
const scale = 200;
let year, el;
const cx = width / 2;
const cy = height / 2;
const T = 1 / 60;

// 중력
// GMm / (R^2)
// 구심력
// mv^2 / R
// v = (GM/R)^0.5

class Body {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;

  constructor(radius, mass, color) {
    this.color = color;
    this.mass = mass;
    this.radius = radius;
  }

  display() {
    fill(...this.color);
    circle(cx + this.x * scale, cy + this.y * scale, this.radius * scale);
  }

  update() {
    this.vx += this.ax * T;
    this.vy += this.ay * T;

    this.x += this.vx * T;
    this.y += this.vy * T;

    this.ax = this.ay = 0;
  }

  attract(body) {
    // f = GMm / (r^2)
    let dx = this.x - body.x;
    let dy = this.y - body.y;
    let r = Math.sqrt(dx * dx + dy * dy);

    let f = -(G * this.mass * body.mass) / (r * r);

    let theta = Math.atan2(dy, dx);
    let fx = Math.cos(theta) * f;
    let fy = Math.sin(theta) * f;

    this.ax += fx / this.mass;
    this.ay += fy / this.mass;
  }
}

const sun = new Body(1, mSun, [255, 0, 0]);
const earth = new Body(0.25, 1, [0, 0, 255]);
const mars = new Body(0.25, 1, [0, 255, 0]);

export function setup() {
  createCanvas(width, height);
  earth.x = 1;
  earth.vy = 1;
  mars.x = 1.523;
  mars.vy = 1 / Math.sqrt(1.523);
  year = 0;

  document.getElementById("app").innerHTML =
    '<div><span id="year">0.0</span> year</div>';

  el = document.getElementById("year");
}

export function draw() {
  year = year + T / (2 * Math.PI);
  el.innerHTML = year.toFixed(2);

  earth.attract(sun);
  earth.attract(mars);

  mars.attract(sun);
  mars.attract(earth);

  earth.update();
  mars.update();

  background(255, 255, 255);
  sun.display();
  earth.display();
  mars.display();

  if (Math.abs(mars.x - 1.523) < 1e-4) noLoop();
}
