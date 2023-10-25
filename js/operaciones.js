// Declare variables numero 1 y dos fuera de la funcion y por eso cuando los llamaba en la funcion estaban vacios

const btnSumar = document.getElementById("btnSumar")
const btnRestar = document.getElementById("btnRestar")
const btnMultiplicar = document.getElementById("btnMultiplicar")
const btnDividir = document.getElementById("btnDividir")

btnSumar.addEventListener("click",()=>{
    let numero1 = document.getElementById("numero1Input").value
    let numero2 = document.getElementById("numero2Input").value
    if((numero1 && numero2)){
        // parseInt adentro del if porque sino me toma los cero como false
        let resultadoSuma= parseInt(numero1) + parseInt(numero2)
        document.getElementById("resultado").value=resultadoSuma
        console.log(`Resultado: ${resultadoSuma}`)
        document.getElementById("numero1Input").value=null
        document.getElementById("numero2Input").value=null
    }
    else{
        alert("Falta llenar compo/s obligatorio/s")
    }
})

btnRestar.addEventListener("click",()=>{
    let numero1 = document.getElementById("numero1Input").value
    let numero2 = document.getElementById("numero2Input").value
    if((numero1 && numero2)){
        // parseInt adentro del if porque sino me toma los cero como false
        let resultadoResta= parseInt(numero1) - parseInt(numero2)
        document.getElementById("resultado").value=resultadoResta
        console.log(`Resultado: ${resultadoResta}`)
        document.getElementById("numero1Input").value=null
        document.getElementById("numero2Input").value=null
    }
    else{
        alert("Falta llenar compo/s")
    }
})

btnMultiplicar.addEventListener("click",()=>{
    let numero1 = document.getElementById("numero1Input").value
    let numero2 = document.getElementById("numero2Input").value
    if((numero1 && numero2)){
        let resultadoMultiplicacion= parseInt(numero1) * parseInt(numero2)
        document.getElementById("resultado").value=resultadoMultiplicacion
        console.log(`Resultado: ${resultadoMultiplicacion}`)
        document.getElementById("numero1Input").value=null
        document.getElementById("numero2Input").value=null
    }
    else{
        alert("Falta llenar compo/s")
    }
})

btnDividir.addEventListener("click",()=>{
    let numero1 = document.getElementById("numero1Input").value
    let numero2 = parseInt(document.getElementById("numero2Input").value)
    if((numero1 && numero2)){
        let resultadoDivision= parseInt(numero1) / numero2
        document.getElementById("resultado").value=resultadoDivision
        console.log(`Resultado: ${resultadoDivision}`)
        document.getElementById("numero1Input").value=null
        document.getElementById("numero2Input").value=null
    }
    else{
        alert("Valor/es no valido/s")
    }
})

