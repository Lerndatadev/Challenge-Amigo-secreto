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


//  función sortear amigo

let intentos = 0;
const nombresSorteados = [];

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Filtrar los nombres que aún no han sido sorteados
    const disponibles = nombres.filter(nombre => !nombresSorteados.includes(nombre));

    if (disponibles.length === 0) {
        alert("Todos los amigos ya han sido sorteados. La lista se reiniciará.");
        nombresSorteados.length = 0;
        document.getElementById("resultado").innerHTML = "";
        intentos = 0;
        // Reinicia la lista principal de nombres
        nombres.length = 0;
        mostrarNombres();
        return;
    }

    if (intentos < 3) {
        const indiceAleatorio = Math.floor(Math.random() * disponibles.length);
        const nombreSorteado = disponibles[indiceAleatorio];
        nombresSorteados.push(nombreSorteado);

        const resultado = document.getElementById("resultado");
        resultado.innerHTML += `<li>${nombreSorteado}</li>`;
        intentos++;
    } else {
        alert("Has realizado 3 sorteos. La lista se reiniciará para ingresar nuevos nombres.");
        nombresSorteados.length = 0;
        document.getElementById("resultado").innerHTML = "";
        intentos = 0;
        // Reinicia la lista principal de nombres
        nombres.length = 0;
        mostrarNombres();
    }
}