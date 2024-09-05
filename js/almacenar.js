document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("listado")) {
        listado = JSON.parse(localStorage.getItem("listado"));
        mostrarListado();
    }
});

let listado = [];

console.log(listado);

document.getElementById("agregar").addEventListener("click", function (){
    let item = document.getElementById("item").value;

    if (item) {
        listado.push(item);
        localStorage.setItem("listado", JSON.stringify(listado));
        console.log(listado);
    }

    document.getElementById("item").value = "";

    mostrarListado();
})

function mostrarListado() {
    let mostrar = document.getElementById("contenedor");
    mostrar.innerHTML = "";

    listado.forEach(elemento => {
        mostrar.innerHTML += `
            <li class="list-group-item">${elemento}</li>
        `;
    });
}

document.getElementById("limpiar").addEventListener("click", function () {
    
    listado.length = "";
    localStorage.setItem("listado", JSON.stringify([]));
    console.log(listado);

    borrarListado();
})

function borrarListado() {
    let borrar = document.getElementById("contenedor");

    borrar.innerHTML = "";
}