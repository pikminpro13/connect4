 $(document).ready(function(){
	// $("#container").on("click", ".grid-cell", function(){
		//.
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
		var start = board[curRow][curColumn];

		function checkUpDown(start){

		}


		
	}



});