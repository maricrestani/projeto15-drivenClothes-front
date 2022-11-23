import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./auth";
import Home from "./Home";
import Cart from "./Cart";
import Checkout from "./Checkout";
import SignIn from "./Signin";
import SignUp from "./SignUp";
import { useState } from "react";



export default function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />

        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}