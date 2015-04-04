 $(document).ready(function(){
	// $("#container").on("click", ".grid-cell", function(){
		//.

	// 1 means red player and 2 means black player	
	var color = 1;
	var history = [];
	var board = [ [], [], [], [], [], [] ];

	$('.grid-cell').click(function(){

		var curRow;
		var curColumn = $(this).index();
		var columnCells = $(".col" + (curColumn + 1));

		for(var i = 5; i >= 0; i--){
			if( ! $(columnCells[i]).hasClass("clicked") ){

				history.push(columnCells[i]);
				curRow = i;
				board[curRow][curColumn] = color;


				if(color==1){
					$(columnCells[i]).addClass("red clicked");
					color=2;
				}else if (color == 2) {
					$(columnCells[i]).addClass("black clicked");
					color=1;
				}
				break;
			}
		}

		// Have code or call function to check for a win
		GotWinner(curRow, curColumn);



	});


	$('.undo').click(function(){
		$(  history.pop()   ).removeClass("red black clicked");
	});

	$('.reset').click(function(){
		$('.grid-cell').removeClass("red black clicked");
	});

	function GotWinner(curRow, curColumn){

		// Holds the color of the last piece played
		var start = board[curRow][curColumn];

		if( checkUpDown(start, curRow, curColumn) ){
			console.log("You win!");
		}
		else if( checkLeftRight(start, curRow, curColumn) ){
			console.log("YOU win!");
		}
		else if(checkUpRightAndDownLeft(start, curRow, curColumn)){
			console.log("You Win!");
		}
		else if(checkUpLeftAndDownRight(start, curRow, curColumn)){
			console.log("You Win!");
		}



	}

	function checkUpDown(start, curRow, curColumn){
		var numFound = 0;

		for (var i = curRow; i >= 0; i--) {
			if(start == board[i][curColumn]){
				numFound++;
			}
			else 
				break;
		}
		for (var i = curRow+1; i <= 5; i++) {
			if(start == board[i][curColumn]){
				numFound++;
			}
			else 
				break;
		}

		return (numFound >= 4);

	}

	function checkLeftRight(start, curRow, curColumn){
			var numFound = 0;

		for (var i = curColumn; i >= 0; i--) {
			if(start == board[curRow][i]){
				numFound++;
			}
			else 
				break;
		}
		for (var i = curColumn+1; i <= 6; i++) {
			if(start == board[curRow][i]){
				numFound++;
			}
			else 
				break;
		}

		return (numFound >= 4);
	}

	// Checks for a "forward slash" win diagonal
	function checkUpRightAndDownLeft(start, curRow, curColumn){
		var numFound = 0;

		var row = curRow;
		var col = curColumn;
		while(row >= 0 && col <= 6){
			if(start == board[row][col]){
				numFound++;
			}
			else
				break;

			row--;
			col++;
		}

		row = curRow+1;
		col = curColumn-1;
		while(row <=5 && col >= 0){
			if(start == board[row][col]){
				numFound++;
			}
			else
				break;

			row++;
			col--;
		}

		return (numFound >= 4);
	}


	// Checks for a "back slash" win diagonal
	function checkUpLeftAndDownRight(start, curRow, curColumn){
		var numFound = 0;

		var row = curRow;
		var col = curColumn;
		while(row >= 0 && col >= 0){
			if(start == board[row][col]){
				numFound++;
			}
			else
				break;

			row--;
			col--;
		}

		row = curRow+1;
		col = curColumn+1;
		while(row <=5 && col <= 6){
			if(start == board[row][col]){
				numFound++;
			}
			else
				break;

			row++;
			col++;
		}

		return (numFound >= 4);		
	}

});