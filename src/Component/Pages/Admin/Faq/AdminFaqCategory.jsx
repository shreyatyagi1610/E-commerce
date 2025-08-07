import React, { useEffect } from 'react'
import Breadcrum from '../../Breadcrum'
import Adminsidebar from '../Adminsidebar'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import 'datatables.net'
import 'datatables.net-dt/css/DataTables.DataTables.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { getFaq, deleteFaq } from "../../../../ActionCreators/FaqCreatorActionCategory"

export default function AdminFaqCategory() {
  const dispatch = useDispatch()
  const FaqCategoryStateData = useSelector(state => state.FaqCategoryStateData)

  // Delete and then re-fetch
  const deleteRecord = async (id) => {
    await dispatch(deleteFaq({ id }))
    dispatch(getFaq())
  }

  useEffect(() => {
    dispatch(getFaq())
  }, [dispatch])

  useEffect(() => {
    const table = $('#DataTable').DataTable()
    return () => table.destroy()
  }, [FaqCategoryStateData])

  return (
    <>
      <Breadcrum title='Admin' />
      <div className="container-fluid my-3">
        <div className='row'>
          <div className='col-md-2 mb-3'>
            <Adminsidebar />
          </div>
          <div className='col-md-9 mb-3'>
            <h5 className='bg-primary text-light text-center p-2'>
              FAQ
              <Link to="/Admin/Faq/Create"><i className='fa fa-plus text-light float-end'></i></Link>
            </h5>
            <table id='DataTable' className='table table-bordered table-striped table-hover'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Active</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  FaqCategoryStateData.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.question}</td>
                      <td>{item.answer}</td>
                      <td className={item.active ? 'text-success' : 'text-danger'}>
                        {item.active ? "Yes" : "No"}
                      </td>
                      <td>
                        <Link to={`/admin/Faq/update/${item.id}`} className='btn btn-primary'>
                          <i className='fa fa-edit'></i>
                        </Link>
                      </td>
                      <td>
                        <button className='btn btn-danger' onClick={() => deleteRecord(item.id)}>
                          <i className='fa fa-trash'></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
