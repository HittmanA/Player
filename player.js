var canvas = document.getElementById('canvas'); /*define canvas*/
var ctx = canvas.getContext('2d'); /*make 2d canvas*/
var fps=25; /*frames per seconds*/
var sprites = []; /* An Array for all the sprites*/
function Sprite(name, x, y,direction) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.direction=direction;
    this.walk = function(steps) { /*walking in the direction the sprite is facing*/
        this.x=(this.x+(Math.sin(this.direction)*steps));/*x for walking*/
        this.y=(this.y+(Math.cos(this.direction)*steps));/*y for walking*/
        
    };
}
/*

Code to load users codes.

*/

onload();/*run onload(); which will be a user command.*/

var code = setInterval(function(){ /*Uses var code so we can have a kill button */
    eval(ucode) /*users code*/
    
 }, 1000/fps); /*set framerate*/

