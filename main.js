//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
grenncar_width = 75;
grenncar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
grenncar_x = 5;
grenncar_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, grenncar_x, grenncar_y, greencar_width, grenncar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(grenncar_y >= 0){
		grenncar_y = grenncar_y - 10;
		console.log("When up arrow is pressed, x = " + grenncar_x + " | y = " + grenncar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(grenncar_y <= 0){
		grenncar_y = grenncar_y + 10;
		console.log("When up arrow is pressed, x = " + grenncar_x + " | y = " + grenncar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(grenncar_y >= 0){
		grenncar_y = grenncar_y - 10;
		console.log("When up arrow is pressed, x = " + grenncar_x + " | y = " + grenncar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(grenncar_y <= 0){
		grenncar_y = grenncar_y + 10;
		console.log("When up arrow is pressed, x = " + grenncar_x + " | y = " + grenncar_y);
		uploadBackground();
		uploadgreencar();
	}
}
