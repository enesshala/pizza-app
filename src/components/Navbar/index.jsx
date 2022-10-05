import React from "react";
import { Link } from "react-router-dom";
import { FaPizzaSlice, FaTruckMoving } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const index = () => {
  return (
    <div className="w-full h-24 bg-gradient-to-b from-red-800 to-red-600 flex items-center">
      <h1 className="text-4xl text-yellow-400 px-20 text-center leading-7">
        PIZZA <br /> <span className="text-lg border-t-2">APP LOGO</span>
      </h1>
      <Link to="/" className="text-white text-center mr-10">
        <FaPizzaSlice className="text-4xl mx-auto" />
        <p className="text-2xl text-center">GET PIZZA</p>
      </Link>
      <Link to="/my-orders" className="text-white text-center">
        <FaTruckMoving className="text-4xl mx-auto" />
        <p className="text-2xl text-center">MY ORDERS</p>
      </Link>
      <Link
        to="/sign-in"
        className="text-white flex items-center border-2 px-5 py-1 rounded-full text-center ml-auto mr-5"
      >
        <AiOutlineUser className="text-4xl mx-auto" />
        Sign In
      </Link>
    </div>
  );
};

export default index;
