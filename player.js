var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var step = 20; 
var canvasElementId = 'canvas';
var canvas = document.getElementById(canvasElementId);
canvas.width  = w;
canvas.height = h;
var ctx = canvas.getContext('2d');

var drawBackground = function(ctx, w, h, step) {
    ctx.beginPath(); 
    for (var x=0;x<=w;x+=step) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
    }
    for (var y=0;y<=h;y+=step) {
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
    }
    ctx.stroke(); 

};

var drawPlayer = function(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x,y,40,0,2*Math.PI,true);
    ctx.stroke();
};

drawPlayer(0,0);
drawBackground(ctx, width, height, step);

