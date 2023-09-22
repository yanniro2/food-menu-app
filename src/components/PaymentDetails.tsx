import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface PaymentDetailsProps {
  items: {
    id: number;
    title: string;
    price: number;
  }[];
  onEditItem: (item: { id: number; title: string; price: number }) => void;
  onRemoveItem: (item: { id: number; title: string; price: number }) => void;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  items,
  onEditItem,
  onRemoveItem,
}) => {
  return (
    <div className="w-full rounded h-[60%] overflow-y-scroll pb-[5rem]">
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <div
            key={item.id}
            className="flex rounded relative bg-[#3d3d3d] my-1 h-[3rem]">
            <div
              onClick={() => onRemoveItem(item)}
              className="flex w-0 grow h-full items-center justify-center">
              <FontAwesomeIcon
                icon={faTrash}
                className="shrink w-full"
                size="lg"
                color="#cd232b"
              />
            </div>
            <div
              tabIndex={1}
              className="transition-all overflow-hidden duration-500 delay-200 bg-[#2d2d2d] py-[20px] px-3 w-full rounded flex justify-between justify-self-end items-center focus:w-[80%]">
              <div className="flex items-center">
                <div className="bg-white text-black h-[15px] w-[15px] rounded-full text-xs flex justify-center items-center mr-[10px]">
                  {index + 1}
                </div>
                <div className="text-xs">{item.title}</div>
              </div>
              <div>£ {item.price}</div>
            </div>
          </div>
        ))
      ) : (
        <div>No Items selected</div>
      )}
    </div>
  );
};

export default PaymentDetails;
