import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Order = (props) => {
  return (
    <div className="text-white bg-slate-800 p-3 rounded-lg flex justify-between mb-3">
      <div>
        <h1 className="font-bold text-xl">{props.title}</h1>
        <h2 className="font-semibold">
          € <span>{props.price}</span>
        </h2>
      </div>
      <button className="p-3 text-red-500">
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Order;
