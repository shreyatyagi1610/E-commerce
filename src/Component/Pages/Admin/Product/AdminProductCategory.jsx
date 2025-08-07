import React, { useEffect } from 'react'
import Breadcrum from '../../Breadcrum'
import Adminsidebar from '../Adminsidebar'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import 'datatables.net'
import 'datatables.net-dt/css/DataTables.DataTables.min.css'
import { useDispatch, useSelector } from 'react-redux'
import {getProduct,deleteProduct} from "../../../../ActionCreators/ProductCategoryActionCreator"

export default function AdminProductCategory() {
  let ProductCategoryStateData = useSelector(state => state.ProductCategoryStateData)
  let dispatch = useDispatch()

  function deleteRecord(id) {
    dispatch(deleteProduct({ id: id }))
    getAPIData()
  }



function getAPIData() {
  dispatch(getProduct())
  let time = setTimeout(() => {
    $('#DataTable').DataTable()
  }, 500)
  return time
}
useEffect(() => {
  let time = getAPIData()
  return () => clearTimeout(time)
}, [ProductCategoryStateData.length])
return (
  <>
    <Breadcrum title='Admin' />
    <div className="container-fluid my-3">
      <div className='row'>
        <div className='col-md-2 mb-3'>
          <Adminsidebar/>
        </div>
        <div className='col-md-9 mb-3'>
          <h5 className='bg-primary text-light  text-center p-2'>Product<Link to="/Admin/Product/Create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
          <table id='DataTable' className='table table-bordered table-striped table-hover'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>MainCategory</th>
                <th>SubCategory</th>
                <th>Brand</th>
                <th>Color</th>
                <th>Size</th>
                <th>Base Prize</th>
                <th>Discount</th>
                <th>Final Prize</th>
                <th>Stock</th>
                <th>stock Quantity</th>
                 <th>Pic</th>
                <th>Message</th>
                <th>Active</th>
                <th></th>
               
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                ProductCategoryStateData.map(item => {
                  return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.maincategory}</td>
                    <td>{item.subcateory}</td>
                    <td>{item.brand}</td>
                    <td>{item.color}</td>
                    <td>{item.size}</td>
                    <td>&#8377;{item.baseprize}</td>
                    <td>{item.discount}%off</td>
                    <td>&#8377;{item.finalprize}</td>
                    <td>{item.stock}</td>
                    <td>{item.stockquantity}</td>
                    <td></td>
                    
                    <td>
                      <div className='table-product-images'>
                        {
                          item.pic?.map((pic,index)=>{
                            return <Link key={index} to={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${pic}`} target='_blank' rel='noreferrer'>
                        <img src={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${pic}`} height={50} width={80} className='rounded' />
                      </Link>
                          })
                        }
                      </div>
                    </td>
                    <td className={`${item.active ? 'text-success' : 'text-danger'}`}>{item.active ? "yes" : "No"}</td>
                    <td><Link to={`/admin/Product/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
                    <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </>
)

}