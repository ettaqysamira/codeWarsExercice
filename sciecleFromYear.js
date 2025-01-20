function century(year) {
    //ceil pour l'arrondissement en haut (4.1=>5)
    let sciecle=Math.ceil(year/100)
    return sciecle
  }
  console.log(century(2001))