function CountHr(){
    this.r=(190);
    this.display=function (){
        this.pos=createVector(this.r*cos(clock.hrAngle),
                              this.r*sin(clock.hrAngle));
        push();
        rotate(-90);
        fill(251,233,196);
        strokeWeight(2);
        stroke(251,233,196);
        ellipse(this.pos.x*0.9,this.pos.y*0.9,12);
        line(-this.pos.x*0.2,-this.pos.y*0.2,this.pos.x,this.pos.y);
        pop();
    }    
}