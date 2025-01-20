function removeChar(str){
    let newStr=str.split("")
    newStr.splice(0,1)
    newStr.splice(newStr.length-1,1)
    return newStr.join("")
   }

   console.log(removeChar("hello"))
   