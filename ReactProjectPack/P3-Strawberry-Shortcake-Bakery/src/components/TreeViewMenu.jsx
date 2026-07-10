import { useState } from "react";

function TreeViewMenu({ item }) {
  const [showChildren, setShowChildren] = useState(false);

  if (!item) return null;

  return (
    <div className="relative m-1">
      <div
        className="
          px-4
          py-2
          rounded-xl
          cursor-pointer
          flex
          items-center
          gap-2
          text-white
          font-medium
          hover:bg-white/20
          transition-all
          duration-300
          select-none
        "
        onClick={() =>
          item.children &&
          setShowChildren(!showChildren)
        }
      >
        {item.link ? (
          <a
            href={item.link}
            
          >
            {item.label}
          </a>
        ) : (
          <span>{item.label}</span>
        )}

        {item.children && (
          <span
            className="
              text-sm
              font-bold
            "
          >
            {showChildren ? "-" : "+"}
          </span>
        )}
      </div>

      {showChildren && (
        <div
          className="
            ml-3
            mt-2
            pl-2
            pr-2
            border-l-pink
            
            space-y-2
            sm:ml-6
            
          "
        >
          {item.children?.map((child) => (
            <TreeViewMenu
              key={child.id}
              item={child}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeViewMenu;