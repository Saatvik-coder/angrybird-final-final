class slingshot{
constructor(bodyA,pointB){
    var options = {bodyA:bodyA,
        pointB:pointB,stiffness:0.04,length:10};
this.pointB = pointB;
this.sling = Constraint.create(options);
World.add(world,this.sling);
this.sling1 = loadImage("sling1.png");
this.sling2 = loadImage("sling2.png");
this.sling3 = loadImage("sling3.png");
}
attach(body){
    this.sling.bodyA=body;   
}
fly(){
    this.sling.bodyA=null;
}
display(){
    image(this.sling1,200, 20);
    image(this.sling2,170, 20);
    if (this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
    var pointB=this.pointB;
    push();

stroke("#53260F")
if (pointA.x<200 ){
    strokeWeight(7);
    line(pointA.x-25,pointA.y,pointB.x-20,pointB.y-50);
    line(pointA.x-25,pointA.y+10,pointB.x+35,pointB.y-50);
    image(this.sling3,pointA.x-25,pointA.y-10,15,30);
}
else{
    strokeWeight(3);
    line(pointA.x+25,pointA.y,pointB.x-20,pointB.y-50);
    line(pointA.x+25,pointA.y-10,pointB.x+35,pointB.y-50);
    image(this.sling3,pointA.x+15,pointA.y-10,15,30);  
}
    pop();
    }
    

}
};