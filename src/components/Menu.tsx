// components/Menu.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Menu = ({ menus, onSelectMenu }) => {
  return (
    <div
      // className="w-full flex overflow-x-auto lg:grid lg:grid-cols-4 md:grid-cols-3 gap-[10px] py-[10px] place-content-between"
      className="w-full flex flex-wrap p-[10px] gap-[10px] h-full flex-row"
    >
      {menus && menus.length > 0 ? (
        menus.map((menu) => (
          <div
            key={menu.id}
            // className={`group transition shrink-0 w-[150px] lg:w-full h-[100px] p-[10px] rounded relative bg-[${menu.color}] group active:scale-90`}
            className={`rounded bg-[${menu.color}] p-[10px] rounded cursor-pointer  w-[200px] h-[120px] flex items-center justify-start pl-[2rem] gap-5 active:scale-90 transition`}
            onClick={() => onSelectMenu(menu)}
          >
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
