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
  background(25, 29, 28); 
  
  //road and pavement
  fill(78, 105, 90);
  quad(0, 448, 960, 278.7, 960, 600, 0, 600); // front bit

  fill(72, 85, 76);
  quad(0, 375.7, 960, 208.2, 960, 278.7, 0, 448); // road

  fill(42, 62, 60);
  quad(0, 372.7, 960, 203, 960, 208.2, 0, 375.7); //curb shadow

  fill(78, 105, 90);
  quad(0, 347.2, 960, 177.7, 960, 203, 0, 372.7); //curb

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
  
  // foreground bar structure
  fill(47, 62, 65);
  quad(404.2, 0, 960, 0, 960, 299, 404.2, 201); // above windows 
  quad(404.2, 348.4, 960, 446.4, 960, 522.6, 404.2, 424.6); // below windows
  
  // rim lighting
  fill(63, 91, 83);
  quad(404.2, 159.5, 960, 257, 960, 289, 393.7, 189); // rim
  quad(408.2, 345.2, 960, 442.6, 960, 446.4, 404.2, 348.4); // window light
  
  //window
  fill(202, 191, 99, 125);
  quad(408.2, 201, 960, 299, 960, 442.6, 408.2, 345); //window
  
  // window frames
  fill(47, 62, 65);
  quad(495.5, 216, 499, 217, 499.5, 361.4, 495.5, 360.7,); // window frame left
  quad(844, 278, 847.5, 279.3, 848.3, 423.6, 844, 422.2); // window frame right
  quad(495.5, 360.6, 499.6, 361.4, 495.6, 364.6, 491.5, 363.8); // window frame left shadow
  quad(844.5, 422, 848.6, 422.8, 844.6, 426, 840.5, 425.3); // window frame right shadow

  // lamp post
  fill(35, 36, 31);
  quad(91.9, 136.7, 96.6, 136.7, 96.6, 479.6, 91.9, 479.6);
  quad(91.9, 166.4, 190, 138.2, 190, 142.7, 91.9, 170.8);
  quad(96.6, 193.3, 150.2, 154, 160.8, 151, 96.6, 198);
  rect(190, 137, 27.1, 8.2, 0, 8, 0, 0);

  fill(255, 255, 200);
  rect(192, 145.3, 22.9, 0.8, 0, 0, 1, 1); // lamp post light
  rect()
  // lamp post glow
  fill(209, 216, 123, 50);
  quad(192, 145.9, 214.9, 145.9, 260.1, 461.1, 146.8, 461.1);

  fill(209, 216, 123, 50);
  arc(203.5, 461, 113.3, 20, 0, PI);

  let from = color(218, 165, 32);
  let to = color(72, 61, 139);

  // Create intermediate colors.
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);

  // Draw the left rectangle.
  noStroke();
  fill(from);
  rect(10, 20, 20, 60);

  // Draw the left-center rectangle.
  fill(interA);
  rect(30, 20, 20, 60);

  // Draw the right-center rectangle.
  fill(interB);
  rect(50, 20, 20, 60);

  // Draw the right rectangle.
  fill(to);
  rect(70, 20, 20, 60);

}
