import React, { useContext } from 'react';
import { MyContext } from '../App';

function CheckoutPage() {
  const { cartProducts } = useContext(MyContext);

  return (
    <div>
      {cartProducts.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <div>
          {cartProducts.map((product) => (
            <div key={product.id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;