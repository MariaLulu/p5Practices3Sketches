var paddle;
var ball;
var bricks=[];
var startingGame=false;
var youWin=false;
var youLose=false; 
var winText;
var startText;
function setup(){
    createCanvas(windowWidth,windowHeight-20);
    paddle=new Paddle();
    ball=new Ball();
    for(var j=0;j<20;j++){
        bricks.push(new Brick());
    }
    createText();
}
function draw(){
    background(40, 20, 40);    
    paddle.display();
    if(startingGame&&!youLose&&!youWin) paddle.update();
    if(startingGame&&!youLose&&!youWin) paddle.checkEdges();
    
    ball.display();
    if(startingGame&&!youLose&&!youWin) ball.update();
    if(startingGame&&!youLose&&!youWin) ball.checkEdges();
    if(startingGame&&!youLose&&!youWin) ball.meets();
    
    for(j=0;j<bricks.length;j++){ 
        bricks[j].display();
        bricks[j].update();
        bricks[j].bounceOnedge();
        bricks[j].stopOnedge();
        if(startingGame&&!youLose) {
                    if(ball.hits(bricks[j])){
            if(bricks[j].r===80){
                bricks[j].r=40;
            }
            else{
                bricks.splice(j,1);     
            }
            ball.direction.y*=-1;
        }
        }
    }
    if(bricks.length===0){
        youWin=true;
    }
    if(youWin){
        winText.style('display','block');
    }
    else{
        winText.style('display','none');
    }
    if(startingGame){
        startText.style('display','none');
    }
    else{
        startText.style('display','block');
    }
}
function keyPressed(){
    if(key==='a'||key==='A'){
        paddle.isMovingLeft=true;
    }
    else if(key==='d'||key==='D'){
        paddle.isMovingRight=true;
    }
    else if(key===' '){
        startingGame=true;
    }
}
function keyReleased(){
    paddle.isMovingLeft = false;
    paddle.isMovingRight = false;
}
function createText(){
    push();
    winText=createP('~~ You Win ~~');
    winText.position(width/2-10,height/2-50);
    winText.style('color','#e6ccd1');
    winText.style('font-size','24px');
    startText=createP('Press Space To Start Left:A Right:D');
    startText.position(width/2-155,height-120);
    startText.style('color','#e6ccd1');
    startText.style('font-size','20px');
    pop();
}