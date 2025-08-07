import React, { useEffect } from 'react'
import Breadcrum from '../../Breadcrum'
import Adminsidebar from '../Adminsidebar'
import { Link } from 'react-router-dom'
import $, { data } from 'jquery'
import 'datatables.net'
import 'datatables.net-dt/css/DataTables.DataTables.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMaincategory, deleteMaincategory } from "../../../../ActionCreators/MainCategoryActionCreator"

export default function AdminMainCategorypage() {
  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  let dispatch = useDispatch()

  function deleteRecord(id) {
    dispatch(deleteMaincategory({ id: id }))
    getAPIData()
  }



function getAPIData() {
  dispatch(getMaincategory())
  let time = setTimeout(() => {
    $('#DataTable').DataTable()
  }, 500)
  return time
}
useEffect(() => {
  let time = getAPIData()
  return () => clearTimeout(time)
}, [MaincategoryStateData.length])
return (
  <>
    <Breadcrum title='Admin' />
    <div className="container-fluid my-3">
      <div className='row'>
        <div className='col-md-2 mb-3'>
          <Adminsidebar />
        </div>
        <div className='col-md-9 mb-3'>
          <h5 className='bg-primary text-light  text-center p-2'>MainCategory<Link to="/Admin/MainCategory/Create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
          <table id='DataTable' className='table table-bordered table-striped table-hover'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Pic</th>
                <th>Active</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                MaincategoryStateData.map(item => {
                  return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <Link to={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${item.pic}`} target='_blank' rel='noreferrer'>
                        <img src={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${item.pic}`} height={80} width={100} className='rounded' />
                      </Link>
                    </td>
                    <td className={`${item.active ? 'text-success' : 'text-danger'}`}>{item.active ? "yes" : "No"}</td>
                    <td><Link to={`/admin/Maincategory/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
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