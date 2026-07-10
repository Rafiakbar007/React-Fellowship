import {
  generateStrawberryTheme,
  generateBlueberryTheme,
  generateLemonTheme,
  generateOrangeTheme,
  generateRaspberryTheme,
} from "../data/themeGenerator";

function HeroSection({ theme, setTheme }) {
  return (
    <section
      id="home"
      className="px-6 py-16 lg:px-20"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Side */}
        <div className="flex-1">

          <span
            className="inline-block px-4 py-2 rounded-full font-semibold mb-6 shadow-md"
            style={{
              backgroundColor: theme.secondary,
              color: "#fff",
            }}
          >
            🍓 Berry Sweet Adventures Await!
          </span>

          <h1
            className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
            style={{
              color: theme.primary,
            }}
          >
            Welcome to Strawberry Shortcake's Sweet Bakery
          </h1>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
            Step into a world filled with delicious cakes,
            berry-flavored cookies, magical muffins, and sweet
            adventures inspired by Strawberry Shortcake and her
            berry best friends.
          </p>

          {/* Theme Buttons */}
          <div className="flex flex-wrap gap-4">

            <button
              onClick={() =>
                setTheme(generateStrawberryTheme())
              }
              className="px-5 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              🍓 Strawberry
            </button>

            <button
              onClick={() =>
                setTheme(generateBlueberryTheme())
              }
              className="px-5 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              🫐 Blueberry
            </button>

            <button
              onClick={() =>
                setTheme(generateLemonTheme())
              }
              className="px-5 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              🍋 Lemon
            </button>

            <button
              onClick={() =>
                setTheme(generateOrangeTheme())
              }
              className="px-5 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              🍊 Orange
            </button>

            <button
              onClick={() =>
                setTheme(generateRaspberryTheme())
              }
              className="px-5 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              🍰 Raspberry
            </button>

            <button
              className="px-5 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: theme.primary,
              }}
            >
              🎨 Surprise Me
            </button>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">

          <img
            src="https://static.tvtropes.org/pmwiki/pub/images/2009group.jpg"
            alt="Strawberry Shortcake"
            className="w-full max-w-xl rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default HeroSection;