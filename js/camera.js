var camera = 
{
	x     : 50,
	y  	  : 0,
	clipX : 0,
	clipY : 0,
	boundriesX1: 50,
	boundriesX2: 745,
	updatePosition:function(dir, cord)
	{
		switch(dir)
		{
			case "left":
				if(cord <= this.boundriesX1)
				{
					this.x += player.speed;
					player.x = this.boundriesX1 ;
					return false;
				}
				return true;
			break;
			case "right":
				if(cord + player.width >= this.boundriesX2)
				{
					this.x -= player.speed;
					player.x = this.boundriesX2 - player.width;
					return false;
				}
				return true;				
			break;
			case "up":
			break;
			case "down":
			break;			
		}
	}
}