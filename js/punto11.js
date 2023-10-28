let numeroDivisible11 = parseInt(prompt("11 - Ingresa un número:"))
let bandera=false
let contador=0

let mensaje = `El ${numeroDivisible11} es divisible`
if (numeroDivisible11 % 2 === 0) {
    mensaje += " por 2"
    bandera=true
    contador++
}
if (numeroDivisible11 % 3 === 0) {
    if(bandera){
        mensaje+=','
    }
    mensaje += " por 3"
    bandera=true
    contador++
}
if (numeroDivisible11 % 5 === 0) {
    if(bandera){
        mensaje+=','
    }
    mensaje += " por 5"
    bandera=true
    contador++
}
if (numeroDivisible11 % 7 === 0) {
    if(bandera){
        mensaje+=','
    }
    mensaje += " por 7"
    bandera=true
    contador++
}
if(!bandera){
    mensaje= `El numero ${numeroDivisible11} no es divisible por ninguno de los siguiente valores: 2, 3, 5, 7`
}
if(contador>=2){
    let ultimaComa= mensaje.lastIndexOf(",")
    if(ultimaComa!==-1){
        let auxiliar= mensaje.slice(0, ultimaComa) + ' y' + mensaje.slice(ultimaComa + 1)
        mensaje=auxiliar
    }
}
document.write(mensaje+".")