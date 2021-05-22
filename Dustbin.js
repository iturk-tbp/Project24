var options={
    isStatic : true,
  
}

class Dustbin {

constructor(x,y,w,h){
    this.body = Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body);
    this.width = w;
    this.height = h;
    
}
display(){
   rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}

}