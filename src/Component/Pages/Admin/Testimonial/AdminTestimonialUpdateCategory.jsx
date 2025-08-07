
import React, { use, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
// import { Navigation } from 'swiper/modules'
import { getTestimonial,updateTestimonial } from '../../../../ActionCreators/TestimonialCategoryActionCreator.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrum from '../../Breadcrum.jsx'
import Adminsidebar from '../Adminsidebar.jsx'
import ImageValidator from '../../../../Validator/ImageValidator.jsx'
import FormValidator from '../../../../Validator/FormValidator.jsx'

export default function AdminUpdateTestimonialpage() {
    let {id}=useParams()
    let [data, setdata] = useState({
        name: "",
        pic: "",
        active: true,
    })
    let [errormessage, seterrormessage] = useState({
        name: "",
        pic: ""
    })
    let [show, setshow] = useState(false)
    let navigate = useNavigate()
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
            let item = TestimonialCategoryStateData.find(x => String(x.id) !== String(id) && x.name.toLowerCase() === data.name.toLowerCase())
            if (item) {
                seterrormessage((old) => {
                    return {
                        ...old,
                        "name": "Testimonial With Same Same Is Already Exists"
                    }
                })
                setshow(true)
                return
            }
           dispatch(updateTestimonial({...data}))
            // let formData=new FormData()
    // formData.append("name",data.name)
    // formData.append("id",data.id)
    // formData.append("pic",data.pic)
    // formData.append("active",data.active)
    // dispatch(createTestimonial(formData))

            navigate("/Admin/Testimonial")
        }
    }

    useEffect(() => {
        ( () => {
           dispatch(getTestimonial())
            if (TestimonialCategoryStateData.length) {
                let item = TestimonialCategoryStateData.find(x => x.id === id)
                if (item)
                    setdata({ ...item })
                else
                    navigate("/admin/Testimonial")

            }

        })()
    }, [TestimonialCategoryStateData.length])
    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className='row'>
                    <div className='col-md-2 mb-3'>
                        <Adminsidebar />
                    </div>
                    <div className='col-md-9 mb-3'>
                        <h5 className='bg-primary text-light text-center p-2'>Update Testimonial <Link to="/Admin/Testimonial"><i className='fa fa-list text-light float-end'></i></Link></h5>
                        <form onSubmit={postData}>

                            <div className='row'>
                                <div className='col-12 mb-3'>
                                    <label>Name*</label>
                                    <input type='text' name='name' value={data.name} onChange={getInputData} placeholder='Testimonial Name' className={`form-control border-3 ${show && errormessage.name ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.name ? <p className='text-danger text-capitalize'>{errormessage.name}</p> : null}
                                </div>
                                <div className='col-6 mb-3'>
                                    <label>Pic</label>
                                    <input type='file' name='pic' onChange={getInputData} className={`form-control border-3 ${show && errormessage.pic ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.pic ? <p className='text-danger text-capitalize'>{errormessage.pic}</p> : null}
                                </div>
                                <div className='col-6 mb-3'>
                                    <label>Active*</label>
                                    <select name='active' value={data.active ? "1" : "0"} onChange={getInputData} className='form-select border-3 border-primary'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                                <div className='col-12 mb-3'>
                                    <button type='submit' className='btn btn-primary w-100'>Update</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}