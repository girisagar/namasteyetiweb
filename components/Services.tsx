export default function Services() {
  return (
    <section className="section services" id="order">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">How to enjoy us</span>
          <h2 className="section__title">Dine In • Takeout • Delivery</h2>
        </header>

        <div className="services__grid">
          <article className="service-card">
            <span className="service-card__icon">🍽️</span>
            <h3>Dine In</h3>
            <p>Relax with momo, curries, naan, rice dishes, and Himalayan favorites.</p>
            <a href="#location" className="link-arrow">
              Find us <span>→</span>
            </a>
          </article>

          <article className="service-card service-card--accent">
            <span className="service-card__icon">🥡</span>
            <h3>Takeout</h3>
            <p>Order ahead and pick up fresh, hot food when you arrive.</p>
            <a href="#order" className="link-arrow">
              Order pickup <span>→</span>
            </a>
          </article>

          <article className="service-card">
            <span className="service-card__icon">🛵</span>
            <h3>Delivery</h3>
            <p>Get momo, curry, chowmein, and comfort food delivered to your door.</p>
            <a href="#order" className="link-arrow">
              Order delivery <span>→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
