var countSheep = function (num){
    let strTab=[]
    for(let i=1;i<=num;i++){
    strTab.push(`${i} sheep...`)
     }
    return strTab.join("")
}

let nbre=2
console.log(countSheep(nbre))