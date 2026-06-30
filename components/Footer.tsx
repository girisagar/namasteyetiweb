export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand__name">Namaste Yeti</span>
          <span className="brand__tag">Himalayan Indian Kitchen</span>
          <div className="footer__social">
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Explore">
          <h4>Explore</h4>
          <a href="#menu">Menu</a>
          <a href="#catering">Catering</a>
          <a href="#story">Our Story</a>
          <a href="#rewards">Rewards</a>
        </nav>

        <nav className="footer__col" aria-label="Order">
          <h4>Order</h4>
          <a href="#order">Pickup</a>
          <a href="#order">Delivery</a>
          <a href="#catering">Catering</a>
        </nav>

        <div className="footer__col">
          <h4>Visit</h4>
          <p>
            123 Himalaya Ave, Suite 4
            <br />
            Your City, ST 00000
          </p>
          <p>
            Mon–Thu 11am–9pm
            <br />
            Fri–Sun 11am–10pm
          </p>
          <p>
            <a href="tel:+10000000000">(000) 000-0000</a>
          </p>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {year} Namaste Yeti. All rights reserved.</p>
        <p>Made with 🥟 in the Himalayas.</p>
      </div>
    </footer>
  );
}
