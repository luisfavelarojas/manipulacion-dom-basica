const input = document.querySelector('#calculo')
const form = document.querySelector('#form')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#result')

form.addEventListener('submit' , sumarInput);


function sumarInput(e){
    e.preventDefault()
   const sumaInputs = input.value + input2.value
   resultado.innerText = 'Resultado: ' + sumaInputs
}