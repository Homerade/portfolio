$(document).ready(function(){



	var pool = ['.','A','B','3','J','R','1','Q','F','5','G','L','7','W','C','X','4','9','N','2'];

	var charSpanArray = pool.map(function(char){
  		return "<span>" + char + "</span>";
	});

	charSpanArray.forEach(function(element, index, array){
  	// Check for the particular array elements in question
  		if(index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5){
  		// if(index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8){
    // Update those strings to include the CSS
    		array[index] = element.replace("<span>","<span class='hoverRed'>");
    // Exclude beginning period		
  		} else if(index === 0) {
  			null
  	// All other array elements assigned grey class		
  		} else {	
  			array[index] = element.replace("<span>","<span class='hoverGrey'>");
  		}
	});

	// Adding id to index items for individual hover effects
	charSpanArray.forEach(function(element, index, array){
		if(index === 0){
			array[index] = element.replace("<span class='hoverRed'>.</span>","<span class='hoverRed' id='dot'><a href='section_RESUME/page_resume.html'>.</a></span>");
		}
	});

	charSpanArray.forEach(function(element, index, array){
		if(index === 1){
			array[index] = element.replace("<span class='hoverRed'>A</span>","<span class='hoverRed' id='letterA'><a href='section_BLOCS/page_blocs.html'>A</a></span>");
		}
	});

	charSpanArray.forEach(function(element, index, array){
		if(index === 2){
			array[index] = element.replace("<span class='hoverRed'>B</span>","<span class='hoverRed' id='letterB'><a href='section_JRS/page_jrs.html'>B</a></span>");
		}
	});

	charSpanArray.forEach(function(element, index, array){
		if(index === 3){
			array[index] = element.replace("<span class='hoverRed'>3</span>","<span class='hoverRed' id='num3'><a href='section_BMOREVOTE/page_bmoreVote.html'>3</a></span>");
		}
	});

	charSpanArray.forEach(function(element, index, array){
		if(index === 4){
			array[index] = element.replace("<span class='hoverRed'>J</span>","<span class='hoverRed' id='letterJ'><a href='section_PROCESSING/page_processing.html'>J</a></span>");
		}
	});

	charSpanArray.forEach(function(element, index, array){
		if(index === 5){
			array[index] = element.replace("<span class='hoverRed'>R</span>","<span class='hoverRed' id='letterR'><a href='section_PYTHON/page_python.html'>R</a></span>");
		}
	});

	charSpanArray.forEach(function(element, index, array){
		if(index === 6){
			array[index] = element.replace("<span class='hoverRed'>1</span>","<span class='hoverRed' id='num1'><a href='page_3dprinting.html'>1</a></span>");
		}
	});

	charSpanArray.forEach(function(element, index, array){
		if(index === 7){
			array[index] = element.replace("<span class='hoverRed'>Q</span>","<span class='hoverRed' id='letterQ'><a href='page_video.html'>Q</a></span>");
		}
	});

	charSpanArray.forEach(function(element, index, array){
		if(index === 8){
			array[index] = element.replace("<span class='hoverRed'>F</span>","<span class='hoverRed' id='letterF'><a href='page_page_photography.html'>F</a></span>");
		}
	});
// FAILED ATTEMPTS TO SIMPLIFY THE ABOVE
	// charSpanArray[1].replace("<span class='hoverRed'>A</span>","<span class='hoverRed' id='letterA'>A</span");
	// charSpanArray[1].attr( 'id', 'letterA' );
	// letters[37].attr( 'id', 'letterA' );

	// var letterA = letters[37];

// TRYING TO USE JS VARIABLE WITH JQUERY METHOD
	// $(letterA).hover(
	// 	function() {
	// 		$('#design').show();
	// 	},
	// 	function() {
	// 		$('.status').hide();
	// 	}
	// );

	// letterA = jQuery.hover(
	// 	function() {
	// 		$('#design').show();
	// 	},
	// 	function() {
	// 		$('.status').hide();
	// 	}
	// );

	var letters = charSpanArray.join('');


	var theDiv = document.getElementById('key');
	theDiv.innerHTML = letters; 

	$(function(){
		$('.status').hide();
		});

// HOW DO I ADD CSS CHANGES TO FUNCTION?

	$('#dot').hover(
		function() {
			$('#name').show();
		},
		function() {
			$('.status').hide();
		}
	);

	$('#letterA').hover(
		function() {
			$('#blocs').show();
			$('.verbal').css('width',30 + '%');
			$('.verbal').css('margin-left', 64 + '%');
		},
		function() {
			$('.status').hide();
		}
	);

	$('#letterB').hover(
			function() {
				$('#jrsBrides').show();
				$('.verbal').css('width', 28 +  '%');
				$('.verbal').css('margin-left', 64 + '%');
			},
			function() {
				$('.status').hide();
			}
		);

	$('#num3').hover(
			function() {
				$('#bmoreVote').show();
				$('.verbal').css('width',33 + '%');
				$('.verbal').css('margin-left', 62 + '%');
			},
			function() {
				$('.status').hide();
			}
		);

	$('#letterJ').hover(
			function() {
				$('#processing').show();
				$('.verbal').css('width', 28 + '%');
				$('.verbal').css('margin-left', 63 + '%');			
			},
			function() {
				$('.status').hide();
			}
		);

	$('#letterR').hover(
			function() {
				$('#python').show();
			},
			function() {
				$('.status').hide();
			}
		);

	$('#num1').hover(
			function() {
				$('#3dPrinting').show();
				$('.verbal').css('margin-left', 63 + '%');
				$('.verbal').css('width',33 + '%');				
			},
			function() {
				$('.status').hide();
			}
		);

	$('#letterQ').hover(
			function() {
				$('#video').show();
				$('.verbal').css('width',28 + '%');
				$('.verbal').css('margin-left', 64 + '%');				
			},
			function() {
				$('.status').hide();
			}
		);

	$('#letterF').hover(
			function() {
				$('#photography').show();
				$('.verbal').css('margin-left', 61 + '%');
				$('.verbal').css('width',37 + '%');
			},
			function() {
				$('.status').hide();
			}
		);

		console.log(letters);
		

});