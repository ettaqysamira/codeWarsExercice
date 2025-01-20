function digitize(n) {
let Tab=[]
  let strTab=n.toString().split("")
  for(let i=0;i<strTab.length;i++){
    Tab.push(parseInt(strTab[strTab.length-i-1]))
  }

  //au lieu de loop Tab=Array.from(str,Number)
  return Tab
}
console.log(digitize(35231))