function removeChar(str){
//splice pour array :str immutable
let newStrArray=str.split("").splice(1,str.length-2)
return newStrArray.join("")
}
console.log(removeChar("hello"))