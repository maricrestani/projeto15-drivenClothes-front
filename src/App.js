import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./auth.js";
import Home from "./Home";
import Checkout from "./Checkout";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";
import Coats from "./Coats";
import Pants from "./Pants";
import Shirt from "./Shirt";
import Shoes from "./Shoes";

export default function App() {
  const [user, setUser] = useState();
  const [orderData, setOrderData] = useState();
  const [priceOrder, setPriceOrder] = useState();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthContext.Provider
        value={{
          user,
          setUser,
          orderData,
          setOrderData,
          priceOrder,
          setPriceOrder,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class/shirt" element={<Shirt />} />
          <Route path="/class/pants" element={<Pants />} />
          <Route path="/class/shoes" element={<Shoes />} />
          <Route path="/class/coats" element={<Coats />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}
