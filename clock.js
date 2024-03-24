/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

function preload() {
staticMan = loadImage("staticman.png");
drinkingMan = loadImage("drinkingman.png");
car = loadImage("car.png");
}

function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  
  background(27, 30, 32); 

  //stars
  stroke(255);
  point(366.3, 10.3);
  point(398.4, 4.2);

  noStroke();
  
  //background building
  fill(50, 57, 49);
  quad(0, 174.8, 960, 5.5442, 960, 177.7, 0, 347); // base 
  fill(69, 87, 66);
  triangle(0, -37.6, 545.1, 58.2, 0, 156.5) // roof
  fill(53, 68, 53);
  quad(0, 155.5, 404.2, 84.2, 404.2, 103.6, 0, 174.8); // middle strip
  fill(44, 51, 42); 
  quad(0, 174.8, 404.2, 103.6, 404.2, 112.6, 0, 183.8); // big shadow
  fill(53, 68, 53);
  quad(52, 165.7, 57.2, 164.8, 57.2, 337, 52, 337.9); // left beam
  quad(226.8, 134.9, 232.1, 133.9, 232.1, 306, 226.8, 307); // central beam
  quad(299.9, 121.8, 305.2, 121, 305.2, 293, 300, 293.9); // right beam
  fill(44, 51, 42); 
  quad(0, 157.7, 404.2, 86.5, 404.2, 88.5, 0, 159.8); // middle strip shadow upper
  quad(0, 163.7, 404.2, 92.4, 404.2, 97, 0, 168.2); // middle strip shadow lower
  fill(43, 34, 28);
  quad(232.1, 184, 284.3, 175, 285.3, 290.8, 232, 300); // door
  fill(30, 47, 45);
  quad(232, 300.2, 285.3, 290.8, 299.6, 293.3, 232, 306); // door step
  fill(44, 51, 42);
  quad(283.9, 125.7, 299.6, 122.8, 299.6, 293.3, 285.3, 290.8); // slide shadow
  fill(209, 216, 123, 58);
  arc(274.9, 240.8, 9, 9, 0, PI*2); // doorknob

  //road and pavement
  fill(78, 105, 90);
  quad(0, 448, 960, 278.7, 960, 600, 0, 600); // front bit

  fill(72, 85, 76);
  quad(0, 375.7, 960, 208.2, 960, 278.7, 0, 448); // road

  fill(42, 62, 60);
  quad(0, 372.7, 960, 203, 960, 208.2, 0, 375.7); //curb shadow

  fill(78, 105, 90);
  quad(0, 347.2, 960, 177.7, 960, 203, 0, 372.7); //curb

  // zoomy car alarm
  let carX = map (obj.millis, 0, 999, -300, 1000);
  let carY = map (obj.millis, 0, 999, 320, 100);
  if(obj.seconds_until_alarm < 0 || obj.seconds_until_alarm == undefined) {
    }
    else if (obj.seconds_until_alarm > 0){
    } 
    else {
      image(car, carX, carY);
     }
 
  // low window rear
  fill(60, 62, 30, 160);
  quad(408.2, 201.6, 960, 104.4, 960, 246.5, 408.2, 345.2);
   
  // rear bar structure
  fill(47, 62, 65);
  quad(408.2, 344.5, 960, 246.5, 960, 326.6, 404.2, 424.6); // rear wall
  
  fill(89, 60, 30);
  triangle(404.2, 424.6, 960, 326.6, 960, 522.6); //floor

  fill(93, 36, 17);
  quad(781.4, 382.3, 864.5, 367.6, 960, 384.5, 960, 413.8, 781.4, 382.3); // tabletop
  
  fill(47, 26, 21);
  quad(781.4, 382.3, 960, 413.8, 960, 419, 781.4, 387.5); // tabletop rim

  fill(68, 36, 25);
  quad(792.2, 389.4, 960, 419, 960, 442.6, 792.2, 413); // table side

  // lonely man
  if (obj.seconds <=3) {
    image(drinkingMan, 0, 0);

  } else {
    image(staticMan, 0, 0);
  }
  
  // foreground bar structure
  fill(47, 62, 65);
  quad(404.2, 0, 960, 0, 960, 299, 404.2, 201); // above windows 
  quad(404.2, 348.4, 960, 446.4, 960, 522.6, 404.2, 424.6); // below windows
  
  // rim lighting
  fill(63, 91, 83);
  quad(404.2, 159.5, 960, 257, 960, 289, 393.7, 189); // rim
  quad(408.2, 345.2, 960, 442.6, 960, 446.4, 404.2, 348.4); // window light

  // upper pane lighting
  fill(63, 91, 83);
  quad(442, 0, 513.7, 0, 513.7, 122.2, 442, 108.9);
  quad(669, 0, 740.8, 0, 740.8, 162.2, 669, 148.9);

  //upper window panes
  fill(128, 130, 91);
  quad(445, 0, 513.7, 0, 513.7, 119.2, 445, 105.9);
  quad(672, 0, 740.8, 0, 740.8, 158.2, 672, 145.9);

  // low window front
  fill(202, 191, 99, 110);
  quad(408.2, 201.7, 960, 299, 960, 442.6, 408.2, 345); //window

  // window frames
  fill(47, 62, 65);
  quad(495.5, 216, 499, 217, 499.5, 361.4, 495.5, 360.7,); // window frame left
  quad(844, 278, 847.5, 279.3, 848.3, 423.6, 844, 422.2); // window frame right
  quad(495.5, 360.6, 499.6, 361.4, 495.6, 364.6, 491.5, 363.8); // window frame left shadow
  quad(844.5, 422, 848.6, 422.8, 844.6, 426, 840.5, 425.3); // window frame right shadow

  // lamp post
  fill(35, 36, 31);
  quad(91.9, 96.7, 96.6, 96.7, 96.6, 479.6, 91.9, 479.6);
  quad(91.9, 131.4, 190, 103.2, 190, 107.7, 91.9, 135.8);
  quad(96.6, 158.3, 150.2, 119, 160.8, 116, 96.6, 163);
  rect(190, 102.5, 27.1, 8.2, 0, 8, 0, 0);
  
  // lamp post glow
  let lampBrightness = map(obj.hours, 0, 23, 30, 60);
  fill(209, 216, 123, lampBrightness);
  quad(192, 110.9, 214.9, 110.9, 260.1, 461.1, 146.8, 461.1);
  fill(209, 216, 123, lampBrightness);
  arc(203.5, 461, 113.3, 20, 0, PI);

  // puddle 
  fill(200, 240, 255, 50);
  arc(393.7, 432.4, 40.1, 7, 0, PI*2);
  arc(404.2, 437.4, 7, 1.2, 0, PI*2);
  arc(419.6, 437.4, 14.1, 2.5, 0, PI*2);
  arc(566.2, 498, 97, 17.1, 0, PI*2);
  arc(630, 485, 14.1, 2.5, 0, PI*2);

  //rain drip
  let dripY = map (obj.millis, 0, 999, 189, 432.4);
  stroke(200, 240, 255, 200);
  line(393.7, dripY, 393.7, dripY+3);

}
 

