function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet',modelLoded);
}

function modelLoded() {
    console.log('Model Loded!')
}
 
function draw(){
    image(video, 0, 0,300, 300);
}
