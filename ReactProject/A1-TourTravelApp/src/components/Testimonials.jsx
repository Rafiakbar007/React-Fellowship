import TestimonialCard from "./TestimonialCard";

function Testimonials({ reviews }) {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">

      <h2 className="font-bold text-center mb-8 text-2xl md:text-5xl lg:text-6xl">
        What Our Travelers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {reviews.map((review) => (
          <TestimonialCard
            key={review.id}
            review={review}
          />
        ))}

      </div>

    </section>
  );
}

export default Testimonials;