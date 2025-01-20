function descendingOrder(n){
   let tabStr=n.toString().split("")
   let a=0
   while(a!=tabStr.length){
    for(let i=0;i<tabStr.length;i++){
        if(tabStr[i]<tabStr[i+1]){
            let temp=tabStr[i]
            tabStr[i]=tabStr[i+1]
            tabStr[i+1]=temp
        }
       }
       a++
   }
   return parseInt(tabStr.join(""))
}

  let n=145263
  console.log(descendingOrder(n))