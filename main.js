var SpeechRecognition = window.webkitSpeechRecognition;
var rec = new SpeechRecognition();

function startbtn() {
    document.getElementById("text_box").innerHTML = "";
    rec.start()
}

rec.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = content;
    console.log(content);
    
    if (content == "take my selfie"){
        speak_computer();
        console.log("Taking You Selfie!");
    }
}

function speak_computer() {
    var synth = window.speechSynthesis;
    // speak_data = document.getElementById("text_box").value;
    speak_data = "Taking Your Selfie In 5 Seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    
    setTimeout(function(){ 
        take_snapshot();
        save();
         
    }, 5000) ;
   
}

var camera = document.getElementById("camera")
Webcam.set ({
    width:360,
    height: 250,
    image_format : "jpeg",
    jpeg_quality : 100
});

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='" + data_uri + "'>" 
    });

}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}