// Buena suerte

const inputPounds = document.querySelector('#input');
const spanResult = document.querySelector('#result');

// asociamos el evento 'input'
inputPounds.addEventListener("input", function(event){

    // pounds a convertir
    const pounds = event.target.value;

    // 1 pound son 0,453592 kg
    // Hay que multiplicar el valor de variable pounds por 0,453592

    // El resultado escribirlo en el nodo #result. Podemos hacer ambas operaciones en una línea. Además redondeamos a 2 decimales
    spanResult.textContent =  (pounds * 0.453592).toFixed(2);
    

})