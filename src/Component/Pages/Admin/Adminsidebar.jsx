import React from 'react'
import { Link } from 'react-router-dom'

export default function Adminsidebar() {
  return (
    <>
      <div className="list-group">
        <Link to="/Admin" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-home'></i><span className='float-end'>Home</span></Link>
        <Link to="/Admin/MainCategory" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-list'></i><span className='float-end'>MainCategory</span></Link>
        <Link to="/Admin/SubCategory" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-list'></i><span className='float-end'>SubCategory</span></Link>
        <Link to="/Admin/Brand" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-list'></i><span className='float-end'>Brand</span></Link>
        <Link to="/Admin/Product" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-list'></i><span className='float-end'>Product</span></Link>
        <Link to="/Admin/Testimonial" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-star'></i><span className='float-end'>Testimonial</span></Link>
        <Link to="/Admin/Features" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-rocket'></i><span className='float-end'>Features</span></Link>
        <Link to="/Admin/Faq" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-question'></i><span className='float-end'>Faq</span></Link>
        <Link to="/Admin/Newsletter" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-list'></i><span className='float-end'>Newsletter</span></Link>
        <Link to="/Admin/Contact US" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-phone'></i><span className='float-end'>Contact US</span></Link>
        <Link to="/Admin/Checkout" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-shopping-bag'></i><span className='float-end'>Checkout</span></Link>
        <Link to="/Admin/User" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-users'></i><span className='float-end'>User</span></Link>
        <Link to="/Admin/Setting" className="list-group-item list-group-item-action active rounded-0 mb-1" aria-current="true"><i className='fa fa-gear'></i><span className='float-end'>Setting</span></Link>
      </div>
    </>
  )
}
