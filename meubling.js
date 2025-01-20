let meubling=str=>{
    str=[...str]
for(let i=0;i<str.length;i++)
{
    let a=[]
    for(let j=0;j<i+1;j++){
       if(j==0)
       {
        a.push(str[i].toUpperCase())
       }
       else{
        a.push(str[i].toLowerCase())
       }
    }
    str[i]=a.join("")
}
return str.join("-")
}
let str="cWtA"
console.log(meubling(str))
 
/*
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}*/
