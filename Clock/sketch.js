var clock;
var timeline;
var countsec;
var countmin;
var counthr;
var countdown;
var secofStart;
function setup(){
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    timeline=new Timeline();
    let secofStart=second()+1;
    clock=new ClockArc(secofStart); 
    countsec=new CountSec();
    countmin=new CountMin();
    counthr=new CountHr();
    countdown=60;   
}

function draw(){
    background(200, 130, 140);
    translate(windowWidth/2,windowHeight/2);
    timeline.display();
    let secofNow=second();
    if(secofNow<secofStart){
        
    }
    else
    {
        countsec.display();
        countmin.display();
        counthr.display();
        clock.display();
        secofStart=0;
    }
}