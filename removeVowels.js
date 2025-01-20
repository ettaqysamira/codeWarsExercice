let str="No offense but,\nYour writing is among the worst I've ever read"


let disemvowel=str=>{
    let newStr=[...str].filter(element=>{
        if(element!=='a' && element!=='i' &&  element!=='u' && element!=='o' && element!=='e'
            && element!=='A' && element!=='I' &&  element!=='U' && element!=='O' && element!=='E'
         )
            {
                return element
            }
    })
   return newStr.length!==0?newStr.join(""):"Ths wbst s fr lsrs LL!"
}
console.log(disemvowel(str))
