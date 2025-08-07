import React, { useEffect, useState } from 'react'
import Breadcrum from '../../Breadcrum'
import Adminsidebar from '../Adminsidebar'
import { Link, useNavigate } from 'react-router-dom'
import FormValidator from '../../../../Validator/FormValidator'
import { createFeatures, getFeatures } from '../../../../ActionCreators/FeatureCategoryActionCategory'
import { useDispatch, useSelector } from 'react-redux'

export default function AdminFeaturesCreatecategory() {
  let [data, setdata] = useState({
    name: "",
    icon: "",
    description: "",
    active: true
  })
  let [errormessage, seterrormessage] = useState({
    name: "Name field is mandatory",
    icon: "Icon field is mandatory",
    description: "Description is mandatory"
  })
  let [show, setshow] = useState(false)
  let navigation = useNavigate()
  let FeaturesCategoryStateData = useSelector(state => state.FeaturesCategoryStateData)
  let dispatch = useDispatch()

  function getInputData(e) {
    let name = e.target.name
    let value = e.target.value

    seterrormessage((old) => ({
      ...old,
      [name]: FormValidator(e)
    }))

    setdata((old) => ({
      ...old,
      [name]: name === "active" ? (value === "1" ? true : false) : value
    }))
  }

  function postData(e) {
    e.preventDefault()
    let error = Object.values(errormessage).find(item => item !== "")
    if (error) {
      setshow(true)
    } else {
      let item = FeaturesCategoryStateData.find(x => x.name.toLowerCase() === data.name.toLowerCase())
      if (item) {
        seterrormessage((old) => ({
          ...old,
          "name": "Feature with same name already exists"
        }))
        setshow(true)
        return
      }

      dispatch(createFeatures({ ...data }))
      navigation("/admin/Features")
    }
  }

  useEffect(() => {
    dispatch(getFeatures())
  }, [FeaturesCategoryStateData.length])

  return (
    <>
      <Breadcrum title="Admin" />
      <div className="container-fluid my-3">
        <div className='row'>
          <div className='col-md-2 mb-3'>
            <Adminsidebar />
          </div>
          <div className='col-md-9 mb-3'>
            <h5 className='bg-primary text-light text-center p-2'>
              Create Feature <Link to="/Admin/Features"><i className='fa fa-list text-light float-end'></i></Link>
            </h5>
            <form onSubmit={postData}>
              <div className='row'>
                <div className='col-12 mb-3'>
                  <label>Name*</label>
                  <input type='text' name='name' onChange={getInputData} placeholder='Feature Name' className={`form-control border-3 ${show && errormessage.name ? 'border-danger' : 'border-primary'}`} />
                  {show && errormessage.name && <p className='text-danger'>{errormessage.name}</p>}
                </div>
                <div className='col-6 mb-3'>
                  <label>Icon (HTML)*</label>
                  <input type='text' name='icon' onChange={getInputData} className={`form-control border-3 ${show && errormessage.icon ? 'border-danger' : 'border-primary'}`} />
                  {show && errormessage.icon && <p className='text-danger'>{errormessage.icon}</p>}
                </div>
                <div className='col-12 mb-3 testimonial-message'>
                  <label>Description*</label>
                  <textarea name='description' onChange={getInputData} placeholder='Description' rows={5} className={`form-control border-3 ${show && errormessage.description ? 'border-danger' : 'border-primary'}`}></textarea>
                  {show && errormessage.description && <p className='text-danger'>{errormessage.description}</p>}
                </div>
                <div className='col-6 mb-3'>
                  <label>Active*</label>
                  <select name='active' onChange={getInputData} className='form-select border-3 border-primary'>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
                <div className='col-12 mb-3'>
                  <button type='submit' className='btn btn-primary w-100'>Create</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
