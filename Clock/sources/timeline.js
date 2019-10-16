function Timeline(){

    this.display=function (){
        push();
        stroke(255,80);
        rotate(-90);
        this.r1=250;
        this.r2=190;
        for(let i=0;i<12;i++){
            let dotAngle=map(i,0,12,0,360);
            var x1=(this.r1*cos(dotAngle));
            var y1=(this.r1*sin(dotAngle));
            var x2=(this.r2*cos(dotAngle));
            var y2=(this.r2*sin(dotAngle));
            line(x1,y1,x2,y2);
        }
        pop();
    }
}