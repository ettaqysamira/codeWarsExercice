function positiveSum(arr) {
let sum=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]>0)
        sum+=arr[i]
    // je peux faire ca sans else juste pour comprendre role de continue 
    else
    continue
  }
  return sum
}

let Tab=[5,6,-3,2]
console.log(positiveSum(Tab))