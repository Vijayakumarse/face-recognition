Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function Takesnapshot(){
    Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML="<img id='selfie_img' src="+data_uri+">";
    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YSHy0ynkN/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function Check(){
    img=document.getElementById("selfie_img");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error)
        

        }
        else{
            console.log(results);
            document.getElementById("label").innerHTML=results[0].label;
            document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);

        }
    }

