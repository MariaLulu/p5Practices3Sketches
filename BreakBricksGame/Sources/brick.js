function Brick(){
    var radios=[40,60,80];
    this.r=random(radios);
    this.pos = createVector(random(40,width-40),height-20);
    this.vel = createVector(0,1);
    this.acc = createVector(0,-1);
    this.vel.setMag(parseInt(random(25,35)));
    this.acc.setMag(-1);
    this.total=6;
    this.display=function(){
        push();
        translate(this.pos.x,this.pos.y);
        fill(223,196,201);
        strokeWeight(5);
        stroke(181,138,214);
        beginShape();
        for(var i=0;i<this.total;i++){
            let angel=map(i,0,this.total,0,TWO_PI);
            var x=this.r*cos(angel);
            var y=this.r*sin(angel);
            vertex(x,y);
        }
         endShape(CLOSE);
        pop();
    }

    this.update = function()
    {
        if(this.vel.mag()>0){
        this.pos.add(this.vel);
        this.vel.add(this.acc);}
    }
        this.stopOnedge=function(){
        if(this.pos.y <= 35){
            this.vel.setMag(0);
            this.acc.setMag(0);            
        }
    }
    this.bounceOnedge = function(){
        var bounceForce;
        var antiVel;
        var angle;
        var bounceForceMag;
        if(this.pos.x >= width){
            bounceForce = createVector(-1,0);
        }
        if(this.pos.x <= 0){
            bounceForce = createVector(1,0);            
        }
        if(this.pos.y <= 0){
            bounceForce = createVector(0,1);            
        }
        if(this.pos.y >= height){
            bounceForce = createVector(0,-1);            
        }
        if(bounceForce != undefined){
            antiVel = this.vel.copy();
            antiVel.rotate (PI);
            angle = bounceForce.angleBetween(antiVel);
            bounceForceMag = antiVel.mag()*Math.cos(angle)*2;
            bounceForce.setMag(bounceForceMag);
            this.vel.add(bounceForce);
        }
        }
}