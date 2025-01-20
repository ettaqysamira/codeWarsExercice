let Triangle=(a,b,c)=>{
    if(a+b>c && a+c>b && b+c>a)
        return true
    else
    return false
}
let a=1, b=2 ,c=2
console.log(Triangle(a,b,c))