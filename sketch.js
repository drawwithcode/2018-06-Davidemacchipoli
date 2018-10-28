var myData;


function preload() {
    myData = loadJSON('assets/ds523.json');
  }

var balls = [];


function setup() {
	createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < myData.daticonsumi.length; i++ ){
    var astro = myData.daticonsumi[i];

    var x = random(width);
    var y = random(height);
    var d = astro.Consumo + 50;

    var newBall = new Ball(x, y, d);
    balls.push(newBall);

    console.log(astro);
  }


}


function draw() {
	background(200);
	for (var j = 0; j < balls.length; j++) {
		balls[j].move();
		balls[j].display();
	}
}

function Ball(_x, _y, _diameter) {
	// Properties defined by constructor
	this.size = _diameter;
	this.x = _x;
	this.y = _y;
	// Hardcoded properties
	this.color = 'red';
	this.speed = 2;

	this.yDir = 1;
	this.xDir = 1;
	// Methods
	this.move = function() {
		this.x += this.speed * this.xDir;
		this.y += this.speed * this.yDir;

		if (this.y >= height || this.y <= 0) {
			// if 1, set to -1, if -1, set to 1
			this.yDir *= -1;
		}

		if (this.x >= width || this.x <= 0) {
			this.xDir *= -1;
		}
	}

	this.display = function() {
		fill(this.color);
		ellipse(this.x, this.y, this.size);
	}
}
