"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import TotalPayment from "./TotalPayment";
import PaymentDetails from "./PaymentDetails";
function CalculateSide({ total, items, onEditItem, onRemoveItem }) {
  return (
    <div className="w-full h-screen relative p-[10px]">
      <div className="flex justify-between items-center pb-[10px]">
        <div className="py-[10px] pb-[20px]">
          <div className="font-semibold">Table 5</div>
          <div className="text-xs text-[#a1a2a4]">Leslie k.</div>
        </div>
        <div className="rounded-full border-[1px] p-[10px] border-[#a1a2a4]">
          <FontAwesomeIcon className="text-[#ffffff] h-[15px]" icon={faPen} />
        </div>
      </div>

      <PaymentDetails
        items={items}
        onEditItem={onEditItem}
        onRemoveItem={onRemoveItem}
      />
      <TotalPayment total={total} />
    </div>
  );
}

export default CalculateSide;
