function setup() {
  createCanvas(500,500);
}


function draw() {
  clear();
  background(240);
  let min = minute();
  let sec = second();
  let hr = hour();


  if (min < 10) {
    min = "0" + min;
  }
 if (sec < 10) {
    sec = "0" + sec;
  }
 if (hr < 10) {
    hr = "0" + hr;
  }

  let timeClock = hr + ":" + min + ":" + sec;

  textSize(50);
  fill(0);
  text(timeClock, 150, 200);

  noStroke();
  let secMap = map(sec, 0, 60, 0, 300);
  fill(0,255,100);
  rect(100,250, secMap, 50, 10);

  let minMap = map(min, 0, 60, 0, 300);
  fill(255,0,100);
  rect(100,315, minMap, 50, 10);

  let hrMap = map(hr, 0, 24, 0, 300);
  fill(100,0,255);
  rect(100,385, hrMap, 50, 10);

}
