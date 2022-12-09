let Gradendé;

function setup(){
 createCanvas(windowWidth, windowHeight); 
 Gradendé= Circularité(width, height, 0, 0, 25, 75, 0, 75)
}
  

function draw(){
 background(0, 0, 20);
 image(Gradendé, 0, 0, width, height);   
}


function Linéarité(w, h, r1, v1, b1, r2, v2, b2){
 let Graphics= createGraphics(w, h);
 for(let compteur= 0 ; compteur<height ; compteur++ ){
    let lumino= map(compteur, 0, h, r1, r2);//R
    let lumino2= map(compteur, 0, h, v1, v2);//V
    let lumino3= map(compteur, 0, h, b1, b2);//B
  Graphics.stroke(lumino, lumino2, lumino3); 
  Graphics.line(0, compteur, w, compteur);
}
return Graphics;
}

     
function Circularité(w, h, r1, v1, b1, r2, v2, b2){
 let Graphics= createGraphics(w, h);
   h= h*2;
  Graphics.rectMode(CENTER);  
  Graphics.translate(Graphics.width/2, Graphics.height/2);
 for(let compteur= 0 ; compteur< h ; compteur++ ){
    let lumino= map(compteur, 0, h, r1, r2);//R
    let lumino2= map(compteur, 0, h, v1, v2);//V
    let lumino3= map(compteur, 0, h, b1, b2);//B
  Graphics.fill(lumino, lumino2, lumino3);  
  Graphics.stroke(255, 100);
  Graphics.rotate(0.1);    
  Graphics.ellipse(0, 0, h-compteur, h-compteur);  
}    
 return Graphics;
}


