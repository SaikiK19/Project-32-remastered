class Block {
    constructor(x,y,width,height) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:0.8,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = this.body.height;
        this.width = this.body.width
        this.visibility = 255;
       
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        if(this.body.speed>7){

            push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);

            pop();
            World.remove(world,this.body)
          }
        else{
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill('white');
            rect(0, 0, this.width,this.height);
            pop();
        }
    
    }
    score(){
    if (this.visibility < 0 && this.visibility > -1000){
        score++;
    }
} 
      }
    
