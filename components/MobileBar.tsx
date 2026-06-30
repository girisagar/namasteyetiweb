export default function MobileBar() {
  return (
    <nav className="mobile-bar" aria-label="Quick actions">
      <a href="#menu">
        <span>📖</span>Menu
      </a>
      <a href="#order" className="mobile-bar__order">
        <span>🛍️</span>Order
      </a>
      <a href="tel:+10000000000">
        <span>📞</span>Call
      </a>
      <a href="#location">
        <span>📍</span>Directions
      </a>
    </nav>
  );
}
