function ClockArc(secofStart){
   
    this.display=function (){
        let hr=hour();
        if(hr>12) {hr-=12;}
        let min=minute();
        let sec=second();
        let ms=millis();
//        push();
//        rotate(-90);
//        noFill();
//        strokeWeight(3);
//        stroke(190,145,165);
        this.secAngle=map(sec,0,60,0,360);
//        arc(0,0,300,300,0,this.secAngle);
        this.minAngle=map(min*60+sec,0,3600,0,360);
//        arc(0,0,280,280,0,this.minAngle);
        this.hrAngle=map(hr*60+min,0,720,0,360);
//        arc(0,0,260,260,0,this.hrAngle);
//        pop();
        this.msAngle=map((ms+1000*secofStart),0,60000,0,360);
    }

}