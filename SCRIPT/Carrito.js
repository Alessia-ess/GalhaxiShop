function Carrito() {
  const [productos, setProductos] = React.useState([
    {
      id: 1,
      nombre: "iPhone 13",
      marca: "Apple",
      precio: 799,
      favorito: true,
      cantidad: 0,
      imagen: "img/iphone13.jpg",
    },
    {
      id: 2,
      nombre: "iPhone 14",
      marca: "Apple",
      precio: 999,
      favorito: true,
      cantidad: 0,
      imagen: "img/iphone14.jpg",
    },
    {
      id: 3,
      nombre: "iPhone 14 Pro",
      marca: "Apple",
      precio: 1199,
      favorito: false,
      cantidad: 0,
      imagen: "img/iphone14pro.jpg",
    },
    {
      id: 4,
      nombre: "Galaxy S22",
      marca: "Samsung",
      precio: 699,
      favorito: false,
      cantidad: 0,
      imagen: "img/s22.jpg",
    },
    {
      id: 5,
      nombre: "Galaxy S22 Ultra",
      marca: "Samsung",
      precio: 899,
      favorito: false,
      cantidad: 0,
      imagen: "img/s22ultra.jpg",
    },
    {
      id: 6,
      nombre: "Galaxy A53 5G",
      marca: "Samsung",
      precio: 599,
      favorito: false,
      cantidad: 0,
      imagen: "img/a53.jpg",
    },
    {
      id: 7,
      nombre: "Pixel 7",
      marca: "Google",
      precio: 599,
      favorito: false,
      cantidad: 0,
      imagen: "img/pixel7.jpg",
    },
    {
      id: 8,
      nombre: "Pixel 17 Pro",
      marca: "Google",
      precio: 899,
      favorito: false,
      cantidad: 0,
      imagen: "img/pixel17pro.jpg",
    },
    {
      id: 9,
      nombre: "OnePlus 10T",
      marca: "OnePlus",
      precio: 699,
      favorito: true,
      cantidad: 0,
      imagen: "img/oneplus10t.jpg",
    },
    {
      id: 10,
      nombre: "OnePlus 10 Pro",
      marca: "OnePlus",
      precio: 899,
      favorito: false,
      cantidad: 0,
      imagen: "img/oneplus10pro.jpg",
    },
    {
      id: 11,
      nombre: "Xiaomi 12",
      marca: "Xiaomi",
      precio: 499,
      favorito: false,
      cantidad: 0,
      imagen: "img/mi12.jpg",
    },
    {
      id: 12,
      nombre: "Redmi Note 11 Pro",
      marca: "Xiaomi",
      precio: 399,
      favorito: false,
      cantidad: 0,
      imagen: "img/redminote11.jpg",
    },
    {
      id: 13,
      nombre: "Moto Edge 30",
      marca: "Motorola",
      precio: 349,
      favorito: false,
      cantidad: 0,
      imagen: "img/motoedge.jpg",
    },
    {
      id: 14,
      nombre: "Moto G82",
      marca: "Motorola",
      precio: 249,
      favorito: false,
      cantidad: 0,
      imagen: "img/motog82.jpg",
    },
    {
      id: 15,
      nombre: "Find X5 Pro",
      marca: "OPPO",
      precio: 799,
      favorito: false,
      cantidad: 0,
      imagen: "img/findx5.jpg",
    },
    {
      id: 16,
      nombre: "Reno8 Pro",
      marca: "OPPO",
      precio: 449,
      favorito: false,
      cantidad: 0,
      imagen: "img/reno8.jpg",
    },
    {
      id: 17,
      nombre: "ROG Phone 6",
      marca: "ASUS",
      precio: 999,
      favorito: false,
      cantidad: 0,
      imagen: "img/rog6.jpg",
    },
    {
      id: 18,
      nombre: "Xperia 1 IV",
      marca: "Sony",
      precio: 1299,
      favorito: false,
      cantidad: 0,
      imagen: "img/xperia1iv.jpg",
    },
  ]);

  const [orden, setOrden] = React.useState("nombre");
  const [total, setTotal] = React.useState(0);

  // Calcular total
  React.useEffect(() => {
    const nuevoTotal = productos.reduce((sum, producto) => {
      return sum + producto.precio * producto.cantidad;
    }, 0);
    setTotal(nuevoTotal);
  }, [productos]);

  // Ordenar productos
  const productosOrdenados = [...productos].sort((a, b) => {
    switch (orden) {
      case "nombre":
        return a.nombre.localeCompare(b.nombre);
      case "precio":
        return a.precio - b.precio;
      case "favoritos":
        return (b.favorito ? 1 : 0) - (a.favorito ? 1 : 0);
      case "marca":
        return a.marca.localeCompare(b.marca);
      default:
        return 0;
    }
  });

  // Handlers
  const toggleFavorito = (id) => {
    setProductos(
      productos.map((p) => (p.id === id ? { ...p, favorito: !p.favorito } : p))
    );
  };

  const cambiarCantidad = (id, nuevaCantidad) => {
    setProductos(
      productos.map((p) =>
        p.id === id ? { ...p, cantidad: Math.max(1, nuevaCantidad) } : p
      )
    );
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  return (
    <main className="carrito-container">
      <h1 className="carrito-title">Tu Carrito</h1>

      <select
        value={orden}
        onChange={(e) => setOrden(e.target.value)}
        className="ordenar-select"
      >
        <option value="nombre">Nombre</option>
        <option value="precio">Precio</option>
        <option value="favoritos">Favoritos</option>
        <option value="marca">Marca</option>
      </select>

      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Favorito</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productosOrdenados.map((producto) => (
            <tr key={producto.id} className="producto">
              <td>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="producto-img"
                />
              </td>
              <td>
                <i
                  className={`${
                    producto.favorito ? "fas" : "far"
                  } fa-heart favorito ${
                    producto.favorito ? "favorito-activo" : ""
                  }`}
                  onClick={() => toggleFavorito(producto.id)}
                />
              </td>
              <td>{producto.nombre}</td>
              <td>{producto.marca}</td>
              <td className="precio">${producto.precio.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  value={producto.cantidad}
                  min="1"
                  className="cantidad-input"
                  onChange={(e) =>
                    cambiarCantidad(producto.id, parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="carrito-total">
        <h3>
          Total: <span id="total-carrito">${total.toFixed(2)}</span>
        </h3>
        <button className="btn-comprar">Finalizar Compra</button>
      </div>
    </main>
  );
}

window.Carrito = Carrito;
