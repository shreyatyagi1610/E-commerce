import React from 'react'
import Breadcrum from './Breadcrum'
import Cart from './Cart'

export default function CheckoutPage() {
  return (
    <>
      <Breadcrum title="Checkout :- Place Your Order" />
      <div className="container">
        <Cart title="checkout" />
      </div>
    </>
  )
}
