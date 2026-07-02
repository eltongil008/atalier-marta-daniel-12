export function Stars({ rating }) {
  return (
    <div className="stars">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
}