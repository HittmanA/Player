var canvas = document.getElementById('canvas'); /*define canvas*/
var ctx = canvas.getContext('2d'); /*make 2d canvas*/
var fps=25; /*frames per seconds*/
var ucode; /* Var that will hold users code */
var errorcode; /* Errorcode reported to the user */
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
        this.direction = (this.direction + degrees)%360; /*Turn Sprite*/
        if (this.direction<0){
            this.direction=0;
        }
        return this.direction; /*returns the direction*/
    };
    this.pointTo=function(x,y){
      this.direction=(Math.atan2(x - this.x, y - this.y))* (180 / Math.PI); /* Math to point*/
      return this.direction /* return new direction */
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
  try {
    eval(ucode) /*users code*/
  }
  catch(err) {
    errorcode=err; /* Send error to client */
    clearInterval(code); /* Stop code from running */
  }


 }, 1000/fps); /*set framerate*/
