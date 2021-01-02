class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 1.00,
            length: 300
        }
        this.pointB = pointB;
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    display(){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            stroke(0);
            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
}
    
}