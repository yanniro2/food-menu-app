import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types"; // Import IconDefinition from FontAwesome

interface MenuProps {
  menus: {
    id: number;
    color: string;
    icon: IconDefinition; // Use IconDefinition type for the icon prop
    title: string;
    count: number;
  }[];
  onSelectMenu: (menu: {
    id: number;
    color: string;
    icon: IconDefinition;
    title: string;
    count: number;
  }) => void;
}

const Menu: React.FC<MenuProps> = ({ menus, onSelectMenu }) => {
  return (
    <div className="w-full flex flex-wrap p-[10px] gap-[10px] h-full flex-row">
      {menus && menus.length > 0 ? (
        menus.map((menu) => (
          <div
            key={menu.id}
            className={`rounded bg-[${menu.color}] p-[10px] rounded cursor-pointer  w-[200px] h-[120px] flex items-center justify-start pl-[2rem] gap-5 active:scale-90 transition`}
            onClick={() => onSelectMenu(menu)}>
            <FontAwesomeIcon className="h-[24px] text-black" icon={menu.icon} />
            <div className="bottom-[10px]">
              <div className="text-black">{menu.title}</div>
              <div className="text-xs text-gray-600">{`${menu.count} items`}</div>
            </div>
          </div>
        ))
      ) : (
        <div>No Menus</div>
      )}
    </div>
  );
};

export default Menu;
