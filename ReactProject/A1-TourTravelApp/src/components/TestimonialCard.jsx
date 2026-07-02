function TestimonialCard({ review }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      

      {/* Review */}
      <p className="text-gray-700 italic mb-4">
        "{review.review}"
      </p>

      {/* Name */}
      <h3 className="font-bold text-lg">
        — {review.name}
      </h3>

    </div>
  );
}

export default TestimonialCard;