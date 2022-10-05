import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, SignIn, MyOrders } from "./pages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/sign-in" element={<SignIn />} exact />
          <Route path="/my-orders" element={<MyOrders />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
