let dnaStrand=(dna)=>{
    let newADN=dna.split("")
    for(let i=0;i<newADN.length;i++){
        switch (newADN[i]) {
            case 'A':
              newADN[i] = 'T';
              break;
            case 'T':
              newADN[i] = 'A';
              break;
            case 'C':
              newADN[i] = 'G';
              break;
            case 'G':
              newADN[i] = 'C';
              break;}
    }
    return newADN.join("")
  }
  console.log(dnaStrand("GTAT"))