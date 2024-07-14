song1 = "";

song2 = "";

song1_status = "";

song2_status = "";

leftWristX = 0;

leftWristY = 0;

rightWristX = 0;

rightWristY = 0;

function preload()
{

   song1 = loadSound("Peter Pan and the Pirates.mp3");

   song2 = loadSound("Harry Potter- Main Theme.mp3");

}

function setup()
{

   canvas = createCanvas(600,500);

   canvas.center();

   video = createCapture(VIDEO);

   video.hide();

   poseNet = ml5.poseNet(video, moselLoaded);

   poseNet.on('pose',gotPoses);

}

function gotPoses(results)

{

   if(results.length>0)

      {

         console.log(results);

         scoreLeftWrist = results[0].pose.keypoints[9].score;

         console.log("scoreLeftWrist = " + scoreLeftWrist);

         leftWristX = results[0].pose.leftWrist.x;

         leftWristY = results[0].pose.leftWrist.y;

         console.log(leftWristX+"leftWristY =" + leftWristY);

         rightWristX = results[0].pose.rightWrist.x;

         rightWristY = results[0].pose.rightWrist.y;

         console.log("rightWristX = "+rightWristX+"rightWristY="+rightWristY);

      }

}

function modelLoaded()

{

   console.log('PoseNet Is Intialized');

}

function draw()
{

   image(video, 0, 0, 600, 500)

   if(scoreLeftWrist > 0.2)

   if(song1 == "false")

      {

         song1_status = "play"

      }

}

function play()
{

    song.play();

    song.setVolume(1);

    song.rate(1);

}
