function squareDigits(num){
    //num to tableau des strs
    let numStr=num.toString().split("")
    //map return un tableau avec meme taille d origin tableau 
    let numPower=numStr.map(element=>{
        return parseInt(element)**2
    })
   return parseInt(numPower.join(""))
    
  }
  number=235
  console.log(squareDigits(number))