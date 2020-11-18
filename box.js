class Box {
    constructor(x,y,w,h){
        var option = {
            isStatic:true
        }
        this.physicsBody=Bodies.rectangle(x,y,w,h,option)
        World.add(world,this.physicsBody)
        this.width = w
        this.height = h
    }
    display(){
        push()
        fill("purple")
        rectMode(CENTER)
        rect(this.physicsBody.position.x,this.physicsBody.position.y,this.width,this.height)
        pop()
    }
}