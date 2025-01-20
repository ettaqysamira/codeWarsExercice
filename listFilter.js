function filter_list(l) {
//filte return un tab de taille d'element (condition) par contre 
//map de meme meme taille d'origin tab 
tabFiltrer=l.filter(element=>typeof(element)=="number")
return tabFiltrer

}



let tab=[1,5,'s','k',2,-6,0]
let b=0
console.log(typeof(b))
console.log(filter_list(tab)) 
