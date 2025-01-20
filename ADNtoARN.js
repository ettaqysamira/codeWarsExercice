function DNAtoRNA(dna) {
    let StrToTab=dna.split("")
    for(let i=0;i<StrToTab.length;i++){
        if(StrToTab[i]=="T"){
            StrToTab[i]="U"
        }
    }
    
    return StrToTab.join("")
  }
  console.log(DNAtoRNA("TTTT"))