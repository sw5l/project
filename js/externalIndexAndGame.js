//declarations, these will be used for later as baseline numbers 
let i = 0;
var roundsCounter = 0;

function rounds(){
	document.getElementById("round").innterHTML = ("round",+(roundsCounter++));
	
}
function resetChecks(){
	check1 = 0;
	check2 = 0;
	check3 = 0;
}
function showGame(){
	document.getElementById("gameImgContainer").style.visibility = "visible";
}
const buttons = [];// this is the array generated when the startGame() function is ran, it consists of random numbers.

//this function here hides the images back to their original state when generating a new set of random numbers.
function startGameImages(i){
	for (let i = 1; i < 10; i++) {
		document.getElementById("button"+i).src = "images/unknown.png";
		};
	
}//click start to begin the game's main function
function startGame(){
	resetChecks();
	
//make an array with 9 values
//i learned indepth about arrays from w3schools https://www.w3schools.com/js/js_arrays.asp



//loop a math.random function and assign a random number to each array value, 
// so i will end up with 9 random numbers.

for (let i = 0; i < 9; i++) {
buttons[i] = (Math.floor(Math.random() * 10));

};
	

};

//all 9 buttons will be hidden by default, and then when pressed they will
//display the appropriate image based on the mathematical value of the value
	function clickMe(val,i){
		if (buttons[i-1] <= 3){
			document.getElementById("button"+i).src = "images/jellyfish.png";
			document.getElementById("button"+i).alt = 1;
			

		}else if (buttons[i-1] <= 6){
			document.getElementById("button"+i).src = "images/fish.png";
			document.getElementById("button"+i).alt = 2;
			

		}else if (buttons[i-1] <= 10){
			document.getElementById("button"+i).src = "images/octopus.png";
			document.getElementById("button"+i).alt = 3;
			
		
		}
	}
 





//the user must get 3 matching images in a row to win the game, it is completely luck based.

function checkImage(i){//when this function is ran, it will assign values to check1,check2 and check3 based on the image and them compare them to see if they match.
	if(check1==0){
		check1 = document.getElementById("button"+i).alt;
		
		
	}else if(check2==0){
		check2 = document.getElementById("button"+i).alt;
		
		if(check1==check2){
			
			}else if(check1 != check2){
				alert("Oops, they don't match!")
				resetChecks();
				startGameImages(i);
				}
				
	}else if(check3==0){
		check3 = document.getElementById("button"+i).alt;
							
		if(check2==check3){
			alert("you win!")	
			}else if(check2 != check3){
				alert("Oops, they don't match!")
				resetChecks();
				startGameImages(i);	
			}
								
		}
	}
	

