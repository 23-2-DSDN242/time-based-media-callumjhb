function draw_clock(obj) {
  angleMode(DEGREES);
  background(150); 
  translate(width/2, height/2);

  noStroke();
 

  push();
  let a = -130;
  let b = -120;
  rotate((360/12)*10);
  let largeSize = 40;
  fill(0);
  rect(a,b,largeSize,largeSize);
  rect(a+40,b-40,largeSize,largeSize*7);
  rect(a+120,b,largeSize,largeSize*5);
  rect(a+160,b-40,largeSize*3,largeSize);
  rect(a+280,b,largeSize,largeSize*5);
  rect(a+160,b+200,largeSize*3,largeSize);
  pop();
  
  push();
  let c = -110;
  let d = -90;
  rotate((360/12)*3);
  let medSize = 30;
  fill(255);
  rect(c,d,medSize,medSize);
  rect(c+30,d-30,medSize*3,medSize);
  rect(c+120,d,medSize,medSize*2);
  rect(c+60,d+60,medSize*2,medSize);
  rect(c+120,d+90,medSize,medSize*2);
  rect(c+30,d+150,medSize*3,medSize);
  rect(c,d+120,medSize,medSize);
  pop(); 

  push();
  let e = -70;
  let f = -70;
  rotate((360/12)*2);
  let smallSize = 20;
  fill(255,0,0); 
  rect(e,f,smallSize,smallSize);
  rect(e+20,f-20,smallSize*3,smallSize);
  rect(e+80,f,smallSize,smallSize*2);
  rect(e+60,f+40,smallSize,smallSize);
  rect(e+40,f+60,smallSize,smallSize);
  rect(e+20,f+80,smallSize,smallSize);
  rect(e,f+100,smallSize*5,smallSize);
  pop();

 




}
