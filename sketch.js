var myData;
var Y_AXIS = 2;

//var x1 = 110;
//var x1f = 130;

//var x1 = 110;
//var x1f = 130;
var x2 = 220;
var x2f = 240;
var x3 = 330;
var x3f = 350;
var x4 = 440;
var x4f = 460;
var x5= 550;
var x5f = 570;
var x6 = 660;
var x6f= 680;
var x7=770;
var x7f= 790;
var x8= 880;
var x8f = 900;
var x9= 990;
var x9f= 1010;
var x10= 1100;
var x10f = 1120;
var x11= 1210;
var x11f= 1230;

var ygen= 180;


function preload() {
    myData = loadJSON('assets/ds523.json');
  }

var balls = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < myData.daticonsumi.length; i++ ){
    var astro = myData.daticonsumi[i];

    var x = astro.posizione*110;
    var y = 180;
    var d = astro.consumo*5;
    var l = astro.anno;



    var newBall = new Ball(x, y, d, l);
    balls.push(newBall);

    console.log(astro);
  };

  c1 = color(204, 221, 255);
  c2 = color(0, 77, 230);


}


function draw() {
	background(204, 221, 255);
	for(var j = 0; j < balls.length; j++) {
		balls[j].move();
		balls[j].display();

	}

  textAlign(LEFT);
    textSize(32);
    textStyle(BOLD);
    textFont('Oswald');
  text('Metri cubi di acqua fatturati per uso domestico in Italia dal 2000 al 2011', 100, 70);

  textSize(12);

textStyle(NORMAL);
  textFont('Arial');
    text('Scorri con il mouse il gradiente a lato per vedere i dati dei consumi in ordine crescente rispetto agli anni', 100, 90);
    //text('Scorri con il mouse', 1020, 50);
  //text('il gradiente per vedere', 1020, 60);
    //text('i dati dei consumi', 1020, 70);
    //text('in ordine crescente', 1020, 80);

  text('Meno consumi', 1255, 40);
text('Più consumi', 1255, 105);




  textFont('Open Sans');
setGradient(width/2+ 500, ygen-150, 30, 80, c1, c2, Y_AXIS);
}


function setGradient(x, y, w, h, c2, c1, axis) {



  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }

}









function Ball(_x, _y, _diameter, _label) {
	// Properties defined by constructor
	this.size = _diameter;
	this.x = _x;
	this.y = _y;
  this.label = _label;
	// Hardcoded properties
	this.color = 'blue';
	this.speed = 2;

	this.yDir = 1;
	this.xDir = 1;


	// Methods

	this.move = function() {


    if(mouseX > width/2+500 && mouseX < width/2 +530 && mouseY > 20 && mouseY < -350 + _diameter) {
      this.color = 'navy';
      textSize(_diameter/20);
      text(this.size, this.x + 10, this.y + _diameter + 30)
      } else {
      this.color = 'blue'
      }





	}

	this.display = function() {
		fill(this.color);
		rect(this.x, this.y, 20, this.size);
    fill(51, 119, 255);
    textAlign(CENTER);


    textSize(22);
    text(this.label, this.x + 10, this.y - 10);




	}
}
