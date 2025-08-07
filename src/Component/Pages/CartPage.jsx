import React from 'react'
import Breadcrum from './Breadcrum'
import Cart from "./Cart"

export default function CartPage() {
  return (
    <>
    <Breadcrum title='cart'/>
    <div className="container-fluid">
    <Cart title="cart"/>
    </div>
    </>
  )
}
