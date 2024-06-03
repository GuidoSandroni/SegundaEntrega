// Array para almacenar tareas
let tareas = [];

function renderizarTareas(tareasFiltradas = tareas) {
    const listaTareas = document.getElementById(`lista-tareas`);
    listaTareas.innerHTML = '';

    tareasFiltradas.forEach((tarea, index) => {
        const tareaElemento = document.createElement('li');

        const textoTarea = document.createElement ('span');
        textoTarea.textContent = tarea.texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'eliminar';
        botonEliminar.addEventListener('click', function(){
            eliminarTarea(index);

        
    
    });

    tareaElemento.appendChild(textoTarea);
    tareaElemento.appendChild(botonEliminar);

    listaTareas.appendChild(tareaElemento);
    });
}

// Función para agregar tareas
function agregarTarea(texto) {
    const nuevaTarea = {
        texto: texto,
        completada: false
    };

    tareas.push(nuevaTarea);
    renderizarTareas();
}

//Función para eliminar tareas
function eliminarTarea(index) {
    tareas.splice(index, 1);
    renderizarTareas();
}

//Función para buscar y filtrar tareas 
function buscarTarea(termino) {
    const tareasFiltradas = tareas.filter(tarea => tarea.texto.toLowerCase().indludes(termino.toLowerCase()));
    renderizarTareas(tareasFiltradas)
}

// Eventos
document.getElementById('agregar-tarea').addEventListener('click', function(){
    const nuevaTareaInput = document.getElementById('nueva-tarea');
    const nuevaTareaTexto = nuevaTareaInput.value;

    if (nuevaTareaTexto === '') {
        alert('Por favor, ingresa una tarea!');
        return;
    }

    agregarTarea(nuevaTareaTexto);
    nuevaTareaInput.value = '';


});

document.getElementById('buscar-tarea').addEventListener('input', function() {
    const terminoBusqueda = document.getElementById('buscar-tarea').value;
    buscarTarea(terminoBusqueda)

});

// Render de tareas iniciales ( si hay)
renderizarTareas();