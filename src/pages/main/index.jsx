import React from "react";
import Cart from "./cart/Cart";
import Pizzas from "./cards/Pizzas";

const Index = ({ cart, setCart, addCart, decrementCart }) => {
  return (
    <div className="flex justify-between pt-24">
      <Pizzas addCart={addCart} />
      <Cart
        cart={cart}
        setCart={setCart}
        addCart={addCart}
        decrementCart={decrementCart}
      />
    </div>
  );
};

export default Index;
