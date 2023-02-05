// 비디오
let video;

// posenet
let poseNet;
let pose, skeleton;

let n, le, re;

function setup() {
  createCanvas(640, 480);

  // 비디오
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  
  poseNet = ml5.poseNet(video, modelLoaded);
  
  poseNet.on('pose', gotResults); 
}

function gotResults(p){
  pose = p[0]?.pose;
  skeleton = p[0]?.skeleton;
  console.log("pose", pose);
  console.log("skeleton", skeleton);
  if(pose) console.log("pose", pose);
  if(skeleton) console.log("skeleton", skeleton);
  if(pose){
    n = pose.nose;
    le = pose.leftEye;
    re = pose.rightEye;
  }
}

function drawFace(){
  fill(255);
  ellipse(le.x, le.y, 40, 50);
  ellipse(re.x, re.y, 40, 50);
  
  fill(0);
  circle(le.x, le.y, 10, 30);
  circle(re.x, re.y, 10, 30);
  circle(n.x, n.y, 10, 20);
  
}

function drawSkeleton(){
  if(skeleton){
    for(let item of skeleton){
      let a = item[0], b = item[1];
      
      stroke(0);
      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }
  }
}

function modelLoaded(){
  console.log('modelLoaded!!!')
}

function draw() {
  background(220);
  if(pose){
    drawSkeleton();
    drawFace();
  }
  //image(video, 0, 0, width, height);
  
  
}