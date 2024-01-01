import React from 'react'
import { Link } from 'react-router-dom'

function CheckoutSuccessPage() {
  return (
    <div className="container">
      <div className="checkout-success-page">
        <h1 className="checkout-success-page__title">
          aye, top of the <br />
          morning to you laddie
        </h1>
        <Link className="checkout-success-page__link" to="/">Go back Home</Link>
      </div>
    </div>

  )
}

export default CheckoutSuccessPage