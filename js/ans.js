function isSafe2(board, row, col,value) {
    //vertical check
  	for (let i = 0; i < board.length; i++) {
		if (board[i][col] === value) return false;
	}
	
    //horizondal check
  	for (let i = 0; i < board.length; i++) {
		if (board[row][i] === value) return false;
	}
	
	//grid check
	var x = (Math.floor(row / 3)) * 3;
    var y = (Math.floor(col / 3)) * 3;
     for (var i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[x+i][y+j] === value) {
          return false;
        }
      }
     }
     return true
}
function sudokkuAns(board,row,col){

	if (row == 9) {
	    for(var i=0;i<9;i++){
	        console.log(board[i].join(" "))
            // swal(board[i].join(" "));
         

	    }
	    
		return 
	}
	var nextRow=0
	var nextCol=0
	if (col == 8) {
		nextRow = row + 1;
		nextCol = 0;
	}else{
	   nextRow = row;
	   nextCol = col+1; 
	}

	if (board[row][col] != 0) {
		 sudokkuAns(board, nextRow, nextCol);
	}else{
	    for (var i = 1; i <=9; i++) {
		if (isSafe2(board,row,col,i)==true){
		    board[row][col]=i
		    sudokkuAns(board, nextRow, nextCol);
		    board[row][col]=0
		}
	}
	}
}
