function likes(names) {
    let x=""
    let y="like this"
    let z="likes this"
  if(names.length==0)
    x=`no one ${z}`
  else if(names.length==1)
    x=`${names[0]} ${z}`
  else if(names.length==2)
    x=`${names[0]} and ${names[1]} ${y}`
else if(names.length==3)
    x=`${names[0]}, ${names[1]} and ${names[2]} ${y}`
else{
    x=`${names[0]}, ${names[1]} and ${names.length-2} others ${y}`
}

return x
}
let tab=[]
likes(tab)