var xLoc, yLoc, xSpd, ySpd;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  xLoc = 200;
  yLoc = 400;
  xSpd = -1;
  ySpd = 1;

}

function draw() {
	background(255);
	fill(3, 3, 3, 3);
	rect(0,0,width, height);
	fill(200, 130, 150);
	xLoc = xLoc + xSpd;
	yLoc = yLoc + ySpd;
     rect(xLoc, yLoc, 30, 30);
}
