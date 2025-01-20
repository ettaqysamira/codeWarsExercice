let removeSmallest=numbers=>{
    let newTab=[...numbers]
    let min=newTab[0]
    for(let x of newTab){
        if(x<min)
            min=x
    }
    newTab.splice(newTab.indexOf(min),1)
    return newTab  
}



  let a=  [2, 2, 1, 2, 1]
  console.log(removeSmallest(a))