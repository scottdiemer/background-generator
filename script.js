var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random-background");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomGradient() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

function getRandomColor() {
	var chars = "0123456789ABCDEF";
	var color = "#";
	
	for(var i = 0; i < 6; i++) {
		color += chars[getRandomInt(16)];
	}
	return color;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomGradient);

setGradient();
