img =""

function preload(){
    img = loadImage('tealtv.jpg');
}

function setup(){
canvas = createCanvas(600,400)
canvas.center();
}


function draw(){
image(img, 0,0,600,400);
fill("#FFC0CB");
text("TV",130,70)
stroke("#FFC0CB");
noFill();
rect(125,50,200,150)
}


function back(){
    window.location = "index.html"
}