import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, SignIn, MyOrders } from "./pages";
import Navbar from "./components/Navbar";
import ScrollToTop from "./pages/ScrollToTop";

const App = () => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((product) => item.name === product.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...item,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const decrementCart = (item) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((product) => item.name === product.name);
    if (itemInCart) {
      itemInCart.quantity--;
      if (itemInCart.quantity <= 0) {
        setCart(newCart.filter((item) => item !== itemInCart));
      }
    }
    setCart(newCart);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  cart={cart}
                  setCart={setCart}
                  addCart={addCart}
                  decrementCart={decrementCart}
                />
              }
              exact
            />
            <Route path="/sign-in" element={<SignIn />} exact />
            <Route
              path="/my-orders"
              element={
                <MyOrders
                  cart={cart}
                  setCart={setCart}
                  addCart={addCart}
                  decrementCart={decrementCart}
                />
              }
              exact
            />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
