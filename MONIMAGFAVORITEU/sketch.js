let myfav

function preload(){
 myfav = loadImage("kingbird.jpg");
}
function setup(){
    
 createCanvas ( windowWidth, windowHeight);       
}
function draw(){
    
 background(255, 0, 0); 
 image(myfav, 0, 0, windowWidth, windowHeight);
}