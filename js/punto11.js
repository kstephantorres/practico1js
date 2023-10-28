let numeroDivisible11 = parseInt(prompt("11 - Ingresa un número:"))
let bandera=false

let mensaje = `El ${numeroDivisible11} es divisible`
if (numeroDivisible11 % 2 === 0) {
    mensaje += " por 2"
    bandera=true
}
if (numeroDivisible11 % 3 === 0) {
    if(bandera){
        mensaje+=','
    }
    mensaje += " por 3"
    bandera=true
}
if (numeroDivisible11 % 5 === 0) {
    if(bandera){
        mensaje+=','
    }
    mensaje += " por 5"
    bandera=true
}
if (numeroDivisible11 % 7 === 0) {
    if(bandera){
        mensaje+=' y'
    }
    mensaje += " por 7"
}

document.write(mensaje+".")