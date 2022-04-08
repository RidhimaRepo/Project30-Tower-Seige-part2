class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution:0.4,
        friction:0.3

        

    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility=255;
    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    console.log(this.body.speed)
    

    if(this.body.speed<4){
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0,0, this.width, this.height);
      pop();
    }
    else{
          World.remove(world,this.body)
          push()
          this.visibility=this.visibility-5
          pop()
          
          
    }
    
  }
}
