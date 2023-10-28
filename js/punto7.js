let numeroMayorA = parseFloat(prompt("7 - Ingresa el primer número:"));
let numeroMayorB = parseFloat(prompt("7 - Ingresa el segundo número:"));
let numeroMayorC = parseFloat(prompt("7 - Ingresa el tercer número:"));

let mayor = numeroMayorA;

if (numeroMayorB > mayor) {
    mayor = numeroMayorB;
}

if (numeroMayorC > mayor) {
    mayor = numeroMayorC;
}

document.write(`El ${mayor} es el número más grande.<br>`);