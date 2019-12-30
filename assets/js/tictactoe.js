
//----- variables -----
var squares = document.querySelectorAll(".squares");
var instructions = document.querySelector("span");
var reset = document.querySelector("button");
var turn = true;
var list = [];
var win = [
[0, 1, 2],
[3, 4, 5], 
[6, 7, 8],
[0, 4, 8],
[2, 4, 6],
[0, 3, 6], 
[1, 4, 7],
[2, 5, 8],
]
var foundWinner = false;
var tie = 0;

//----- event listeners -----
for(var i=0; i<squares.length; i++) {
	squares[i].addEventListener("click", function() {
		
		if(foundWinner) {
			instructions.textContent = "This game is over. Press reset to play again";}
			else {
				if(this.textContent) {
					instructions.textContent = "This box is already taken. Try another one";
				}


				else if (turn === true) {
					this.classList.add("done");
					this.textContent = "x";
					turn = false;
					squares.forEach(myFunction);
					instructions.textContent = "It is 0's turn";
					isTie();
					winner();


				}
				else if(turn === false) {
					this.textContent = "0";
					this.classList.add("done");
					turn = true;			
					squares.forEach(myFunction);
					instructions.textContent = "It is X's turn";	
					isTie();
					winner();				
				}
			}			
		})
}


reset.addEventListener("click", function() {
	foundWinner = false;
	for(var i=0; i<squares.length; i++) {
		squares[i].textContent="";
		squares[i].classList.remove("done");
		squares[i].classList.remove("winner");
		instructions.textContent = "It is X's turn";	
		turn = true;
		tie = 0;
	}
})

//----- functions -----

function myFunction(square, i) {
	if(square.textContent === "x") {
		list[i] = "x";
	}
	else if (square.textContent === "0") {
		list[i] = "0";
	}
	else {
		list[i] = "";
	}
}

function winner() {
	for(var arr = 0; arr<win.length; arr++) {
		if((list[win[arr][0]]) && (list[win[arr][0]] === list[win[arr][1]]) && (list[win[arr][0]] === list[win[arr][2]])) {
			instructions.textContent = "We have a winner";
			squares[win[arr][0]].classList.add("winner");
			squares[win[arr][1]].classList.add("winner");
			squares[win[arr][2]].classList.add("winner");
			foundWinner = true;
		}
	}
}

function isTie() {
	for(var i=0; i<list.length; i++) {
		if((list[i]==="x") || (list[i]==="0")) {
			tie ++;
		}
	}
	if (tie===9) {
		instructions.textContent = "It's a tie! Press reset to play again";
	}
	else {
		tie = 0;
	}
}