class Polygon {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:0.2,
            density: 1.3
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("sprites/polygon.png");
        this.image.height = this.image.height
        this.image.width = this.image.width
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill('yellow');
        this.image.height = 80;
        this.image.width = 80;

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        ellipse(0, 0, this.radius);
        pop();
      }
}