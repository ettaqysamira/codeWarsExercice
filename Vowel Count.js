let getCount=str=> {
    let strVowel=[...str].filter(element=>{
        if(element=='a' || element=='i' ||  element=='u' || element=='o' || element=='e')
        {
            return element
        }
    })
    return strVowel.length;
  }
  let str="abracadabra"
  console.log(getCount(str))