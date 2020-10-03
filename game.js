var canvas = document.getElementById('game_container');
var cxt = canvas.getContext('2d');

// Var declarations
var px = 10;
var py = 10;
var gs = 20;
var tc = 20;
var ax = 15;
var ay = 15;
var xv = 0;
var xy = 0;

var trail = [];
var tail = 5;

function game() {
  px += xv;
  py += xy;

  if (px < 0) {
    px = tc - 1;
  }
  if (px > tc - 1) {
    px = 0;
  }
  if (py < 0) {
    py = tc - 1;
  }
  if (py > tc - 1) {
    py = 0;
  }

  cxt.fillStyle = 'black';
  cxt.fillRect(0, 0, canvas.width, canvas.height);

  cxt.fillStyle = 'white';
  trail.forEach((item) => {
    cxt.fillRect(item.x * gs, item.y * gs, gs - 2, gs - 2);
    if (item.x === px && item.y === py) {
      tail = 5;
    }

  });

  trail.push({ x: px, y: py });
  while (trail.length > tail) {
    trail.shift()
  }

  if (ax === px && ay === py) {
    tail++;
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }

  cxt.fillStyle = 'red';
  cxt.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
};

function keyListener(evt) {
  switch (evt.keyCode) {
    case 37:
      xv = -1;
      xy = 0;
      break;
    case 38:
      xv = 0;
      xy = -1;
      break;
    case 39:
      xv = 1;
      xy = 0;
      break;
    case 40:
      xv = 0;
      xy = 1;
      break;
  }
};

document.addEventListener('keyup', keyListener);
setInterval(game, 1000 / 15);
