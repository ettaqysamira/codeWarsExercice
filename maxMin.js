let highAndLow=numbers=>{
    //pour convertir str to tableau des strs : split sans espace 
    //split(" ") continue espace 
    let newStr=numbers.split(" ")
    let max=parseInt(newStr[0])
let min=parseInt(newStr[0])
for(let x of newStr){
    if(parseInt(x)<min)
        min=parseInt(x)
    else if(parseInt(x)>max)
    {
        max=parseInt(x)
    }
   
}
//join() tableau to str separer par , join(" ")separer par " "
return [max,min].join(" ")
}

let str="1 5 6 9 2 -3"
console.log(highAndLow(str))
