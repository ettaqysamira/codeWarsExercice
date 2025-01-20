function abbrevName(name){
    let newName=name.split(" ")
    return `${newName[0][0].toUpperCase()}.${newName[1][0].toUpperCase()}`
}
console.log(abbrevName("Sara Samira"))