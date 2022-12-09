function setup() {
  
    createCanvas   (windowWidth, windowHeight);
    
    rectMode(CENTER);
}

function draw() {
  
    background(0);
    translate
    (width/2, height/2);
    
    //soleil
    push();
    rotate( millis() /1000);
    fill(255, 255, 0);
    rect(0, 0, 400, 400);
    pop();
    
    //système Terre
    //Terre
    push();
    rotate( millis() /1500)
    translate(300, 0);
    rotate( millis() /2000);
    fill(0, 125, 255);
    rect(0, 0, 100, 100);
    
    //Lune
    translate(300, 0);
    rotate( millis() /4000);
    fill(55, 55, 55);
    rect(0, 0, 60, 60);
    pop();
    
    //Mars
    push();
    rotate( millis() /1500);
    translate(900, 0);
    rotate( millis() /750)
    fill(255, 0, 0);
    rect(0, 0, 100, 100);
    pop()
    
    //Jupiter
    push();
    rotate( millis() /3000);
    translate(1600, 0);
    rotate( millis() /2500);
    fill(100, 125, 55);
    rect(0, 0, -200, -200);
    pop();
    
    //Neptune
    push();
    rotate( millis() /2000);
    translate(-1100, 0);
    rotate( millis() /3000)
    fill(55, 150, 125);
    rect(0, 0, 125, 125);
           
           
    
    

    
}