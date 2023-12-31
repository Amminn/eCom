import React, { useState, createContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";

const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <MyContext.Provider value={{count, setCount, cartProducts, setCartProducts }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Removed value prop */}
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="checkoutPage" element={<CheckoutPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export { App, MyContext };