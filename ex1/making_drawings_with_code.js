alert('js running');
const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

if (ctx) Error('2D drawing supported');

function draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.ellipse(200, 200, 300, 350, 1, 0, 0, false);
    ellipse(200, 200, 300, 350);
}

background(0, 0, 0);