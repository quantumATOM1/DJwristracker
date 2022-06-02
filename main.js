noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function preload(){
    img=loadImage("https://media0.giphy.com/media/U4FkC2VqpeNRHjTDQ5/giphy-downsized-large.gif")
}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initalized')
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY"+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
    }
}
function draw(){
    background('#969A97')
    fill('#F90093')
    stroke('#F90093')
    textSize(difference)
    square(noseX,noseY,difference);
    text('alex',50,400)
    image(img,noseX,noseY,difference,difference)
}
