class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:2.0
             }
             
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,this.r, options)
		this.image = loadImage("bob.png");
		World.add(world, this.body);

	}
	display()
	{
			var bobpos = this.body.position;		

			push()
			translate(bobpos.x, bobpos.y);
			rectMode(CENTER)
			strokeWeight(1);
			fill(255,255,255)
	        imageMode(CENTER);
			image(this.image, 0,0,50,50)
			pop()
			
	}

}