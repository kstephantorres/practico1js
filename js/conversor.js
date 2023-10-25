const btnConvertir = document.getElementById("btnConvertir")

btnConvertir.addEventListener('click',()=>{
    let gradosCelsius= document.getElementById('celsiusInput').value
    if(gradosCelsius)
    {
        let gradosFahrenheit= (parseInt(gradosCelsius)*1.8+32).toFixed(2)
        document.getElementById('fahrenheitInput').value= gradosFahrenheit
        console.log(`Grados Celsius: ${gradosCelsius}`)
        console.log(`Grados Fahrenheit: ${gradosFahrenheit}`)
    }
    else{
        alert("No ingreso un valor")
    }
})