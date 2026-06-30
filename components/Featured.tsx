import { dishes } from "@/lib/data";
import FoodImg from "./FoodImg";

export default function Featured() {
  return (
    <section className="section featured" id="menu">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">A taste of the menu</span>
          <h2 className="section__title">Featured Dishes</h2>
          <p className="section__lead">
            Six favorites worth the trip. The full menu has plenty more.
          </p>
        </header>

        <div className="dishes">
          {dishes.map((dish) => (
            <article key={dish.name} className={`dish${dish.reverse ? " dish--reverse" : ""}`}>
              <div className="dish__media">
                <FoodImg src={dish.img} alt={dish.alt} emoji={dish.emoji} />
              </div>
              <div className="dish__body">
                <h3 className="dish__name">{dish.name}</h3>
                <p className="dish__desc">{dish.desc}</p>
                <a href="#order" className="btn btn--primary dish__order">
                  Order →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="featured__cta">
          <a href="#order" className="btn btn--outline btn--lg">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
