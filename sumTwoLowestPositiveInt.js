function sumTwoSmallestNumbers(numbers) {  
    let temp=0
    let n=0
    while(n<numbers.length){
        for(i=0;i<numbers.length;i++){
            if(numbers[i]>numbers[i+1]){
                temp=numbers[i]
                numbers[i]=numbers[i+1]
                numbers[i+1]=temp
            }
           
        }
        n++
    }
   return numbers[0]+numbers[1]
  }
  let tab=[5, 8, 12, 19, 22]
  console.log(sumTwoSmallestNumbers(tab))