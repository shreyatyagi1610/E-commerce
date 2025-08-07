import React, { use, useEffect, useState } from 'react'
import Breadcrum from '../../Breadcrum'
import Adminsidebar from '../Adminsidebar'
import { Link, useNavigate } from 'react-router-dom'
import FormValidator from '../../../../Validator/FormValidator'
import ImageValidator from '../../../../Validator/ImageValidator'
import { Navigation } from 'swiper/modules'
import { createTestimonial,getTestimonial } from '../../../../ActionCreators/TestimonialCategoryActionCreator'
import { useDispatch, useSelector } from 'react-redux'

export default function AdminCreatecategorypage() {
  let [data, setdata] = useState({
    name: "",
    pic: "",
    message:"",
    active: true,
  })
  let [errormessage, seterrormessage] = useState({
    name: "Name field is mandatory",
    pic: "Pic field is mandatory",
    message: "message is mandatory"
  })
  let [show, setshow] = useState(false)
  let navigation=useNavigate()
  let TestimonialCategoryStateData=useSelector(state=>state.TestimonialCategoryStateData)
  let dispatch=useDispatch()
  function getInputData(e) {
    let name = e.target.name
    // let value = name === "pic" ? "maincategory/" + e.target.files[0].name : e.target.value
    let value = e.target.value

    seterrormessage((old) => {
      return {
        ...old,
        [name]: name === "pic" ? ImageValidator(e) : FormValidator(e)
      }
    })

    setdata((old) => {
      return {
        ...old,
        [name]: name === "active" ? (value === "1" ? true : false) : value
      }
    })

  }
  function postData(e) {
    e.preventDefault()
    let error = Object.values(errormessage).find(item => item !== "")
    if (error) {
      setshow(true)
    }
    else {
      let item=TestimonialCategoryStateData.find(x=>x.name.toLowerCase()===data.name.toLowerCase())
      if(item){
        seterrormessage((old)=>{
          return{
          ...old,
          "name":"Testimonial With Same Same Is Already Exists"
          }
        })
        setshow(true)
        return
      }
    dispatch(createTestimonial({...data}))
    // let formData=new FormData()
    // formData.append("name",data.name)
    // formData.append("pic",data.pic)
    // formData.append("message",data.message)
    // formData.append("active",data.active)
    // dispatch(createTestimonial(formData))

      navigation("/admin/Testimonial")
    }
  }

     
    useEffect(()=>{
      (()=>{
        dispatch(getTestimonial())
    })()
  },[TestimonialCategoryStateData.length])
  return (
    <>
      <Breadcrum title="Admin" />
      <div className="container-fluid my-3">
        <div className='row'>
          <div className='col-md-2 mb-3'>
            <Adminsidebar />
          </div>
          <div className='col-md-9 mb-3'>
            <h5 className='bg-primary text-light text-center p-2'>Create MainCategory <Link to="/Admin/Testimonial"><i className='fa fa-list text-light float-end'></i></Link></h5>
            <form onSubmit={postData}>

              <div className='row'>
                <div className='col-12 mb-3'>
                  <label>Name*</label>
                  <input type='text' name='name' onChange={getInputData} placeholder='Full Name' className={`form-control border-3 ${show && errormessage.name ? 'border-danger' : 'border-primary'}`} />
                  {show && errormessage.name ? <p className='text-danger text-capitalize'>{errormessage.name}</p> : null}
                </div>
                <div className='col-6 mb-3'>
                  <label>Pic*</label>
                  <input type='file' name='pic' onChange={getInputData} className={`form-control border-3 ${show && errormessage.pic ? 'border-danger' : 'border-primary'}`} />
                  {show && errormessage.pic ? <p className='text-danger text-capitalize'>{errormessage.pic}</p> : null}
                </div>
                <div className='col-12 mb-3'>
                  <label>Message*</label>
                  <textarea name='message' onChange={getInputData} placeholder='Message' rows={5} className={`form-control border-3 ${show && errormessage.message ? 'border-danger' : 'border-primary'}`}></textarea>
                  {show && errormessage.message ? <p className='text-danger text-capitalize'>{errormessage.message}</p>:null}
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
