import React, { useEffect, useState } from 'react'
import Breadcrum from '../../Breadcrum'
import Adminsidebar from '../Adminsidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSetting, createSetting, updateSetting } from "../../../../ActionCreators/SettingCategoryActionCreator"

export default function AdminSettingCategory() {
  let [data, setData] = useState({
    googlemap: "",
    address: "",
    phone: "",
    whatsapp: "",
    email: "",
    siteName: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  })
  let SettingCategoryStateData = useSelector(state => state.SettingCategoryStateData)
  let dispatch = useDispatch()

  function getInputData(e) {
    let { name, value } = e.target
    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })

  }
  function postData(e) {
    e.preventDefault()
    if (SettingCategoryStateData.length)
      dispatch(updateSetting({ ...data, id: SettingCategoryStateData[0].id }))
    else
      dispatch(createSetting({ ...data }))

  }
  useEffect(() => {
    dispatch(getSetting());   // fetch from API on mount
  }, [])

  function getAPIData() {
    dispatch(getSetting())
    if (SettingCategoryStateData.length) {
      setData({
        googlemap: SettingCategoryStateData[0].googlemap ?? "",
        address: SettingCategoryStateData[0].address ?? "",
        phone: SettingCategoryStateData[0].phone ?? "",
        whatsapp: SettingCategoryStateData[0].whatsapp ?? "",
        email: SettingCategoryStateData[0].email ?? "",
        siteName: SettingCategoryStateData[0].siteName ?? "",
        facebook: SettingCategoryStateData[0].facebook ?? "",
        twitter:SettingCategoryStateData[0].twitter ?? "",
        instagram: SettingCategoryStateData[0].instagram ?? "",
        linkedin: SettingCategoryStateData[0].linkedin ?? "",
        youtube: SettingCategoryStateData[0].youtube ?? "",
      })
    }
  }
  useEffect(() => {
    getAPIData()
  }, [SettingCategoryStateData.length])
  return (
    <>
      <Breadcrum title='Admin' />
      <div className="container-fluid my-3">
        <div className='row'>
          <div className='col-md-2 mb-3'>
            <Adminsidebar />
          </div>
          <div className='col-md-9 mb-3'>
            <h5 className='bg-primary text-light  text-center p-2'>Setting<Link to="/Admin/Setting"><i className='fa fa-edit text-light float-end'></i></Link></h5>
            <form onSubmit={postData}>
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label>GoogleMap</label>
                  <input type='url' name='googlemap' value={data.googlemap} onChange={getInputData} className='form-control border-3 border-primary' placeholder='google Map URL' />
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Address</label>
                  <input type='text' name='address' value={data.address} onChange={getInputData} className='form-control border-3 border-primary' placeholder='google Map URL' />
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Phone</label>
                  <input type='text' name='phone' value={data.phone} onChange={getInputData} className='form-control border-3 border-primary' placeholder='google Map URL' />
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Whatsapp</label>
                  <input type='text' name='whatsapp' value={data.whatsapp} onChange={getInputData} className='form-control border-3 border-primary' placeholder='google Map URL' />
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Email Address</label>
                  <input type='text' name='email' value={data.email} onChange={getInputData} className='form-control border-3 border-primary' placeholder='google Map URL' />
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Site Name</label>
                  <input type='text' name='siteName' value={data.siteName} onChange={getInputData} className='form-control border-3 border-primary' placeholder='google Map URL' />
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Facebook URL</label>
                  <input type='text' name='facebook' value={data.facebook} onChange={getInputData} className='form-control border-3 border-primary' placeholder='Facebook URL' />
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Instagram URl</label>
                  <input type='text' name='instagram' value={data.instagram} onChange={getInputData} className='form-control border-3 border-primary' placeholder='Instagram URL' />
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Twitter URl</label>
                  <input type='text' name='twitter' value={data.twitter} onChange={getInputData} className='form-control border-3 border-primary' placeholder='Twitter URL' />
                </div>
                <div className='col-md-6 mb-3'>
                  <label>LinkedIn</label>
                  <input type='text' name='linkedin' value={data.linkedin} onChange={getInputData} className='form-control border-3 border-primary' placeholder='LinkedIN URL' />
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Youtube</label>
                  <input type='text' name='youtube' value={data.youtube} onChange={getInputData} className='form-control border-3 border-primary' placeholder='Youtube URL' />
                </div>
                <div>
                  <button type='submit' className='btn btn-primary w-100'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )

} 