let findShort=s=>{
    let tabStr=s.split(" ")
    let shortWord=tabStr[0]
    for(let x of tabStr){
        if(x.length<shortWord.length){
            shortWord=x
        }
    }
    return shortWord.length
}

let str="samira ettaqy sara"

console.log(findShort(str))