const boton = document.querySelector('.boton_calcular')

function resultado(){
    const result = document.getElementById('resultado')
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let convertir =  (peso/altura **2)
    
    result.value =  convertir.toFixed(2)
}

boton.addEventListener('click',resultado)