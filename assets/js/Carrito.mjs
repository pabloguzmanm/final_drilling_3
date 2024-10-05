// Clase Carrito
class Carrito {
  constructor() {
    this.productos = [];
  }

  /* AGREGA PRODUCTO AL CARRITO */
  agregarProducto(producto) {
    this.productos.push(producto);
    this.actualizarCarrito();
  }

  /* ELIMINA PRODUCTO DEL CARRITO */
  eliminarProducto(id) {
    this.productos = this.productos.filter((producto) => producto.id !== id);
    this.actualizarCarrito(); // ACTUALIZA EL CARRITO
  }

  /* ACTULIZA EL CARRITO */
  actualizarCarrito() {
    const listaProductos = document.getElementById("listaProductos");

    listaProductos.innerHTML = ""; // LIMPIA LA LISTA DE PRODUCTOS
    this.productos.forEach((producto) => {
      const li = document.createElement("li");
      li.textContent = `${producto.id} -${producto.nombre}: $${producto.precio}`;
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.onclick = () => this.eliminarProducto(producto.id);
      listaProductos.appendChild(li);
      li.appendChild(btnEliminar);
    });
    this.actualizarTotal();
  }

  /* ACTUALIZA EL TOTAL DEL CARRITO */
  actualizarTotal() {
    const total = this.productos.reduce(
      (sum, producto) => sum + producto.precio,
      0
    );
    document.getElementById("totalCarrito").textContent = `Total: $${total}`;
  }

  /* VACIAR EL CARRITO */
  vaciarCarrito() {
    btnVaciarCarrito = document.getElementById("botonVaciar");
    btnVaciarCarrito.textContent = "vaciar Carrito";
    this.actualizarCarrito();
  }
}

export default Carrito;
