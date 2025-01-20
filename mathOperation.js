let operationMath=(operator,a,b)=>{
    let signe={
       "+":function(a,b){
        return a+b
       },
       "*":function(a,b){
        return a*b
       },
       "-":function(a,b){
        return a-b
       },
       "/":function(a,b){
        return a/b
       }
        }
        return signe[operator](a,b)

    }
console.log(operationMath("/", 49, 7))


