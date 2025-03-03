function btnSuma() {
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const resultado = document.querySelector('.resultado')
    resultado.value = num1 + num2
}
function btnResta(){
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const resultado = document.querySelector('.resultado')
    resultado.value = num1 - num2
}

function btnMultiplicacion(){
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const resultado = document.querySelector('.resultado')
    resultado.value = num1 * num2
}

function btnDivision(){
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const resultado = document.querySelector('.resultado')
    resultado.value = num1 / num2
}