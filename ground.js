class  Ground {
    constructor(){
        var  ground_option ={
            isStatic : true


        }

        this.ground = Bodies.rectangle(460,410,900,20,ground_option)
        World.add(world, this.ground);
        
    }
    display(){
        strokeWeight(2);
        fill("black");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);

      }
};