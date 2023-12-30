import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MyContext } from "../../App";
import "./cart.css";

function Cart() {
  const { count } = useContext(MyContext);

  return (
    <div className="cart"
    // onClick={() => setCount((prevCount) => prevCount + 1)}
    >
      <span className="counter">{count}</span>
      <FaCartShopping size={20} color="black" />
    </div>
 );
}

export default Cart;