import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({
  noOfStars = 5,
  theme,
}) {
  const [ratingStar, setRatingStar] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);

  function handleStarClick(currentStar) {
    setRatingStar(currentStar);
  }

  function handleMouseEnter(currentStar) {
    setHoverStar(currentStar);
  }

  function handleMouseLeave() {
    setHoverStar(0);
  }

  return (
    <section
      id="rating"
      className="
        py-16
        px-6
      "
    >
      <div
        className="
          max-w-2xl
          mx-auto
          rounded-3xl
          shadow-xl
          p-8
          text-center
        "
        style={{
          backgroundColor: theme.accent,
          border: `4px solid ${theme.secondary}`,
        }}
      >
        <h2
          className="
            text-4xl
            font-bold
            mb-4
          "
          style={{
            color: theme.primary,
          }}
        >
          Rate Our Sweet Bakery
        </h2>

        <p
          className="
            mb-8
            text-lg
          "
          style={{
            color: theme.secondary,
          }}
        >
          How berry-tastic is your experience?
        </p>

        <div
          className="
            flex
            justify-center
            gap-3
          "
        >
          {[...Array(noOfStars)].map((_, index) => {
            index += 1;

            return (
              <FaStar
                key={index}
                size={45}
                onClick={() =>
                  handleStarClick(index)
                }
                onMouseEnter={() =>
                  handleMouseEnter(index)
                }
                onMouseLeave={handleMouseLeave}
                className="
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:scale-125
                "
                style={{
                  color:
                    index <=
                    (hoverStar || ratingStar)
                      ? theme.primary
                      : "#d1d5db",
                }}
              />
            );
          })}
        </div>

        <p
          className="
            mt-6
            text-lg
            font-semibold
          "
          style={{
            color: theme.primary,
          }}
        >
          Your Rating: {hoverStar? hoverStar : ratingStar} / {noOfStars}
        </p>
      </div>
    </section>
  );
}

export default StarRating;