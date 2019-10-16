var inc = 0.01;
var cols, rows;
var scl = 30;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(255);
	cols = floor(width / scl);
	rows = floor(height /scl);
}

function draw(){
	var yoff = 0;
	for(var y = 0; y < rows; y++) {
		var xoff = 0;
		for(var x = 0; x < cols; x++) {
			var index = (x + y * width) * 4;
			var r = noise(xoff, yoff) * 255;
			xoff += inc;
			var col = random(240, 255);
			noStroke();
			fill(col, col * 0.81 + random(0, 5), col * 0.9 + random(0, 20));
			rect(x * scl, y * scl, scl, scl);
		}
		yoff += inc;
	}
}