let menuHeight = 400;
let isOpen = false;
let targetY, currentY,botaoYMin,botaoY;

let menuWidth = 400;
let isOpen2 = false;
let targetX, currentX,botaoXMax,botaoX;

let menuHeight2 = 400;
let isOpen3 = false;
let targetY2 = 400;
let currentY2 = targetY2;
let botaoY2=targetY2-40
let botaoYMax=targetY2

let menuWidth2 = 400;
let isOpen4 = false;
let targetX2 = 0;
let currentX2 = targetX2;
let botaoX2=targetX2
let botaoXMax2=targetX2+40

function setup() {
  createCanvas(400, 400);
  targetY = 0;
  currentY = targetY;
  botaoYMin=targetY
  botaoY=targetY+40
  
  targetX = 400;
  currentX = targetX;
  botaoX=targetX-40
  botaoXMax=targetX
}

function draw() {
  background(220);
  slideLadoL()
  slideCima();
  slideLadoR()
  slideBaixo()
  
}

function mouseClicked() {
  if((mouseX>=360&&mouseX<=400&&mouseY>=botaoYMin&&mouseY<=botaoY)&&!isOpen2&&!isOpen3&&!isOpen4){
  isOpen = !isOpen;
  
  if (isOpen) {
    targetY = height; // Abre o menu (posição totalmente acima)
    botaoYMin=targetY-40
  botaoY=targetY
  } else {
    targetY = 0; // Fecha o menu (posição totalmente abaixo)
    botaoYMin=targetY
  botaoY=targetY+40
  }}
  
    if ((mouseX >= botaoX && mouseX <= botaoXMax && mouseY >= 360 && mouseY <= 400)&&!isOpen&&!isOpen3&&!isOpen4) {
    // Abre ou fecha o menu com base no seu estado atual
    isOpen2 = !isOpen2;
    
    // Atualiza a posição de destino do menu
    if (isOpen2) {
      targetX = 0; // Abre o menu
      botaoX=targetX
      botaoXMax=targetX+40
    } else {
      targetX = width; // Fecha o menu
      botaoX=targetX-40
      botaoXMax=targetX
    }
  }

  if ((mouseX >= 0 && mouseX <= 40 && mouseY >= botaoY2 && mouseY <= botaoYMax)&&!isOpen2&&!isOpen&&!isOpen4) {
    // Abre ou fecha o menu com base no seu estado atual
    isOpen3 = !isOpen3;
    
    // Atualiza a posição de destino do menu
    if (isOpen3) {
      targetY2 = 0; // Abre o menu
      botaoY2=targetY2
      botaoYMax=targetY2+40
    } else {
      targetY2 = 400; // Fecha o menu
      botaoY2=targetY2-40
      botaoYMax=targetY2
    }
  }
  
  if ((mouseX >= botaoX2 && mouseX <= botaoXMax2 && mouseY >= 0 && mouseY <= 40)&&!isOpen&&!isOpen2&&!isOpen3) {
   
    isOpen4 = !isOpen4;

    if (isOpen4) {
      targetX2 = 400;
      botaoX2=targetX2-40
      botaoXMax2=targetX2
    } else {
      targetX2 = 0;
      botaoX2=targetX2
      botaoXMax2=targetX2+40
    }
  }
}

function slideCima() {
  currentY = lerp(currentY, targetY, 0.09);
  
  fill(200);
  rect(0, 0, width, currentY);
  fill(0);
  
  push();
  textSize(25);
  text("Menu Teste", 130, currentY / 2);
  pop();
  push()
  if(!isOpen)
  directions="DWN"
  else directions="UP"
  translate(115,currentY/4.7)
  scale(0.7)
  dirIcon(directions,360,currentY)
  pop()
}
function slideLadoR(){
  
  currentX = lerp(currentX, targetX, 0.09);

  fill("#780B0B");
  rect(currentX, 0, menuWidth, height);
  fill(0)
  
  push()
  if(!isOpen2)
  directions2="LFT"
  else directions2="RGT"
 translate(currentX/4.8,0)
  scale(0.7)
  dirIcon(directions2,currentX,520)
  pop()
  push()
  textSize(25)
  text("Menu Teste",currentX+130,50)
  pop()
}
function slideBaixo(){
 
  currentY2 = lerp(currentY2, targetY2, 0.2);

  fill(200);
  rect(0, currentY2, width, menuHeight2);
  fill(0)
  
  push()
  if(!isOpen3)
  directions3="UP"
  else directions3="DWN"
  translate(0,currentY2/5)
  scale(0.7)
  dirIcon(directions3,0,currentY2)
  pop()
  push()
  textSize(25)
  text("Menu Teste",130,currentY2+50)
  pop()
}
function slideLadoL(){

  currentX2 = lerp(currentX2, targetX2, 0.2);

  fill(200);
  rect(currentX2, 0, menuWidth2, height);
  fill(0)
  
  push()
  if(!isOpen4)
  directions4="RGT"
  else directions4="LFT"
 translate(currentX2/4.8,0)
  scale(0.7)
  dirIcon(directions4,currentX2,0)
  pop()
  push()
  textSize(25)
  text("Menu Teste",currentX2-270,50)
  pop()
}