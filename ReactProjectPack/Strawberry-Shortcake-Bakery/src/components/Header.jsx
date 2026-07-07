import TreeView from "./TreeView";

function HeaderSection({ theme }) {
  return (
    <header
      className="sticky top-0 z-50 shadow-xl"
      style={{
        backgroundColor: theme.primary,
        transition: "all 0.5s ease",
      }}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >
        <h1
          className="
            text-xl
            lg:text-3xl
            font-bold
            text-white
            drop-shadow-md
          "
        >
          🍓 Strawberry Shortcake's Sweet Bakery
        </h1>

        <TreeView theme={theme} />
      </div>
    </header>
  );
}

export default HeaderSection;