import React from 'react'
import Breadcrum from './Breadcrum'
import { Link } from 'react-router-dom'

export default function ConfirmationPage() {
  return (
    <>
    <Breadcrum title="YOur order is Placed"/>
    <div className="container-fluid my-3">
         <div className="text-center my-2">
              <h3>Thank You</h3>
              <h3>Your order has been placed</h3>
              <h3>Now you can track your order in profile page</h3>
              <div className="btn-group">
                <Link to="/profile" className='btn btn-primary'>Profile</Link>
                <Link to="/shop" className='btn btn-success'>Shop More</Link>
              </div>
            </div>
    </div>
    </>
  )
}
