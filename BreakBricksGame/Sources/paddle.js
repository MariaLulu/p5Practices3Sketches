function Paddle(){
    this.w=160;
    this.h=20;
    this.pos=createVector(width/2-80,height-30);
    this.isMovingLeft=false;
    this.isMovingRight=false;
    this.display=function(){
        push();
        noStroke();
        fill(181,138,214);
        rect(this.pos.x,this.pos.y,this.w,this.h/2);
        fill(151,108,184);
        rect(this.pos.x,this.pos.y+this.h/2,this.w,this.h/4);
        pop();
    }
    this.move=function(step){
        this.pos.x+=step;
    }
    this.update=function(){
        if (this.isMovingLeft){
            this.move(-20);
        }
        else if(this.isMovingRight){
            this.move(20);
        }
    }
    this.checkEdges=function(){
        if(this.pos.x<0){
            this.pos.x=0;
        }
        else if(this.pos.x>width-this.w){
            this.pos.x=width-this.w;
        }
    }
}