// BUSCADOR DE GATOS

const buscador = document.getElementById("buscador");

const tarjetas = document.querySelectorAll(".card");

const mensaje = document.getElementById("mensaje");


buscador.addEventListener("input", function() {

    // Obtener el texto que escribe el usuario
    const texto = buscador.value.toLowerCase().trim();

    // Contador de tarjetas visibles
    let gatosEncontrados = 0;


    // Recorrer todas las tarjetas
    tarjetas.forEach(function(tarjeta) {

        const nombre = tarjeta.dataset.nombre;

        const caracteristicas = tarjeta.dataset.caracteristicas;


        // Verificar si coincide el texto de búsqueda
        if (
            nombre.includes(texto) ||
            caracteristicas.includes(texto)
        ) {

            tarjeta.style.display = "block";

            gatosEncontrados++;

        } else {

            tarjeta.style.display = "none";

        }

    });


    // Mostrar mensaje si no hay resultados
    if (gatosEncontrados === 0) {

        mensaje.style.display = "block";

    } else {

        mensaje.style.display = "none";

    }

});


// BOTONES DE ADOPCIÓN

const botones = document.querySelectorAll("button");


botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const nombreGato = boton
            .parentElement
            .querySelector("h3")
            .textContent;

        alert(
            "¡Gracias por tu interés en adoptar a "
            + nombreGato
            + "! 🐱"
        );

    });

});

document.addEventListener("DOMContentLoaded", ()=>{
    const texto = document.querySelector(".texto")
setInterval(()=>{
    window.location.reload()
},5000)

});