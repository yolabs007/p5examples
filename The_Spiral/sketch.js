radius = 4;
angle = 4;
angle_increament = 10; //lower the number less pixlated spiral
radius_increament = 0.1; // lower the number more packed spiral

var transx = 0;
var transy = 0;

function setup() {
  createCanvas(1600, 800);
  strokeWeight(5);
  background("midnightblue");
  angleMode(DEGREES);
  frameRate(20)
}

function draw() {
  stroke(random(255),random(255),random(255))
  if (frameCount%100==0){
     transx = random(0.25*width,0.75*width);
     transy = random(0.25*height,0.75*height);
    background("midnightblue")
  }
  for(var i=0; i<80;i++){
    push()
  translate(transx, transy);
  rotate(angle);
  point(radius, 0);
  radius += radius_increament;
  angle += angle_increament;
    pop()
}
}