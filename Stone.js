class Stone
{
    constructor(x,y,width,height)
    {
        var options = 
        {
            isStatic : true,
            restitution :0,
            friction : 1,
            density : 1.2
        }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("Images/stone.png");
    World.add(world,this.body);
}
    fly()
    {
        this.body.bodyA = null;
    }

display()
    {
        var pos = this.body.position;
        push ();
        fill("brown");
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0, this.width, this.height);
        pop ();
    }
}