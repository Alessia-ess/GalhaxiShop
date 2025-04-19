function ProductoCard({ img, nombre, precio }) {
  return (
    <div className="producto-card">
      <img src={img} alt={nombre} className="producto-img" />
      <div className="producto-info">
        <h3 className="producto-nombre">{nombre}</h3>
        <p className="producto-precio">${precio}</p>
        <button className="btn-agregar">Agregar al carrito</button>
      </div>
    </div>
  );
}
