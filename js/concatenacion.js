const btnConcatenar= document.getElementById("btnConcatenar")

btnConcatenar.addEventListener('click',()=>{
    let nombre = document.getElementById("nombreInput").value
    let apellido = document.getElementById("apellidoInput").value
    if((apellido!=null && nombre!=null)){
        // parseInt adentro del if porque sino me toma los cero como false
        let nombreCompleto= nombre +' '+ apellido
        document.getElementById("nombreCompleto").value=nombreCompleto
        document.getElementById("nombreInput").value=null
        document.getElementById("apellidoInput").value=null
    }
    else{
        alert("Falta llenar compo/s obligatorios")
    }
})