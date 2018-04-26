var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
	setupModeBtns();
	setupSquares();
	reset();
}

resetButton.addEventListener("click", reset);

function setupModeBtns(){
	for (var i = 0; i < modeBtns.length; i++) { // mode buttons event lisniters
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		// add click event to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to the pickedColor
			if (clickedColor === pickedColor) {
				msgDisplay.textContent = "Correct!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "transparent";
				msgDisplay.textContent = "Try Again...";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares); //regenerate all new colors
	pickedColor = pickColor(); //pick a new radom color to the array
	colorDisplay.textContent = pickedColor; //change colorDisplay to mach picked color
	resetButton.textContent = "New colors";
	msgDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) { //change colors of the squares
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue"; //reset de background h1
}

function changeColor(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//chance each color to mach given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make a array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}