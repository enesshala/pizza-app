import React from "react";
import Order from "./order/Order";

const Cart = () => {
  return (
    <div className="w-96 h-100 bg-black p-4">
      <h1 className="text-2xl text-white border-b-2 mb-5">YOUR ORDER</h1>
      <Order title="Margherita" piece="1" price="12" />
      <Order title="The Baconatorizor" piece="1" price="5" />
      <Order title="Buffalo Chicken" piece="1" price="3" />
      <Order title="Veggie Delight" piece="1" price="2" />
      <Order title="Erlira" piece="1" price="100000000000" />
    </div>
  );
};

export default Cart;
