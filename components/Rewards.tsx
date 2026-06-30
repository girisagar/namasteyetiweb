"use client";

export default function Rewards() {
  return (
    <section className="section rewards" id="rewards">
      <div className="container rewards__inner">
        <span className="eyebrow eyebrow--light">Namaste Yeti Rewards</span>
        <h2 className="section__title">Get Rewarded for Your Cravings</h2>
        <p className="section__lead">
          Join Namaste Yeti Rewards for special offers, new menu drops, birthday treats, and
          exclusive food updates.
        </p>
        <form className="rewards__form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="you@email.com" aria-label="Email address" required />
          <button type="submit" className="btn btn--primary btn--lg">
            Join Rewards
          </button>
        </form>
      </div>
    </section>
  );
}
