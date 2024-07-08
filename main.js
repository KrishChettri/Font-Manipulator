function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(500, 500)
    canvas.position(550, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#d3d3d3');
 }

 function preload(){

 }

function modelLoaded(){
    console.log("Model has been Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
