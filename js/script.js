//Se definen los datos del formulario 

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const formulario = document.querySelector('.formulario');


//Se verifica el completado de los inputs

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


//Valida el formulario

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
    } else {
        mensajeExito('El formulario ha sido enviado correctamente');
    }

})

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

//Muestra mensaje de error de validación

function mostrarError(mensaje) {
    const error = document.createElement('p'); //Se crea un párrafo
    error.textContent = mensaje;
    error.classList.add('error'); //Se crea una clase

    formulario.appendChild(error);

    //Desaparece after de 5 seg

    setTimeout(() => {
        error.remove();
    }, 2500);

}

//Muestra mensaje de éxito de validación

function mensajeExito(mensaje) {
    const exito = document.createElement('p'); //Se crea un párrafo
    exito.textContent = mensaje;
    exito.classList.add('exito'); //Se crea una clase

    formulario.appendChild(exito);

    //Desaparece after de 5 seg

    setTimeout(() => {
        exito.remove();
    }, 2500);

}
