let frase = prompt("9 - Escribe una frase:");

let vocales = "";

for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i).toLowerCase();

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        
        vocales+= letra;
    }
}

document.writeln(`Las vocales de tu frase son: ${vocales}. <br>`);