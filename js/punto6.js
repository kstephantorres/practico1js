let numeroA = parseInt(prompt("Ingrese un numero: "))
let numeroB = parseInt(prompt("Ingrese otro numero: "))

if(numeroA > numeroB)
{
    document.write(`El mayor es: ${numeroA} <br>`)
}else if(numeroA < numeroB){
    document.write(`El mayor es: ${numeroB} <br>`)
}else{
    document.write(`Son iguales <br>`)
}