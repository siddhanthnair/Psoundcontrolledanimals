function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yZPeLy6WJ/model.json', modelReady);

}
function modelReady(){
    console.log("modelReady");
classifier.classify(gotresults);
}
function gotresults(error, results){
if (error) {
    console.log(error);
} 
else {
    console.log(results);
    random_number_r= Math.floor(Math.random()*256);
    random_number_g= Math.floor(Math.random()*256);
    random_number_b= Math.floor(Math.random()*256);


    document.getElementById("result_label").innerHTML= "I can hear: "+results[0].label;  
    document.getElementById("result_confidence").innerHTML= "Accuracy: "+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    Image_1= document.getElementById("alien_1");
    Image_2= document.getElementById("alien_2");
    Image_3= document.getElementById("alien_3");
    Image_4= document.getElementById("alien_4");
   
    if (results[0].label=="Clap"){
    Image_1.src="aliens-01.gif";
    Image_2.src="tiger.png";
    Image_3.src="dog.png";
    Image_4.src="cat.png";
    }
    else if (results[0].label=="Snap"){
        Image_1.src="lion.png";
        Image_2.src="aliens-02.gif";
        Image_3.src="dog.png";
        Image_4.src="cat.png";}
        else if (results[0].label=="Bell"){
            Image_1.src="lion.png";
            Image_2.src="tiger.png";
            Image_3.src="aliens-03.gif";
            Image_4.src="cat";}
            else if (results[0].label=="Background Noise"){
                Image_1.src="lion.png";
                Image_2.src="tiger.png";
                Image_3.src="dog.png";
                Image_4.src="aliens-04.gif";}
}

}

