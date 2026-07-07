import { useState } from "react";

function TreeViewMenu({ item }) {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <div className="relative">
      <div
        className="
          px-4
          py-2
          rounded-lg
          cursor-pointer
          font-medium
          text-white
          hover:bg-white/20
          transition-all
          duration-300
          flex
          items-center
          gap-2
        "
        onClick={() => setShowChildren(!showChildren)}
      >
        <a href={item.link}>
          {item.label}
        </a>

        {item.children && (
          <span>
            {showChildren ? "▲" : "▼"}
          </span>
        )}
      </div>

      {showChildren && item.children && (
        <div
          className="
            absolute
            top-full
            left-0
            mt-2
            min-w-45
            bg-white
            rounded-xl
            shadow-xl
            overflow-hidden
            z-50
          "
        >
          {item.children.map((child) => (
            <a
              key={child.id}
              href={child.link}
              className="
                block
                px-4
                py-3
                text-gray-700
                hover:bg-pink-100
                transition-all
              "
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeViewMenu;