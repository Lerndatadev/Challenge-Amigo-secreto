// Array para almacenar nombres

const nombres = [];

// Función para agregar los nombres de los amigos
function agregarAmigo() {
    const input = document.querySelector(".input-name");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    if (nombre[0] !== nombre[0].toUpperCase()) {
        alert("El nombre debe comenzar con una letra mayúscula. Ejemplo: 'Lerner'");
        return;
    }

    // Verificar si el nombre ya existe en el array
    if (nombres.includes(nombre)) {
        alert("Este nombre ya ha sido agregado. Ingrese otro nombre por favor");
        return;
    }

    nombres.push(nombre);
    input.value = "";   
    mostrarNombres();
}

function mostrarNombres() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < nombres.length; i++) {
        const li = document.createElement("li");
        li.textContent = nombres[i];
        lista.appendChild(li);
    }
}
