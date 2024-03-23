/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
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
  
  noStroke();
  background(50); 
  
  //
  fill(27, 32, 36);
  triangle(0, 0, 290.6, 0, 0, 51);

  fill(78, 105, 90);
  quad(0, 375.7, 960, 375.7, 960, 600, 0, 600);

  fill(72, 85, 76);
  quad(0, 375.7, 404.2, 304.4, 404.2, 376.7, 0, 448);

  fill(42, 62, 60);
  quad(0, 372.7, 404.2, 301.4, 404.2, 304.4, 0, 375.7);

  fill(78, 105, 90);
  quad(0, 347.2, 404.2, 275.6, 404.2, 301.4, 0, 372.7);

  //Foreground bar structure

  fill(47, 62, 65);
  quad(404.2, 0, 404.2, 424.6, 960, 522.6, 960, 0); // building 
  
  fill(63, 91, 83);
  quad(404.2, 159.5, 960, 257, 960, 289, 393.7, 189); // rim
  quad(408.2, 345.2, 960, 442.6, 960, 446.4, 404.2, 348.4); // window light
  
  fill(242, 231, 139);
  quad(408.2, 201, 960, 299, 960, 442.6, 408.2, 345); //window
  
  fill(47, 62, 65);
  quad(495.5, 216, 499, 217, 499.5, 361.4, 495.5, 360.7,); // window frame left
  quad(844, 278, 847.5, 279.3, 848.3, 423.6, 844, 422.2); // window frame right
  quad(495.5, 360.6, 499.6, 361.4, 495.6, 364.6, 491.5, 363.8); // window frame left shadow
  quad(844.5, 422, 848.6, 422.8, 844.6, 426, 840.5, 425.3); // window frame right shadow

}
