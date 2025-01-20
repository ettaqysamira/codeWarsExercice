function doubleChar(str) {
    newStr=str.split("")
    let tabStr=[]
  for(let x of newStr){
    newElement=x.repeat(2)
    tabStr.push(newElement)
  }
  return tabStr.join("")
  
}
console.log(doubleChar("Hello "))
