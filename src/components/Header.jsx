import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart/index.jsx";
// import MyContext from "../App.jsx";
// import Cart from "./Cart/index.jsx";
// import { MyContext } from "../App";

export default function Header() {
  // const { count } = useContext(MyContext);

  return (
    <header className="header">
      <div className="container">
        <Link className="logo" to="/">eCom</Link>
        <nav>
          <Link to="/contact">Contact Us</Link>
          <Cart />
          {/* <h2>Cart: {count}</h2> */}
        </nav>
      </div>
    </header>
  );
}