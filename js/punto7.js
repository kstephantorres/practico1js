numeroA = parseFloat(prompt("Ingresa el primer número:"));
numeroB = parseFloat(prompt("Ingresa el segundo número:"));
let numeroC = parseFloat(prompt("Ingresa el tercer número:"));

let mayor = numeroA;

if (numeroB > mayor) {
    mayor = numeroB;
}

if (numeroC > mayor) {
    mayor = numeroC;
}

document.write(`El ${mayor} es el número más grande.`);