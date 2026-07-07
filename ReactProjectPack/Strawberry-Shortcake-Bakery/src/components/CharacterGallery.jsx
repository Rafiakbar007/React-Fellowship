

import { useState, useEffect } from "react";

function CharacterGallery({ theme }) {


  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchCharacters() {
    try {
      setLoading(true);

      const response = await fetch("/characters.json");
      const data = await response.json();

      setCharacters(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-6 text-center">
        <h2>Loading Berry Friends...</h2>
      </section>
    );
  }

  return (
    <section
      id="characters"
      className="py-16 px-6"
    >
      <h2
        className="
          text-4xl
          font-bold
          text-center
          mb-10
        "
        style={{
          color: theme.primary,
        }}
      >
        Meet the Berry Best Friends
      </h2>

      {characters.length > 0 && (
        <div
          className="
            flex
            justify-center
            items-center
            max-w-2xl
            mx-auto
            rounded-3xl
            shadow-xl
            p-6
          "
          style={{
            backgroundColor: theme.accent,
            border: `4px solid ${theme.secondary}`,
          }}
        >
         <div>
           <img
            src={characters[currentSlide].image}
            alt={characters[currentSlide].name}
            className="
              w-full
              h-80
              object-contain
              rounded-2xl
            "
          />

         </div>

         <div>
 <h3
            className="
              text-2xl
              font-bold
              text-center
              mt-5
            "
            style={{
              color: theme.primary,
            }}
          >
            {characters[currentSlide].name}
          </h3>

           <p
            className="
              text-center
              text-gray-600
              mt-3
              leading-relaxed
            "
          >
            {characters[currentSlide].description}
          </p>

 <div
            className="
              flex
              justify-center
              gap-4
              mt-6
            "
          >
            <button
              onClick={() =>
                setCurrentSlide(
                  currentSlide === 0
                    ? characters.length - 1
                    : currentSlide - 1
                )
              }
              className="
                px-5
                py-2
                rounded-full
                text-white
                font-medium
                transition-all
                hover:scale-105
              "
              style={{
                backgroundColor: theme.primary,
              }}
            >
              ← Previous
            </button>

            <button
              onClick={() =>
                setCurrentSlide(
                  currentSlide === characters.length - 1
                    ? 0
                    : currentSlide + 1
                )
              }
              className="
                px-5
                py-2
                rounded-full
                text-white
                font-medium
                transition-all
                hover:scale-105
              "
              style={{
                backgroundColor: theme.primary,
              }}
            >
              Next →
            </button>
          </div>

          <div
            className="
              flex
              justify-center
              gap-2
              mt-6
            "
          >
            {characters.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="
                  w-3
                  h-3
                  rounded-full
                  transition-all
                "
                style={{
                  backgroundColor:
                    currentSlide === index
                      ? theme.primary
                      : "#d1d5db",
                  transform:
                    currentSlide === index
                      ? "scale(1.3)"
                      : "scale(1)",
                }}
              />
            ))}
          </div>

          <p
            className="
              text-center
              mt-4
              text-sm
            "
            style={{
              color: theme.secondary,
            }}
          >
            {currentSlide + 1} / {characters.length}
          </p>
        </div>

         </div>
         
         
         
      )}
    </section>
  );
}

export default CharacterGallery;