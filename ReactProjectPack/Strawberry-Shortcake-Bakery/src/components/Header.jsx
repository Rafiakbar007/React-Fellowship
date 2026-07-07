import TreeView from "./TreeView";

function HeaderSection({ theme }) {
  return (
    <header
      className="md:sticky top-0 z-50 shadow-xl"
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
    flex-col
    lg:flex-row
    justify-between
    items-center
    gap-4
  "
>
        <div>
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
      </div>

      <div>
         <TreeView theme={theme} />
      </div>
      
      </div>
    </header>
  );
}

export default HeaderSection;