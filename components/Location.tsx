export default function Location() {
  return (
    <section className="section location" id="location">
      <div className="container location__inner">
        <div className="location__info">
          <span className="eyebrow">Come visit</span>
          <h2 className="section__title">Find Namaste Yeti</h2>

          <ul className="location__list">
            <li>
              <span className="location__label">📍 Address</span>
              <span>
                123 Himalaya Ave, Suite 4
                <br />
                Your City, ST 00000
              </span>
            </li>
            <li>
              <span className="location__label">🕒 Hours</span>
              <span>
                Mon–Thu 11am–9pm
                <br />
                Fri–Sun 11am–10pm
              </span>
            </li>
            <li>
              <span className="location__label">📞 Phone</span>
              <span>
                <a href="tel:+10000000000">(000) 000-0000</a>
              </span>
            </li>
            <li>
              <span className="location__label">🅿️ Parking &amp; Pickup</span>
              <span>Free lot parking. Dedicated pickup shelf by the front door.</span>
            </li>
            <li>
              <span className="location__label">🛵 Delivery Area</span>
              <span>We deliver within a 5-mile radius of the restaurant.</span>
            </li>
          </ul>

          <div className="location__buttons">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener"
              className="btn btn--primary"
            >
              Get Directions
            </a>
            <a href="tel:+10000000000" className="btn btn--outline">
              Call Now
            </a>
            <a href="#order" className="btn btn--outline">
              Order Pickup
            </a>
            <a href="#order" className="btn btn--outline">
              Order Delivery
            </a>
          </div>
        </div>

        <div className="location__map">
          <iframe
            title="Map to Namaste Yeti"
            src="https://www.google.com/maps?q=Himalayan+restaurant&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
