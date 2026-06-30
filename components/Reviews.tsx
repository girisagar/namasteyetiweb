import { reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section className="section reviews">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">Social proof</span>
          <h2 className="section__title">People Love the Flavor</h2>
        </header>

        <div className="reviews__grid">
          {reviews.map((review) => (
            <figure key={review.author} className="review">
              <div className="review__stars">★★★★★</div>
              <blockquote>{review.quote}</blockquote>
              <figcaption>{review.author}</figcaption>
            </figure>
          ))}
        </div>

        <div className="reviews__social">
          <span>Follow the flavor:</span>
          <a href="#" aria-label="Facebook">
            Facebook
          </a>
          <a href="#" aria-label="TikTok">
            TikTok
          </a>
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
