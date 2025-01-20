let Tab=[true,false,true,false,true,true]

// filter
let sheepFunction=Tab=>{
    let sheepTabLength=Tab.filter(element=>{
        if(element==true)
            return element
    }).length
    return sheepTabLength
}

console.log(sheepFunction(Tab))


let sheepTabLength=Tab.filter(element=>{
    if(element==true)
        return element
}).length
console.log(sheepTabLength)

//reduce ca marche pas pour tab vide
let sheepNumber=Tab.reduce((a,b)=>{
    
    if(b==true){
        b=1
        return a+b
    }
    else{
        b=0
        return a+b
    }
})
console.log(sheepNumber)

//forEach
let cmp=0
Tab.forEach(element=>{
    if(element==true)
        cmp++
})
console.log(cmp)

