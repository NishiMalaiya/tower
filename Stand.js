class Stand{
    constructor(x,y,height,width){
        var option = {
            isStatic : true
        }
         this.body = Bodies.rectangle(x,y,height,width,option);
         this.width = width;
         this.height = height;
         World.add(world,this.body);
    }
    display(){

        var angle = this.body.angle;
        strokeWeight(2);
        fill("green");
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }
}