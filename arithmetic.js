 function arithmetic(a, b, operator){
    let operation={
        add: function(a, b) {
            return a + b;
        },
        subtract: (a,b)=>a-b,
        multiply:(a,b)=>a*b,
        divide:(a,b)=>a/b

    }
    return operation[operator](a,b)
  }
  console.log(arithmetic(20,4,"divide"))