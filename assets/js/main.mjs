import Carrito from "./Carrito.mjs";
import Producto from "./Producto.mjs";

const carrito = new Carrito();

// Productos disponibles
const productosDisponibles = [
  new Producto(1, "Manzana Kilo", 1400),
  new Producto(2, "Pan Kilo", 1500),
  new Producto(3, "Leche Litro", 1360),
  new Producto(4, "Huevos 30", 3700),
  new Producto(5, "Arroz Kilo", 1200),
];

function mostrarProductosDisponibles() {
  const contenedor = document.getElementById("productosDisponibles");
  productosDisponibles.forEach((producto) => {
    const div = document.createElement("div");
    div.textContent = `${producto.id} - ${producto.nombre}: $${producto.precio}`;
    const btnAgregar = document.createElement("button");
    btnAgregar.textContent = "Agregar al Carrito";
    btnAgregar.onclick = () => carrito.agregarProducto(producto);
    /* SE PINTAN LOS ELEMENTOS DE LA LISTA Y SU BOTON AGREGAR */
    div.appendChild(btnAgregar);
    contenedor.appendChild(div);
  });
}

// Mostrar productos al cargar
mostrarProductosDisponibles();
