song = "";

function preload(){
    song= loadSound("music.mp3");
}

scoreleftwrist = 0;
scorerightwrist = 0;

rightwristX = 0;
leftwristX = 0;

rightwristY =  0;
leftwristtY = 0;

function setup(){
canvas= createCanvas(600,500);
canvas.center();
video= createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotResult);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotResult(){
    
}