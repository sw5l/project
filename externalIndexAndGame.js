//declarations, these will be used for later as baseline numbers or something, i'll figure it out
let i = 0;
//click start to begin the game's main function
const buttons = [];
function startGame(){
	
//make an array with 9 values
//i learned indepth about arrays from w3schools https://www.w3schools.com/js/js_arrays.asp



//loop a math.random function and assign a random number to each array value, 
// so i will end up with 9 random numbers.

for (let i = 0; i < 9; i++) {
buttons[i] = (Math.floor(Math.random() * 10));	
};

	alert(buttons);
	alert(buttons[3]);
	alert("button"+1);
	

};

//all 9 buttons will be hidden by default, and then when pressed they will
//display the appropriate image based on the mathematical value of the value
	function clickMe(val,i){
		if (buttons[i-1] <= 3){
			document.getElementById("button"+i).src = "images/jellyfish.png";
		}else if (buttons[i-1] <= 6){
			document.getElementById("button"+i).src = "images/fish.png";
		}else if (buttons[i-1] <= 10){
			document.getElementById("button"+i).src = "images/octopus.png";
		}
	}






//the user must get 3 matching images in a row to win the game, it is completely luck based.