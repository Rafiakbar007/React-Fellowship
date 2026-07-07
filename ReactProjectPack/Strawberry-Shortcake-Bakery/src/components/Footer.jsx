function FooterSection({ theme }) {
  return (
    <footer
      className="
        mt-16
        py-10
        px-6
        text-center
      "
      style={{
        backgroundColor: theme.primary,
      }}
    >
      <h2
        className="
          text-2xl
          font-bold
          text-white
          mb-3
        "
      >
        🍓 Strawberry Shortcake's Sweet Bakery
      </h2>

      <p
        className="
          text-white/90
          max-w-2xl
          mx-auto
          mb-6
        "
      >
        A sweet React project inspired by Strawberry
        Shortcake, built with themes, sliders, API calls,
        ratings, accordions, and lots of berry magic.
      </p>

      <div
        className="
          flex
          justify-center
          gap-6
          flex-wrap
          mb-6
        "
      >
        <a
          href="#home"
          className="text-white hover:underline"
        >
          Home
        </a>

        <a
          href="#characters"
          className="text-white hover:underline"
        >
          Characters
        </a>

        <a
          href="#bakery"
          className="text-white hover:underline"
        >
          Bakery Shop
        </a>

        <a
          href="#rating"
          className="text-white hover:underline"
        >
          Ratings
        </a>

        <a
          href="#faq"
          className="text-white hover:underline"
        >
          FAQ
        </a>
      </div>

      <div
        className="
          border-t
          border-white/30
          pt-4
        "
      >
        <p className="text-white/80 text-sm">
          © 2026 Strawberry Shortcake's Sweet Bakery.
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;