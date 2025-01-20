function SeriesSum(n) {
    let U=0
    for(let i=0;i<n;i++){
    U+=(1/(3*i+1))
   }
   return U.toFixed(2)
  }
console.log(SeriesSum(3))