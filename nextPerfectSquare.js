function findNextSquare(sq) {
  let n=sq
 
    while(n>=sq){
        if(Math.sqrt(sq)!==parseInt(Math.sqrt(sq))){
            return -1
          }
        else if(Math.sqrt(n)==parseInt(Math.sqrt(n)) && n!=sq){
            return n
        }
        n++
    }
}

console.log(findNextSquare(114))