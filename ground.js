class Ground {
    constructor(x,y,w,h) {
        var options = {
            isStatic: true
        }
        this.groundBody = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.groundBody)
        this.width = w
        this.height = h
    }
    display(){
        push()
        fill("green")
        rectMode(CENTER)
        rect(this.groundBody.position.x,this.groundBody.position.y,this.width,this.height)
        pop()
    }
}