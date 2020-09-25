class ground{

    constructor(x,y,width,height){
        var object_property = {
            isStatic:true
          }
        this.object = Bodies.rectangle(x,y,width,height,object_property)
        this.width = width
        this.height = height
        World.add(world,this.object);
    }
    display(){
        var vos = this.object.position;
        rectMode(CENTER);
        rect(vos.x,vos.y,this.width,this.height);
    }
}