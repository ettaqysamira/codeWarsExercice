function findSmallestInt(arr) {
    let min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(min>arr[i])
            min=arr[i]
    }
    return min
   }
   let array=[2,-6,7,10,2]
   console.log(findSmallestInt(array))