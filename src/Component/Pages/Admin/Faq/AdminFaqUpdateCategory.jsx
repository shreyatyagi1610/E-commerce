
import React, { use, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
// import { Navigation } from 'swiper/modules'
import { getFaq,updateFaq } from '../../../../ActionCreators/FaqCreatorActionCategory.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrum from '../../Breadcrum.jsx'
import Adminsidebar from '../Adminsidebar.jsx'
import FormValidator from '../../../../Validator/FormValidator.jsx'


export default function AdminFaqUpdateCategory() {
    let { id } = useParams()
    let [data, setdata] = useState({
        question: "",
        answer: "",
        active: true,
    })
    let [errormessage, seterrormessage] = useState({
        question: "",
        answer: "",
        Description: ""
    })
    let [show, setshow] = useState(false)
    let navigate = useNavigate()
    let FaqCategoryStateData = useSelector(state => state.FaqCategoryStateData)
    let dispatch = useDispatch()

    function getInputData(e) {
        let name = e.target.name
        // let value = name === "pic" ? "maincategory/" + e.target.files[0].name : e.target.value
        let value = e.target.value

        seterrormessage((old) => {
            return {
                ...old,
                [name]: FormValidator(e)
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
            let item = FaqCategoryStateData.find(x => String(x.id) !== String(id) && x.answer.toLowerCase() === data.answer.toLowerCase())
            if (item) {
                seterrormessage((old) => {
                    return {
                        ...old,
                        "question": "Faq With Same Same Is Already Exists"
                    }
                })
                setshow(true)
                return
            }
            dispatch(updateFaq({ ...data }))
            // let formData=new FormData()
            // formData.append("name",data.name)
            // formData.append("id",data.id)
            // formData.append("pic",data.pic)
            // formData.append("active",data.active)
            // dispatch(createFaq(formData))

            navigate("/Admin/Faq")
        }
    }

    useEffect(() => {
        (() => {
            dispatch(getFaq())
            if (FaqCategoryStateData.length) {
                let item = FaqCategoryStateData.find(x => x.id === id)
                if (item)
                    setdata({ ...item })
                else
                    navigate("/admin/Faq")

            }

        })()
    }, [FaqCategoryStateData.length])
    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className='row'>
                    <div className='col-md-2 mb-3'>
                        <Adminsidebar />
                    </div>
                    <div className='col-md-9 mb-3'>
                        <h5 className='bg-primary text-light text-center p-2'>Update Faq <Link to="/Admin/Faq"><i className='fa fa-list text-light float-end'></i></Link></h5>
                        <form onSubmit={postData}>

                            <div className='row'>
                                <div className='col-12 mb-3'>
                                    <label>Question</label>
                                    <input type='text' name='question' value={data.question} onChange={getInputData} placeholder='Question' className={`form-control border-3 ${show && errormessage.question ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.question && <p className='text-danger'>{errormessage.question}</p>}
                                </div>
                                <div className='col-12 mb-3 testimonial-message'>
                                    <label>Answer</label>
                                    <textarea name='answer'  value={data.answer} onChange={getInputData} placeholder='answer' rows={5} className={`form-control border-3 ${show && errormessage.answer ? 'border-danger' : 'border-primary'}`}></textarea>
                                    {show && errormessage.answer && <p className='text-danger'>{errormessage.answer}</p>}
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