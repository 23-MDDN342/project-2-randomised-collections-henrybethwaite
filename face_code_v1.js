function firstFace(faceLength,faceWidth,noseLength) {
//----------------------! ground shadow !-----------------------------------

noStroke();
fill(60,60,60,30);
ellipse(0,9.6,8.5+faceWidth,1.5);

//----------! main body !-------------------------------------- 
  
  fill('#0FA3B1');
    arc(0,5.15-faceLength,10+faceWidth,10,PI,0);
    rect(-5-faceWidth/2,5.1,10+faceWidth,0-faceLength);
    arc(0,5,10+faceWidth,10,0,PI);  

//-----------! main body, shadows !------------------------------

  fill('#0C8B97');
//--rectangle shadow
    rect(-5-faceWidth/2,5.1,3,0-faceLength);
//--top curve shadow
    beginShape();
      curveVertex(-2-faceWidth/3,-20);
      curveVertex(-5-faceWidth/2,5);
      curveVertex(0,10);
      curveVertex(-2-faceWidth/2,5);
      curveVertex(0-faceWidth/3,-22);
    endShape();
//--bottom curve shadow
    beginShape();
      curveVertex(0-faceWidth/3,28-faceLength);
      curveVertex(-5-faceWidth/2,5.15-faceLength);
      curveVertex(0/2,0.15-faceLength);
      curveVertex(-2-faceWidth/2,5.15-faceLength);
      curveVertex(0-faceWidth/2,22-faceLength);
    endShape();

//----------! eye shadows !------------------------------------- 

//back eye
    ellipse(2.8+faceWidth/2,4.2-faceLength,5);
//front eye
    ellipse(-0.2+faceWidth/2,5.2-faceLength,5);

//----------! nose shadows !------------------------------------- 

//regular nose shadow
    ellipse(2.3+faceWidth/2,6.7-faceLength,3);
  if(faceLength>3){
//long nose rectangle shadow
      rect(0.8+faceWidth/2,6.7-faceLength,3,0+noseLength);
//long nose curve shadow
      ellipse(2.3+faceWidth/2,6.7-faceLength+noseLength,3);
  }

//----------! back eyeball !------------------------------------- 

  fill(255);
//back eyeball white
    ellipse(3+faceWidth/2,4-faceLength,5)  
  fill(60);
//back eyeball pupil 
    ellipse(4.25+faceWidth/2,4-faceLength,2,3);

//---------------------! nose !------------------------------

//nose
  fill('#EEC6CA');
    ellipse(2.5+faceWidth/2,6.5-faceLength,3);

//long nose curve shadow short body  
    fill('#E3A1A7');  
    beginShape();
      curveVertex(2+faceWidth/2,(-0.5-faceLength));
      curveVertex(1+faceWidth/2,(6.5-faceLength));
      curveVertex(2.5+faceWidth/2,8-faceLength);
      curveVertex(2+faceWidth/2,(6.5-faceLength));
      curveVertex(3+faceWidth/2,(-0.5-faceLength));
    endShape();

  if(faceLength>3){
    fill('#EEC6CA');
//long nose end
      ellipse(2.5+faceWidth/2,6.5-faceLength+noseLength,3);
//long nose body
      rect(1+faceWidth/2,6.5-faceLength,3,0+noseLength);

    fill('#E3A1A7');
//long nose body shadow      
      rect(1+faceWidth/2,6.5-faceLength,1,0+noseLength);

//long nose curve shadow    
    fill('#E3A1A7');  
    beginShape();
      curveVertex(2+faceWidth/2,(-0.5-faceLength)+noseLength);
      curveVertex(1+faceWidth/2,(6.5-faceLength)+noseLength);
      curveVertex(2.5+faceWidth/2,8-faceLength+noseLength);
      curveVertex(2+faceWidth/2,(6.5-faceLength)+noseLength);
      curveVertex(3+faceWidth/2,(-0.5-faceLength)+noseLength);
    endShape();
  }

//---------------------! front eyeball !------------------------------
  
  fill(255);
//front eyeball white
    ellipse(0+faceWidth/2,5-faceLength,5)  
  fill(60);
//front eyeball pupil
    ellipse(1.1+faceWidth/2,5-faceLength,2,3);

}

/*  ----------------------------------------------------------------------
    |                                                                    |
    |                            face two                                |
    |                                                                    |
    ----------------------------------------------------------------------  */

