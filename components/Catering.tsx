import FoodImg from "./FoodImg";

export default function Catering() {
  return (
    <section className="section catering" id="catering">
      <div className="container catering__inner">
        <div className="catering__media">
          <FoodImg
            src="/images/catering-platter.png"
            alt="A large catering platter of momo, curries and naan"
            emoji="🍱"
            width={560}
            height={560}
          />
        </div>
        <div className="catering__copy">
          <span className="eyebrow eyebrow--light">Feed the whole crew</span>
          <h2 className="section__title">Catering for Office Lunches, Parties &amp; Events</h2>
          <p className="section__lead">
            Serve momo, curries, naan, rice, noodles, and vegetarian favorites at your next
            gathering.
          </p>
          <div className="catering__buttons">
            <a href="#order" className="btn btn--primary btn--lg">
              Request Catering
            </a>
            <a href="#menu" className="btn btn--outline-light btn--lg">
              View Catering Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
