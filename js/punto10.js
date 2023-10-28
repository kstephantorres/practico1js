let numeroDivisible= parseInt(prompt("10 - Ingrese un numero: "))

if (numeroDivisible % 2 === 0) {
    document.write(`El numero ${numeroDivisible} es divisible por 2. <br>`)
}else if (numeroDivisible % 3 === 0) {
    document.write(`El numero ${numeroDivisible} es divisible por 3. <br>`)
}else if (numeroDivisible % 5 === 0) {
    document.write(`El numero ${numeroDivisible} es divisible por 5. <br>`)
}else if (numeroDivisible % 7 === 0) {
    document.write(`El numero ${numeroDivisible} es divisible por 7. <br>`)
}else if(isNaN(numeroDivisible)){
    document.write(`Ingreso un valor no valido. <br>`)
}else{
    document.write(`El numero ${numeroDivisible} no es divisible por ninguno de los siguiente valores: 2, 3, 5, 7. <br>`)
}
