function Ball(){
    this.r=15;
    this.pos=createVector(width/2,height-45);
    this.direction=createVector(1,-1);
    this.vel=createVector(1,1).mult(5);
    this.startMoving=false;

    this.display=function(){
        push();
        fill(233,206,211);
        noStroke();
        ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2);
        pop();
    }
    this.update=function(){
        this.pos.x+=this.vel.x*this.direction.x;
        this.pos.y+=this.vel.y*this.direction.y;
    }
    this.checkEdges=function(){
        if(this.pos.x-this.r<0){
            this.direction.x*=-1;
        }
        else if(this.pos.x+this.r>width){
            this.direction.x*=-1;
        }
        else if(this.pos.y-this.r<0){
            this.direction.y*=-1;
        }
        else if(this.pos.y>paddle.pos.y){
            youLose=true;
        }
    }
    this.meets=function(){
        if(this.pos.y+this.r>paddle.pos.y&&
                this.pos.x+this.r>paddle.pos.x&&
                this.pos.x-this.r<paddle.pos.x+paddle.w){
            this.direction.y*=-1;
        }        
    }
    this.hits=function(bricks){
        var distance=dist(this.pos.x,this.pos.y,bricks.pos.x,bricks.pos.y);
        if(distance<this.r+bricks.r) return true;
        else return false;
    }
}
