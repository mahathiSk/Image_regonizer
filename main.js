Webcam.set({
    width:320,
    height:250,
    image_format:'jpeg',
jpeg_quality:90
});

camera=document.getElementById("webcam");

Webcam.attach('#camera');

function Capture_Image(){
    webcam.snap(function(data_uri){
    document.getElementById("snapshot").innerHTML="<img id='capture_image'src='"+data_uri+"'>";
});
}

console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/f7zjCpZ_q/model.json",modelLoaded());

function modelLoaded(){
console.log("model is loaded");
}
