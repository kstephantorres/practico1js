let numeroDivisible= parseInt(prompt("10 - Ingrese un numero: "))

if (numeroDivisible % 2 === 0) {
    document.write(`El numero ${numeroDivisible} es divisible por 2`)
}else if (numeroDivisible % 3 === 0) {
    document.write(`El numero ${numeroDivisible} es divisible por 3`)
}else if (numeroDivisible % 5 === 0) {
    document.write(`El numero ${numeroDivisible} es divisible por 5`)
}else if (numeroDivisible % 7 === 0) {
    document.write(`El numero ${numeroDivisible} es divisible por 7`)
}else if(isNaN(numeroDivisible)){
    document.write(`Ingreso un valor no valido`)
}else{
    document.write(`El numero ${numeroDivisible} no es divisible por ninguno de los siguiente valores: 2, 3, 5, 7`)
}
