let numberofsquares = 6;
var colors = generateRandomColors(numberofsquares);
// var currentDocument = document.currentScript.ownerDocument;
// var squares = currentDocument.querySelectorAll('.square');
let squares = document.querySelectorAll('.square');
let pickColor = ChoseColor();
let colorDisplay = document.getElementById('lol');
colorDisplay.textContent = pickColor;
let message = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetbtn = document.querySelector('#reset');
let easybtn = document.querySelector('#easybtn');
let hardbtn = document.querySelector('#hardbtn');

easybtn.addEventListener('click', function() {
	easybtn.classList.add('selected');
	hardbtn.classList.remove('selected');
	numberofsquares = 3;
	colors = generateRandomColors(numberofsquares);
	pickColor = ChoseColor();
	colorDisplay.textContent = pickColor;
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
});

hardbtn.addEventListener('click', function() {
	easybtn.classList.remove('selected');
	hardbtn.classList.add('selected');
	numberofsquares = 6;
	colors = generateRandomColors(numberofsquares);
	pickColor = ChoseColor();
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
});

resetbtn.addEventListener('click', function() {
	//generate all colors
	colors = generateRandomColors(numberofsquares);
	pickColor = ChoseColor();
	colorDisplay.textContent = pickColor;
	h1.style.backgroundColor = 'steelblue';
	resetbtn.textContent = 'New Colors';
	message.textContent = '';
	this.textContent = 'New Colors';
	//change color squares
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
});

for (i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click', function() {
		//grab picked color to set it to the title
		let clickedColor = this.style.backgroundColor;
		if (clickedColor === pickColor) {
			this.style.backgroundColor = pickColor;
			message.textContent = 'Correct';
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetbtn.textContent = 'Play Again?';
		} else {
			this.style.backgroundColor = '#232323';
			message.textContent = 'Try Again';
		}
	});
}

function changeColors(color) {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}
function ChoseColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for (let i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 to 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	let b = Math.floor(Math.random() * 256);
	let Fstring = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	return Fstring;
}
