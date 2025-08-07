import React from 'react'
import Breadcrum from '../Breadcrum'
import Adminsidebar from './Adminsidebar'
import Profile from '../../Profile'

export default function AdminHomepage() {
  return (
    <>
      <Breadcrum title="Admin"/>
    <div className="container-fluid my-3">
    <div className='row'>
      <div className='col-md-2 mb-3'>
        <Adminsidebar/>
      </div>
      <div className='col-md-9 mb-3'>
        <Profile title='Admin'/>
      </div>
    </div>

    </div>
    </>
  )
}
