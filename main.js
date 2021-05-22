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

function gotResult(results){
    if(results.length > 0){
        console.log(results);
scoreleftwrist  = results[0].pose.keypoints[9].score;
scorerightwrist = results[0].pose.keypoints[10].score;
console.log("score right wrist = "+scorerightwrist);
console.log("score left wrist = "+scoreleftwrist);
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
console.log("rightwrist x = "+rightwristX+" rightwrist y = "+rightwristY);

leftwristX = results[0].pose.leftWrist.x;
leftwristtY = results[0].pose.leftWrist.y;
console.log("leftwrist x = "+leftwristX+" leftwrist y = "+leftwristtY);
    }
}

function play(){
    song.play();
song.setVolume(1);
song.rate(1);
}

function draw(){
    image(video,0,0,600,500);
    
fill("#FF0000");

stroke("#000000");

strokeWeight(3);


if(scorerightwrist>0.2){
    circle(rightwristX,rightwristY,20);
    if(rightwristY >0 && rightwristY <=100){
        document.getElementById("speed").innerHTML = "Speed  = 0.5x";
        song.rate(0.5);
    }
else if(rightwristY>100 && rightwristY<=200){
    document.getElementById("speed").innerHTML = "Speed = 1x";
    song.rate(1);
}
else if(rightwristY>200 && rightwristY <=300){
    document.getElementById("speed").innerHTML="Speed = 1.5x";
    song.rate(1.5);
}
else if(rightwristY>300 && rightwristY <=400){
    document.getElementById("speed").innerHTML="Speed = 2x";
    song.rate(2);
}
else if(rightwristY>400 && rightwristY<=500){
    document.getElementById("speed").innerHTML="Speed = 2.5x";
song.rate(2.5);
    
}
}


if(scoreleftwrist>0.2){
circle(leftwristX,leftwristtY,20);
inNumber_leftwrist = Number(leftwristtY);
decimal_removed = floor(inNumber_leftwrist);
volume  = decimal_removed/500;
document.getElementById("volume").innerHTML = "Volume = "+volume;
song.setVolume(volume);
}
}