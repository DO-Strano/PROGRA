function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    
}

function draw() { 

background(0);
    fill(255,125,0);
    rect (100, 
          100,
          width - 2 * 100,
          height - 2 * 100);
    
    fill (255, 255, 255)
    textAlign(CENTER, CENTER);
    textSize(100);
    text("bonsoir", width/2, height/2); 
    
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    
}