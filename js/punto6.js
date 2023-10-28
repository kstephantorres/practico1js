let numeroA = parseInt(prompt("6 - Ingrese un numero: "))
let numeroB = parseInt(prompt("6 - Ingrese otro numero: "))

if(numeroA > numeroB)
{
    document.write(`El ${numeroA} es el  número mas grande.<br>`)
}else if(numeroA < numeroB){
    document.write(`El ${numeroB} es el  número mas grande.<br>`)
}else{
    document.write(`Son iguales. <br>`)
}