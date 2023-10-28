let numeroA = parseInt(prompt("Ingrese un numero: "))
let numeroB = parseInt(prompt("Ingrese otro numero: "))

if(numeroA > numeroB)
{
    document.write(`El ${numeroA} es el  número mas grande<br>`)
}else if(numeroA < numeroB){
    document.write(`El ${numeroB} es el  número mas grande<br>`)
}else{
    document.write(`Son iguales <br>`)
}