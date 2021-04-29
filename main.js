function preload() {

}

function setup(){
    canvas = createCanvas(360, 280);
    canvas.position(640, 290);
    video = createCapture(VIDEO)
    video.hide();

    tint_color = "";
}

function draw() 
{
    image(video, 0, 0, 360, 280);
    tint(tint_color);
}

function take_snapshot(){
    save('shivikka.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}