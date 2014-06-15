var player = 
{
	x: 50, 
	y: 0,
	width: 32,
	height: 32,
	speed: 10,
	slide: 0,
	maxSlides: 7,
	ticksPerFrame: 2,
	tick: 0,
	lastKey: false,
	img: new Image(),
	init: function()
	{
		this.img.src =  'assets/img/char/char.png';
	},
	draw: function()
	{
		canvas.drawImage(this.img, (this.slide * 37), 0, 37, 69, this.x, this.y, 37, 69);
	},
	tickInc: function()
	{
		if(this.tick >= this.ticksPerFrame){this.slide++; this.tick=0;}
		if(this.slide >= this.maxSlides){this.slide=0}
		this.tick++;
	},
	animate: function()
	{
		//console.log(this.x +" : "+this.y)
		if (keydown.left) 
		{
			if(camera.updatePosition("left", this.x))
			{
				this.x -= this.speed;
			}
			this.tickInc();
			this.lastKey = true;
		}

		if (keydown.right) 
		{
			if(camera.updatePosition("right", this.x))
			{
				this.x += this.speed;
			}
			this.tickInc();
			this.lastKey =  true;
		}

		if (keydown.up) 
		{
			this.y -= this.speed;
			this.lastKey =  true;
		}

		if (keydown.down) 
		{
			this.y += this.speed;
			this.lastKey = true;
		}	
	}
};