let alto=800;
let ancho =800;
let lenVariation=0.7;
//color colorArbol = new color(234,137,154);

function setup() {
  createCanvas(ancho, alto);
}

function draw() {
  background(40);
  angle = PI/10;
  stroke(234,137,154);
  strokeWeight(1.5);
  translate(ancho/2,alto);
  branch(100);

}

function branch(posY){
  line(0,0,0,-posY);
  translate(0,-posY);

  lenVariation = random(0.5,0.9);
  if(posY>1){
    push();
    rotate(angle);
    branch(posY*lenVariation);
    pop();

    push();
    rotate(-angle);
    branch(posY*lenVariation);
    pop();
  }
  print("Coeficiente de variación: "+lenVariation);
}