function secondFace(face2Length,eyeLeftX,eyeLeftY,eyeRightX,eyeRightY,mouthWidth) {

//----------------------! ground shadow !-----------------------------------

push();
noStroke();
fill(60,60,60,30);
translate(3.5,6.85)
rotate(PI/10);
shearX(PI/-2.8);
rect(0,0,5,4,1);
pop();

//----------------------! legs !-----------------------------------

//left leg
  fill('#3E6680');
  noStroke();
    rect(-2,5-face2Length,2,3+face2Length);  
    ellipse(-0.4,8.3,2.9,1);
    rect(-1.99,7.9,2,0.5);
  beginShape();
    curveVertex(-1.5,6);
    curveVertex(-2,8);
    curveVertex(-1.55,8.8);
    curveVertex(1.25,9.5);
    curveVertex(0.88,8.07);
    curveVertex(-2.5,7);
  endShape();

//right leg
    rect(2,3.5-face2Length,2,3+face2Length);  
    ellipse(3.6,6.8,2.9,1);
    rect(2.01,6.4,2,0.5);
  beginShape();
    curveVertex(2.5,4.5);
    curveVertex(2,6.5);
    curveVertex(2.45,7.3);
    curveVertex(5.25,8);
    curveVertex(4.88,6.57);
    curveVertex(1.5,5.5);
  endShape();

//----------------------! legs shading !-----------------------------------

//right leg shading
  fill('#35576E');

  beginShape();
    vertex(2,5-face2Length);
    vertex(2,7-face2Length);
    vertex(4,6.5-face2Length);
    vertex(4,5-face2Length);
  endShape();

//left leg shading
    ellipse(-1.1,7-face2Length,1.8);
  beginShape();
    vertex(0,6-face2Length);
    vertex(0,7.6-face2Length);
    vertex(-0.7,7.83-face2Length);
    vertex(-1,5-face2Length)
  endShape();
  beginShape();
    vertex(-1.5,7.8-face2Length);
    vertex(-2,7.5-face2Length);
    vertex(-2,6-face2Length);
  endShape();

//----------------! main body rounded corners !----------------------- 

  noStroke();
  fill('#3E6680'); //#C8E087
//bottom left corner
  ellipse(-5.15,4.21-face2Length,1.7);
//bottom middle corner
  ellipse(-0.99,5.96-face2Length,2.2);
//bottom right corner
  ellipse(6.4,4.63-face2Length,1.2);
//top right corner
  ellipse(6.15,-4.68-face2Length,1.7);
//top middle corner
  //ellipse(-0.32,-4.5,4.5);
//top left corner
  ellipse(-4.73,-4.05-face2Length,2.5);

//----------------------! main body !--------------------------------- 

  fill('#3E6680');
//main body side face
    beginShape();
      vertex(-6,4-face2Length);
      vertex(-5.5,5-face2Length);
      vertex(-1.4,7-face2Length);
      vertex(-1,6.7-face2Length);
      vertex(-1,-3-face2Length);
      vertex(-5,-4.5-face2Length);
      vertex(-6,-4.2-face2Length);
    endShape();
//main body front face
    beginShape();
      vertex(-0.6,7-face2Length);
      vertex(6.6,5.2-face2Length);
      vertex(7,4.7-face2Length);
      vertex(7,-4.5-face2Length);
      vertex(6.4,-4.85-face2Length);
      vertex(-1,-3-face2Length);
      vertex(-1,6.7-face2Length);
    endShape();
//main body top face
    beginShape();
      vertex(-5,-5.3-face2Length);
      vertex(-5, -4-face2Length);
      vertex(-1,-3-face2Length);
      vertex(6.4,-4.85-face2Length);
      vertex(6.4,-5.5-face2Length);
      vertex(2.81,-6.51-face2Length);
      vertex(0.7,-6.57-face2Length);
    endShape();
//mainbody filling gaps
    rect(-3,-5-face2Length,7,10);

//----------------------! main body shading !-----------------------------------

  fill('#35576E');

  beginShape();
    vertex(-6,-4-face2Length);
    vertex(-6,4-face2Length);
    vertex(-4,5-face2Length);
    vertex(-4,-3-face2Length);
  endShape();

  beginShape();
    curveVertex(-2.5,-0.5-face2Length);
    curveVertex(-6,4-face2Length);
    curveVertex(-3.5,5.95-face2Length);
    curveVertex(-4,5-face2Length);
    curveVertex(-4,0.5-face2Length);
  endShape();

  beginShape();
    vertex(-5,-5.3-face2Length);
    vertex(-2.9,-4.6-face2Length);
    vertex(2.5,-5.9-face2Length);
    vertex(0.7,-6.57-face2Length);
  endShape();

    ellipse(-4.756,-4.07-face2Length,2.5);
  
  beginShape();
    vertex(-2.9,-4.6-face2Length);
    vertex(-4.5,-3.3-face2Length);
    vertex(-4.5,-4.8-face2Length);
    vertex(-4.5,-5.2-face2Length);
  endShape();

  beginShape();
    curveVertex(-3,-4-face2Length);
    curveVertex(0.7,-6.57-face2Length);
    curveVertex(3.55,-6.3-face2Length);
    curveVertex(3.2,-6.1-face2Length);
    curveVertex(2.5,-5.9-face2Length);
    curveVertex(2.5,-6-face2Length);
  endShape();

  fill('#3E6680');
    ellipse(-3,-3.51-face2Length,2);

  beginShape();
    vertex(-4,-2-face2Length);
    vertex(-4,-3.5-face2Length);
    vertex(-3,-4-face2Length);
    vertex(-4,-2-face2Length);
  endShape();

  beginShape();
    vertex(-2.9,-4.6-face2Length);
    vertex(-3.2, -4.5-face2Length);
    vertex(-2.3, -4-face2Length);
    vertex(-2.9,-4-face2Length)
  endShape();

//eyes and nose
  fill('#FFEFD3');
  ellipse(1+eyeLeftX,2-face2Length+eyeLeftY,1.5);
  ellipse(4+eyeRightX,1.3-face2Length+eyeRightY,1.4);
  push();
  translate(2.7,3.2-face2Length);
  rotate(2*PI/2.1);
  ellipse(0,0,0.8+mouthWidth,0.8+mouthWidth/8);
  pop();
  fill('#3E6680');
  ellipse(1.09+eyeLeftX,2-face2Length+eyeLeftY,0.7,0.8);
  ellipse(4+eyeRightX,1.3-face2Length+eyeRightY,0.7,0.8);
  }