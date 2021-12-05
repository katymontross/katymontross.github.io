let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('https://katymontross.github.io/images/family-1.png');
}

function setup() {
  createCanvas(720, 400);
  smallPoint = 20;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
