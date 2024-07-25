const nombre = document.getElementById("nombre");
const precioAñadidos = document.getElementById("precioAñadidos");
const imagen = document.getElementById("imagen");
const descripcion = document.getElementById("descripcion");
const formulario = document.getElementById("formulario");
const sumaDinero = document.querySelector("#top3 b:nth-child(2) p");
const productosCesta = document.querySelector(".añadidos");
const listaProductos = document.getElementById("listaProductos");

formulario.onsubmit = añadir;

let productos = [];
let totalPrecio = 0;

function añadir(ev) {
    ev.preventDefault();

    const nombreProducto = nombre.value;
    let precioProducto = parseFloat(precio.value);
    const imagenProducto = imagen.value;
    const descripcionProducto = descripcion.value;



    if (nombreProducto === '') {
        alert("Introduce el nombre del producto");
        return;
    }
    if (precio.value === '' || precioProducto <= 0) {
        alert("Introduce el precio");
        return;
    }
    if (precioProducto < 0.01) {
        alert("El precio debe ser mayor a 0.01");
        return;
    }

    const productoAAñadir = document.createElement('div')
    productoAAñadir.className = "divCadaProducto"

    let html = `
    <div class="imagenAñadidos"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Ejemplo.png"
                        alt="Esto es una foto de algo" width="150"></div>
    <div>
        <p class="nombreProducto">${nombreProducto}</p>
        <p class="descripcionProducto">${descripcionProducto}</p>
    </div>
    <div class="precioAñadidos">
        <b><p>Precio:</p></b>
        <b><p>${precioProducto}</p></b>
    </div>
 `;

    productoAAñadir.innerHTML = html;

    listaProductos.append(productoAAñadir);

    productos.push({
        nombre: nombreProducto,
        precio: precioProducto,
        imagen: imagenProducto,
        descripcion: descripcionProducto
    });

    totalPrecio += precioProducto;
    sumaDinero.textContent = `${totalPrecio}`;
}


















// !!!!!! Modo Noche

document.getElementById('botonNoche').addEventListener('click', function () {
    const estilo = document.getElementById('diaNoche');
    if (estilo.getAttribute('href') === 'dia.css') {
        estilo.setAttribute('href', 'noche.css');
    } else {
        estilo.setAttribute('href', 'dia.css');
    }
});


