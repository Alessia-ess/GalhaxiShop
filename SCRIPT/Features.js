function Features() {
  return (
    <section className="features">
      <h2>¿Por qué elegirnos?</h2>
      <div className="features-grid">
        <FeatureCard
          iconClass="fas fa-tag"
          title="Precios competitivos"
          text="Ofertas semanales y descuentos únicos"
        />
        <FeatureCard
          iconClass="fas fa-mobile-alt"
          title="Últimos modelos"
          text="Solo celulares de calidad y marcas reconocidas"
        />
        <FeatureCard
          iconClass="fas fa-shipping-fast"
          title="Envío rápido"
          text="Recibe tu pedido en 48 horas"
        />
      </div>
    </section>
  );
}
