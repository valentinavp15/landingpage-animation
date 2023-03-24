// Accediendo al DOM
const modal = document.querySelector('.modal');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const closeButton = document.querySelector('.modal-closed');

// Creo un array con cada boton de florecitas
const buttons = Array.of(button1, button2, button3);

// Funcion con arrow () => {}.
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    });
});


closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});