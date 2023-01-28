// 사각형 변수
let rx=270, ry=0, rw=150, rh=30;

// 컬러 변수
let r, g, b;
let cnt = 0;

// 원 변수
let cx, cy;
let cdirx, cdiry, cspeed;
const cr = 15;
let count = 0;

function setup() {
  createCanvas(720, 540);
  
  // 사각형 처음 위치
  rx = width / 2 - rw / 2;
  ry = height - rh;
  
  // 원 처음 위치
  cdirx = -1;
  cdiry = 1;
  cspeed = 5;
  
  cx = floor(width) / 2;
  cy = floor(height) / 2;
}

// 원 그리기
function circleDraw(){
  // 막대에 닿았을때
  if((cx >= rx && cx <= rx + rw) && (cy >= ry + cr)){
    cdiry = -cdiry;
    cy = ry -cr;
    count++;
  }
  
  
  fill(25, 25, 25);
  if (cx < cr){
     cdirx = -cdirx; // 왼쪽
  }
  if(cx >= width - cr){
    cdirx = -cdirx;
  }
  if(cy <= cr){
    cdiry = -cdiry; // 오른쪽
  }
  if(cy >= height - cr){
    cdiry = -cdiry;
  }
  
  cx = cx + cdirx * cspeed;
  cy = cy + cdiry * cspeed;
  circle(cx, cy, cr*2)
}


// 사각형 그리기
function rectDraw() {
  ry = height - rh;
  if (rx >= width - rw){
     rx = width - rw; // 오른쪽 제어
  }
  if(rx <= 0){
    rx = 0; // 왼쪽 제어
  }
  if(cnt % 50 == 0){
    r = random(255);
    g = random(255);
    b = random(255);
  }
  
  fill(r, g, b);
  noStroke();
  rect(rx, ry, rw, rh, 5); // 사각형 생성
}

function draw() {
  background(220);
  cnt++;
  keyPressed();
  circleDraw();
  rectDraw(); // 함수 호출
  print(count);
}

function keyPressed() {
  if (key === 'a') {
    rx -= 10;
  } else if (key === 'd') {
    rx += 10;
  }
}

/* function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rx -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    rx += 50;
  }
} */