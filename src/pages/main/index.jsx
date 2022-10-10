import React from "react";
import Card from "./cards/Card";
import Cart from "./cart/Cart";

const index = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-wrap justify-evenly gap-6 p-5 w-full">
        <Card title="Margherita" price="12" />
        <Card title="The Baconatorizor" price="5" />
        <Card title="Buffalo Chicken" price="3" />
        <Card title="Veggie Delight" price="2" />
        <Card title="Margherita" price="5" />
        <Card title="Margherita" price="5" />
        <Card title="Margherita" price="5" />
        <Card title="Margherita" price="5" />
        <Card title="Margherita" price="5" />
      </div>
      <Cart />
    </div>
  );
};

export default index;
