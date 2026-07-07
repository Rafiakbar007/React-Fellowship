

import menuData from "../data/menuData";
import TreeViewMenu from "./TreeViewMenu";

function TreeView({ theme }) {
  return (
    <nav
      className="
        flex
        items-center
        gap-6
        px-4
        py-2
        rounded-2xl
        shadow-lg
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