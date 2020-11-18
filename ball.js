class Ball {
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.ballBody = Bodies.circle(x,y,r,options)
        World.add(world,this.ballBody)
        this.radius=r
    }
    display(){
        push()
        fill("pink")
        translate(this.ballBody.position.x,this.ballBody.position.y)
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}