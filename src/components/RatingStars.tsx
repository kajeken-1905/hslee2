export function RatingStars({ rating }: { rating: number }) {
  return (
    <span className="rating" aria-label={`Rating ${rating}`}>
      <span className="star" aria-hidden>
        ★
      </span>
      {rating.toFixed(1)}
    </span>
  )
}
