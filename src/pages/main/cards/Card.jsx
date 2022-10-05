import React from "react";
import { TbShoppingCartPlus } from "react-icons/tb";

const Card = (props) => {
  return (
    <div className="h-80 w-96">
      <img
        className="rounded-t-xl"
        src="https://assets.website-files.com/602feca01bf76a06da0f87a6/61ae35c1bdcea9a93d596ca0_RanchPotatoSkinRS.jpg"
        alt=""
      />
      <div className="bg-gray-100 rounded-b-xl p-2">
        <h1 className="font-bold text-2xl">{props.title}</h1>
        <p className="text-xl">€ {props.price}</p>
        <button className="text-white flex items-center bg-green-500 px-5 py-2 rounded-full">
          <TbShoppingCartPlus />
          Order
        </button>
      </div>
    </div>
  );
};

export default Card;
