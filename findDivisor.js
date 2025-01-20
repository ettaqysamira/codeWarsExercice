function divisors(integer) {
  let k=2
  let tabDivisors=[]
  while(k<integer){
    if(integer%k==0){
        tabDivisors.push(k)
    }
    k++
  }
  return tabDivisors.length!==0?tabDivisors:`${integer} is prime`
}
console.log(divisors(13))