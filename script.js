let totalCarrito = 0;

function filtrarCategoria() {
    const categoriaSeleccionada = document.getElementById("categoriaSelect").value;
    const productos = document.querySelectorAll(".card");

    productos.forEach(producto => {
        if (categoriaSeleccionada === "todos" || producto.classList.contains(categoriaSeleccionada)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
}

function agregarAlCarrito(producto) {
    totalCarrito++; 
    alert("Producto añadido al carrito: " + producto);
    actualizarContador();
}
function actualizarContador() {
    document.getElementById("contadorCarrito").innerHTML = totalCarrito;
}