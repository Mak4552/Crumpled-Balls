class Paper{
    constructor(x,y,radius){
            this.body=Bodies.circle(x,y,radius,{restitution:0.4});
            this.radius=radius;
            World.add(world,this.body);
            var options={
                isStatic:false,
                restitution:0.4,
                friction:0.5,
                density:1.2
            }
    }
    display(){
        ellipseMode(RADIUS)
       fill("yellow")
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

    }
}