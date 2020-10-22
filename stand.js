class stand{
constructor(x,y,width,height) {
var options = {
isStatic: true
}
this.body = Bodies.rectangle(x,y,200,20,options);
this.width = width;
this.height = height;
World.add(world, this.body);
}
display(){
var pos =this.body.position;
rectMode(CENTER);
fill("brown");
rect(this.stand.position.x, this.stand.position.y, 900, 20);
}
};
