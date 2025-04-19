function Catalogo() {
  const productos = [
    { id: 1, nombre: "iPhone 13", precio: 999.0, imagen: "img/iphone13.jpg" },
    { id: 2, nombre: "Galaxy S22", precio: 999.0, imagen: "img/s22.jpg" },
    {
      id: 3,
      nombre: "Google Pixel 6",
      precio: 890.0,
      imagen: "img/gpixel6.jpg",
    },
    { id: 4, nombre: "One Plus 9", precio: 870.0, imagen: "img/oneplus9.jpg" },
    {
      id: 5,
      nombre: "Huawei Pro 50",
      precio: 960.0,
      imagen: "img/huawei-p50.jpg",
    },
    { id: 6, nombre: "Honor X9c", precio: 870.0, imagen: "img/honox9.jpg" },
    { id: 7, nombre: "Galaxy S25", precio: 1240.0, imagen: "img/gs25.jpg" },
    { id: 8, nombre: "Xiaomi 12", precio: 999.0, imagen: "img/xiaomi12.jpg" },
  ];

  const [carrito, setCarrito] = React.useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`${producto.nombre} agregado al carrito!`);
  };

  return (
    <main className="catalogo-container">
      <h1 className="catalogo-title">Catálogo de Celulares</h1>

      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="producto-img"
              onError={(e) => (e.target.src = "img/placeholder.jpg")}
            />
            <div className="producto-info">
              <h3>{producto.nombre}</h3>
              <p className="producto-precio">${producto.precio.toFixed(2)}</p>
              <button
                className="btn-agregar"
                onClick={() => agregarAlCarrito(producto)}
              >
                <i className="fas fa-cart-plus"></i> Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

window.Catalogo = Catalogo;
