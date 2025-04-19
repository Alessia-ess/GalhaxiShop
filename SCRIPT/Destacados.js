function Destacados() {
  return (
    <section className="destacados">
      <h2>Celulares Destacados</h2>
      <div className="productos-grid">
        <div className="producto-card">
          <img src="img/iphone13.jpg" alt="iPhone 13" />
          <h3>iPhone 13</h3>
          <p>$899.00</p>
        </div>
        <div className="producto-card">
          <img src="img/s22.jpg" alt="Samsung Galaxy S22" />
          <h3>Galaxy S22</h3>
          <p>$799.00</p>
        </div>
        <div className="producto-card">
          <img src="img/xiaomi12.jpg" alt="Xiaomi 12" />
          <h3>Xiaomi 12</h3>
          <p>$599.00</p>
        </div>
      </div>
    </section>
  );
}
