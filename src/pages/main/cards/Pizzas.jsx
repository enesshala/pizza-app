import React from "react";
import pizzas from "../../../assets/pizzas.json";
import Card from "./Card";

const Pizzas = ({ addCart }) => {
  return (
    <div className="flex flex-wrap justify-evenly gap-6 py-10 px-8 w-full overflow-y-auto">
      {pizzas.map((pizza) => (
        <Card
          name={pizza.name}
          img={pizza.img}
          price={pizza.price}
          key={pizza.name}
          pizza={pizza}
          addCart={addCart}
        />
      ))}
    </div>
  );
};

export default Pizzas;
