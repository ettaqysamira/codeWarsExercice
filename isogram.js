function isIsogram(str) {
    for(let i=0;i<str.length;i++){
        for(let j=0;j<str.length;j++){
            if(str[i].toLowerCase()==str[j].toLowerCase() && j!=i ){
                return false
            }
        }
    }
    return true
}
  
 
  
let str="SamirA"

console.log(isIsogram(str))