

import menuData from "../data/menuData";
import TreeViewMenu from "./TreeViewMenu";

function TreeView({ theme }) {
  return (
    <nav
      className="
        flex
        justify-between
        items-center
        py-2
        rounded-2xl
        shadow-lg
        md:gap-6
        md:px-4
      "
      style={{
        backgroundColor: theme.secondary,
        transition: "all 0.5s ease",
      }}
    >
      {menuData.map((item) => (
        <TreeViewMenu
          key={item.id}
          item={item}
        />
      ))}
    </nav>
  );
}

export default TreeView;