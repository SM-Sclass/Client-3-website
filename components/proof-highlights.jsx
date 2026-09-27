import { verifiedReviews } from "@/app/site-data";

export function ProofHighlights({ limit = 2 }) {
  const reviews = verifiedReviews.slice(0, limit);
  if (!reviews.length) return null;

  return (
    <div className="proof-highlights">
      {reviews.map((review, index) => (
        <article className="proof-highlight card" key={`${review.name}-${index}`}>
          <div className="proof-highlight-head">
            <div>
              <h3>{review.name}</h3>
              <p className="review-meta">
                {review.carModel} &middot; {review.city}
              </p>
            </div>
            <span className="proof-highlight-rating" aria-label={`${review.rating} out of 5 stars`}>
              {review.rating} &#9733;
            </span>
          </div>
          <p className="proof-highlight-body">
            <strong>Found:</strong> {review.problem}
          </p>
          <p className="proof-highlight-body">
            <strong>Outcome:</strong> {review.saved}
          </p>
          <p className="proof-highlight-date">{review.date}</p>
        </article>
      ))}
    </div>
  );
}
