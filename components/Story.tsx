import FoodImg from "./FoodImg";

export default function Story() {
  return (
    <section className="section story" id="story">
      <div className="container story__inner">
        <div className="story__copy">
          <span className="eyebrow">Our Story</span>
          <h2 className="section__title">Inspired by Nepal. Loved Like Indian Comfort Food.</h2>
          <p className="section__lead">
            Namaste Yeti brings together Nepali hospitality and Indian spices through momo,
            curries, naan, chowmein, thukpa, and vegetarian comfort food.
          </p>
          <div className="story__stats">
            <div>
              <strong>100%</strong>
              <span>Made fresh daily</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>Vegetarian dishes</span>
            </div>
            <div>
              <strong>★ 4.8</strong>
              <span>Average rating</span>
            </div>
          </div>
        </div>
        <div className="story__media">
          <FoodImg
            src="/images/food-fallback.png"
            alt="Chef plating fresh momo"
            emoji="👨‍🍳"
            width={520}
            height={520}
          />
        </div>
      </div>
    </section>
  );
}
