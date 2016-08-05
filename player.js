var canvas = document.getElementById('canvas'); /*define canvas*/
var ctx = canvas.getContext('2d'); /*make 2d canvas*/
var fps=25; /*frames per seconds*/
var sprites = {}; /* An Object for all the sprites. Just trust me on the whole object thing please*/
function Sprite(name, x, y,direction) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.direction=direction;
    this.walk = function(steps) { /*walking in the direction the sprite is facing*/
        this.x=(this.x+(Math.sin(this.direction)*steps));/*x for walking*/
        this.y=(this.y+(Math.cos(this.direction)*steps));/*y for walking*/
        return { /*returns the new x and y in a object */
            x:this.x,
            y:this.y
        }
        
    };
    this.turn = function(degrees) {
        this.direction = this.direction + degrees; /*Turn Sprite*/
        while (this.direction>360) {
            this.direction = this.direction - 360
        }
        if (this.direction<0) {
            this.direction=0;
        }
        return this.direction; /*returns the direction*/
    };
    this.pointTo=function(x,y){
      this.direction=(Math.atan2(x - this.x, y - this.y))* (180 / Math.PI)
    };
}

function makeSprite(name, x, y,direction){
    sprites[name]= new Sprite(name, x, y,direction); /* Add spirtes*/
}

/*

Code to load users codes.

*/

onload();/*run onload(); which will be a user command.*/

var code = setInterval(function(){ /*Uses var code so we can have a kill button */
    eval(ucode) /*users code*/
    
 }, 1000/fps); /*set framerate*/

