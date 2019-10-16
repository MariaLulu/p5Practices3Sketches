var toSec=6;
var speed=0;
function AnotherSec(){
    this.r=(235);
    this.display=function (){
        if((toSec+speed)<=clock.secAngle){
            toSec+=speed;
            speed+=-(toSec-clock.secAngle)*(toSec-clock.secAngle)*0.0000001+0.0000001*(clock.secAngle)*(clock.secAngle)+.5;
            this.pos=createVector(this.r*cos(toSec),
                                 this.r*sin(toSec));
        }
        else{
            this.pos=createVector(this.r*cos(clock.secAngle),
                                 this.r*sin(clock.secAngle));
        }
        push();
        rotate(-90);
        strokeWeight(9);
        stroke(125,90,110);
        point(this.pos.x,this.pos.y,this.r*2,this.r*2);
        pop();
    }    
}