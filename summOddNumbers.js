function rowSumOddNumbers(n) {
	let i=1,j=0,k=0
    while(i<n){
        j+=n-i
        i++
    }

    let somme=j*2+1
    let x=2
    while(k<n-1){
        somme=somme+(j*2+1)+x
        k++
        x+=2
    }
    return somme
}

console.log(rowSumOddNumbers(4))