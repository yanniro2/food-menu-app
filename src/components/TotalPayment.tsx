// components/TotalPayment.js
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faCreditCard,
  faBarcode,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const TotalPayment = ({ total }) => {
  return (
    <div
      // className="w-full grid flex-col content-between h-[30%] bg-[#2d2d2d] p-[10px] rounded text-xs mt-6 absolute bottom-0 right-0 z-40"
      className="absolute left-0 right-0 p-[10px] bottom-0 h-[40%]  w-full z-[100] bg-[#121315]"
    >
      <div className="grid gap-[10px]">
        <div className="flex justify-between">
          <div className="">Subtotal</div>
          <div className="">£{total?.toFixed(2)}</div>
        </div>
        <div className="flex justify-between">
          <div className="">Tax</div>
          <div className="">
            £{total ? ((total * 10) / 100).toFixed(2) : "0"}
          </div>
        </div>
        <div className="h-[1px] bg-white w-full" />
        <div className="flex justify-between text-lg">
          <div className="">Total</div>
          <div className="">
            £{total ? (total + (total * 10) / 100).toFixed(2) : "0"}
          </div>
        </div>
      </div>

      <div>
        <div className="text-[#a1a2a4] text-xs">Payment Method</div>
        <div className="grid grid-cols-3 gap-[10px] pt-[10px]">
          <div
            tabIndex={1}
            className="transition-all group duration-500 border-[1px] flex justify-center items-center p-[10px] h-[60px] border-white rounded focus:bg-[#fff]"
          >
            <FontAwesomeIcon
              className="group-focus:text-black text-[#ffffff] h-[25px]"
              icon={faSackDollar}
            />
          </div>
          <div
            tabIndex={1}
            className="transition-all group duration-500 border-[1px] flex justify-center items-center p-[10px] border-white focus:bg-[#fff] rounded"
          >
            <FontAwesomeIcon
              className="text-[#ffffff] group-focus:text-black h-[25px]"
              icon={faCreditCard}
            />
          </div>
          <div
            tabIndex={1}
            className="transition-all group duration-500 border-[1px] flex justify-center items-center p-[10px] border-white focus:bg-[#fff] rounded"
          >
            <FontAwesomeIcon
              className="text-[#ffffff] group-focus:text-black h-[25px]"
              icon={faBarcode}
            />
          </div>
        </div>
        <button className="btn">Place Order</button>
      </div>
    </div>
  );
};

export default TotalPayment;
