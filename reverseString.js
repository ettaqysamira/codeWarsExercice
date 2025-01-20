function solution(str){
  let tabStr=str.split("")
  let newStr=[]
  for(let i=0;i<tabStr.length;i++){
    newStr.push(tabStr[tabStr.length-i-1])
  }
  return newStr.join("")
}
let str="testing"
console.log(solution(str))