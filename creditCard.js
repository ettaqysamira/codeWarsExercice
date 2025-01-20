function maskify(cc) {
    let tab=cc.toString().split("")
    if(tab.length>4){
        for(let i=0;i<tab.length-4;i++){
            tab[i]='#'
        }
    }
    return tab.join("")
    
}
console.log(maskify(11111))
