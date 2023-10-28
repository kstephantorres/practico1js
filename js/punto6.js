let numero1 = parseInt(prompt("Ingrese un numero: "))
let numero2 = parseInt(prompt("Ingrese otro numero: "))

if(numero1 > numero2)
{
    document.write(`El mayor es: ${numero1} <br>`)
}else if(numero1 < numero2){
    document.write(`El mayor es: ${numero2} <br>`)
}else{
    document.write(`Son iguales`)
}