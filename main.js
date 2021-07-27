var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    Recognition.start();

}
Recognition.onresult=function(event)
{
    var drisha=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=drisha;

    if(drisha=="take my selfie")
    {
        speak();

   
    }
 
 
}
function speak()
{
    var janya=window.speechSynthesis;
    speak1="taking your selfie in 5 seconds";
 var driti=new SpeechSynthesisUtterance(speak1);
 janya.speak(driti);
 Webcam.attach( "camera" );
setTimeout(function()
{
    take_snapshot();
    save();
       
},5000)

}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
 
  camera=document.getElementById("camera");
  function take_snapshot()
{
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById("result").innerHTML = 
         '<img id="imageprev" src="'+data_uri+'"/>';
        } );
}
  function save()
{
link=document.getElementById("link");
image=document.getElementById("imageprev") .src;
link.href=image;
link.click();

}