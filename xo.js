function XO(str){
let cmpO=0
let cmpX=0
for(let i=0;i<str.length;i++){
    if(str[i]=='O' ||str[i]=='o')
        cmpO++
    else if(str[i]=='x' || str[i]=='X')
        cmpX++
}
return cmpO==cmpX?true:false
}

let str="ooom"
console.log(XO(str))