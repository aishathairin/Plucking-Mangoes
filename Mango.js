class Mango
{
    constructor (x,y,width,height)
    {
            var options = 
             {
                  'isStatic' : true,
                 'restitution': 0,
                 'friction' :1
             }
   // this.radius = radius;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,this.width,this.height,options);
    World.add(world,this.body);
    this.image = loadImage("Images/mango.png");
    }
    display()
    {
        var pos = this.body.position;
        push();
        fill("yellow");
        translate(pos.x, pos.y);
        imageMode (CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ();
    }
}