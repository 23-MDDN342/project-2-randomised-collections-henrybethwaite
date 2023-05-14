/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  //angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + random(-100,100);
  lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = ['#D28996'] //#F9F7F3

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  strokeWeight(width/6000);

  let w = canvasWidth / 2;
  let h = canvasHeight / 1;

  //road
  fill('#C3B397');
  rect(0,height/1.2,width,height/2)
  //footpath
  fill('#F0ECE5');
  rect(0,height/1.7,width,height/4);
  fill('#E1D9CB');
  rect(0,height/1.195,width,height/26);
  for (let i = 0; i < 1081; i=i+180) {
    fill('#E1D9CB');
    beginShape();
      vertex(-20+i,height/1.7);
      vertex(-18+i, height/1.7);
      vertex(90+i,height/1.195);
      vertex(88+i,height/1.195);
    endShape();
}

  push();
  translate(w/2.5, h/1.8);
  scale(w/50, h/50);
  let face2Length = random(0, 5);
  let eyeLeftX = random(-0.5, 0.5);
  let eyeLeftY = random(-0.5, 0.5);
  let eyeRightX = random(-0.5, 0.5);
  let eyeRightY = random(-0.5, 0.5);
  let mouthWidth = random(0, 2);
  secondFace(face2Length,eyeLeftX,eyeLeftY,eyeRightX,eyeRightY,mouthWidth);
  pop();

  push();
  translate(w/1.2, h/1.69);
  scale(w/50, h/50);
    let faceLength = random(0, 10);
    let faceWidth = random(0,10);
    let noseLength = random(0,3);
    firstFace(faceLength,faceWidth,noseLength);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
