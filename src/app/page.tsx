"use client";
import React, { useState } from "react";
import Lastpart from "@/components/LastPart";
import Menu from "@/components/Menu";
import Navibar from "@/components/Navbar";
import Searchpart from "@/components/Search";
import menusData from "@/data/foodItems";
import MenuItem from "@/components/MenuItem";
import CalculateSide from "@/components/CalculateSide";
function page() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle menu selection
  const handleMenuSelection = (menu) => {
    setSelectedMenu(menu);
  };

  // Function to add an item to the selected items
  const handleAddToCart = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  // Function to edit an item in the selected items
  const handleEditItem = (editedItem) => {
    const updatedItems = selectedItems.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    setSelectedItems(updatedItems);
  };

  // Function to remove an item from the selected items
  const handleRemoveItem = (itemToRemove) => {
    const updatedItems = selectedItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setSelectedItems(updatedItems);
  };

  // Calculate the total payment
  const totalPayment = selectedItems.reduce(
    (total, item) => total + item.price,
    0
  );
  return (
    <div className="h-screen w-screen bg-[#121315] flex justify-between items-center">
      <div className="left  w-3/4 h-full relative">
        <div className="navbar bg-black absolute top-0 left-0 right-0 h-[4rem] z-50">
          <Navibar />
          <Searchpart />
        </div>
        <div className=" pt-[4rem] h-full relative">
          <div className=" h-2/5 w-full">
            <Menu menus={menusData} onSelectMenu={handleMenuSelection} />
          </div>
          <div className="h-[1px] w-full bg-[#a1a2a4]"></div>
          <div className="  h-3/5 w-full overflow-scroll pb-[6rem]">
            {selectedMenu ? (
              selectedMenu && (
                <div>
                  <MenuItem
                    menu={selectedMenu}
                    onAddToCart={handleAddToCart}
                    color={selectedMenu.color}
                  />
                </div>
              )
            ) : (
              <div className="flex items-center justify-center text-l  p-5">
                No Menus Selected
              </div>
            )}
          </div>

          <div className="last absolute bottom-0 left-0 right-0 bg-black h-[5rem]">
            <Lastpart />
          </div>
        </div>
      </div>
      <div className="right  w-1/4  h-screen">
        {selectedMenu ? (
          selectedMenu && (
            <CalculateSide
              total={totalPayment}
              items={selectedItems}
              onEditItem={handleEditItem}
              onRemoveItem={handleRemoveItem}
            />
          )
        ) : (
          <div className="flex items-center justify-center text-l  p-5">
            No Menus Selected
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
