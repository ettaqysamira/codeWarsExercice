function diagonal(M) {
    let Sum1 = 0
    let Sum2 = 0
    
    for (let i = 0; i < M.length; i++) {
      Sum1 += M[i][i]; 
      Sum2 += M[i][M.length - 1 - i]
    }
  
    if (Sum1 > Sum2) {
      return "Principal Diagonal win!"
    } else if (Sum2 > Sum1) {
      return "Secondary Diagonal win!"
    } else {
      return "Draw!";
    }
  }


  let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  console.log(diagonal(m))
  
  