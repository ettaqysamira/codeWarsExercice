let middleChar=s=>
     s.length%2==0? s[(s.length/2)-1] + s[s.length/2]: s[Math.floor(s.length/2)]

let s="Samira"
console.log(middleChar(s))
