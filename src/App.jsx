import React, { useState, createContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MyContext = createContext();

function App() {
  const [count, setCount] = useState(1);

  return (
    <MyContext.Provider value={{count, setCount }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Removed value prop */}
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export { App, MyContext };