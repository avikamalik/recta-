class boxs{

    constructor(x,y,width,height){
        var object_property = {
            restitution : 0.5,
            friction : 2,
            density : 5
          }
        this.object = Bodies.rectangle(x,y,width,height,object_property)
        this.width = width
        this.height = height
        World.add(world,this.object);
    }
    display(){
        var vos = this.object.position;
        var angle = this.object.angle;
        push()
        translate(vos.x,vos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
}