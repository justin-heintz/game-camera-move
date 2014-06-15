$(function(){

	canvas = $("#main").get(0).getContext("2d");
	canvass = document.getElementById('main');

	
	player.init();
	world.init();
	setInterval(function() {  update();  draw();}, 15);
	
	$( window ).resize(function() {
		canvass.setAttribute('width', '800');
		canvass.setAttribute('height', '400');
	});

});

function update() 
{
	player.animate();
}

function draw() {

	canvas.clearRect(0, 0, 1000, 1000);
	player.draw();
	world.render();
	console.log(camera.x);
	
	/*this is temp show camera boundries*/
	canvas.beginPath();
		canvas.moveTo(750,0);
		canvas.lineTo(750,400);
	canvas.stroke();
	canvas.beginPath();
		canvas.moveTo(50,0);
		canvas.lineTo(50,400);
	canvas.stroke();	
	
}



