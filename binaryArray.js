let arr=[0,0,1,1]
//reduce
let arrayBinary=arr.reduce((a,b,c)=>{
 
    return a+b*(2**(arr.length-1-c))
},0)
console.log(arrayBinary)


//forEach
let sum=0
let i=arr.length-1
arr.forEach(element=>{
    sum+=element*2**i
    i--
})
console.log(sum)




