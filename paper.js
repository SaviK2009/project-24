class paper{
    constructor(x,y,radius){
        var options = {
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2 
            
        }
        this.body = Bodies.circle(x,y,radius,options); 

       World.add(world, this.body);
    } 
    display(){
        var paper=this.body.position
    ellipseMode(RADIUS);
    ellipse(paper.x, paper.y, 10, 10);
    fill("yellow");
     
    }
}