$(document).ready(function(){

// EXAMPLE 4----------------------------------------------------------	
// STACK OVERFLOW automation (missing only condensing of 1st if statement ===s (.indexOf? regex?))

	var pool = ['.','A','B','3','J','R','1','Q','F','5','C','L','7','W','X','F','4','9','N','2'];

	var charSpanArray = pool.map(function(char){
  		return "<span>" + char + "</span>";
	});

	charSpanArray.forEach(function(element, index, array){
  // Check for the particular array elements in question
  		if(index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8){
    // Update those strings to include the CSS
    		array[index] = element.replace("<span>","<span class='hoverRed'>");
  		} else if(index === 0) {
  			null
  		} else {	
  			array[index] = element.replace("<span>","<span class='hoverGrey'>");
  		}
	});

	var letters = charSpanArray.join('');

	console.log(letters);

	var theDiv = document.getElementById('key');
	theDiv.innerHTML = letters; 



// EXAMPLE 3----------------------------------------------------------	
// unnecessary bc not making use of random

// STACK OVERFLOW: win!
// but only for 1 item: array[1]

	// var pool = ['.','A','B','3','J','R','1','Q','F','5','T','0','K','N','C','R','U','9','Y','8','N','R','H','F','4','9'];

	// var letters = pool.join('');
	// letters = letters.replace(letters[1], "<span>" + letters[1] + "</span>");
	// var theDiv = document.getElementById('key');
	// theDiv.innerHTML = letters
	// var theSpan = theDiv.querySelector("span");
	// theSpan.classList.add('hoverRed');
	

	// document.getElementById('key').innerHTML = letters;

// FAILED: class and id each array item (differently)

	// var char1 = letters[1];
	// char1.classList.add('letters');

// NEXT: add pop up actions and links

	// char1.addEventListener('click',function(){
	// 	$
	// 	$('#v1').show
	// })


// EXAMPLE 2----------------------------------------------------------
// random draw of letters

	// var pool = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','5','6','7','8','9','0'];
	

	// var myArray = [];
	// for (var i = 0; i < 25; i++){
	//     myArray[i] = pool[Math.floor(Math.random() * pool.length)];
	// }

	// var joined = myArray.join('');
	
	// var letters = document.getElementById('key');
	// letters.innerHTML = "." + joined


// EXAMPLE 1----------------------------------------------------------
// PROBLEM: yields only 1 letter

	// var pool = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','5','6','7','8','9','0'];

	// var rand = "." + pool[Math.floor(Math.random() * pool.length)];

	// var letters = document.getElementById('key');
	// letters.innerHTML = rand


});