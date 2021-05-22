var options={
    isStatic : false,
    restitution: 0.3,
    friction: 5,
    density: 1.2
}

class Paper {

constructor(x,y,radius){
    this.body = Bodies.circle(x,y,radius,{
        isStatic : false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.0
    })
    World.add(world,this.body);
   this.radius = radius;
}
display(){
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
}

}