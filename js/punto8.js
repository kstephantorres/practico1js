let numeroPar = parseInt(prompt("Ingrese un número para ver si es divisible por 2: "))

if (numeroPar % 2 === 0) {
    document.write(`El ${numeroPar} es par <br>`);
} else {
    document.write(`El ${numeroPar} no es par <br>`);
}