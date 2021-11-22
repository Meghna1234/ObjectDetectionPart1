img =""

function preload(){
    img = loadImage('bedroombackground.jpg');
}

function setup(){
canvas = createCanvas(600,400)
canvas.center();
}


function draw(){
image(img, 0,0,600,400);
fill("#000080");
text("bed",110,170)
stroke("#000080");
noFill();
rect(105,155,300,200)
}


function back(){
    window.location = "index.html"
}