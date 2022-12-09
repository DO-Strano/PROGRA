function setup() {
  
createCanvas(windowWidth,windowHeight);    
}

function draw() {
  background(13, 5, 45);
  stroke(random(255), random(255), random(255))
  let counter = 0
  while(counter < 100){ 
  morningStar(noise(1, counter) * (width),            
  noise(2, counter) * (height),
  noise(3, counter) * 5, 
  noise(4, counter) * 5);
  counter++
  }
} 

function morningStar(x, y, w, h){
    push()
    translate(x, y) 
    if(frameCount%5==0){
        line(-w/2, 0, w/2, 0);
    }else{
        line(0, -h/2, 0, h/2);
    }
    pop();
}