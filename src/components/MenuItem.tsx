import React from "react";

interface MenuItemProps {
  menu: {
    items: {
      title: string;
      price: number;
    }[];
  };
  onAddToCart: (item: { title: string; price: number }) => void;
  color: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ menu, onAddToCart, color }) => {
  return (
    <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 place-content-between overscroll-none grid-cols-2 gap-[10px] p-[10px] lg:py-[10px] overflow-y-auto max-h-screen">
      {menu.items && menu.items.length > 0 ? (
        menu.items.map((item) => (
          <div
            key={item.title}
            className={`group transition w-full duration-500 active:scale-90 h-[150px] p-[10px] rounded relative bg-[#2d2d2d] border-l-4 border-[${color}] focus:bg-[${color}] cursor-pointer`}
            tabIndex={1}>
            <div className="text-xs group-focus:text-black text-[#a1a2a4] pb-[10px] line-clamp-1">
              Orders → Kitchen
            </div>
            <div>
              <div className="text-white group-focus:text-black line-clamp-1">
                {item.title}
              </div>
              <div className="text-xs text-[#a1a2a4] group-focus:text-black">
                £{`${item.price.toFixed(2)}`}
              </div>
            </div>
            <div className="w-full flex flex-nowrap self-end justify-end justify-self-end">
              <button onClick={() => onAddToCart(item)} className="btn-1">
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-xl text-red-500">No Items</div>
      )}
    </div>
  );
};

export default MenuItem;
