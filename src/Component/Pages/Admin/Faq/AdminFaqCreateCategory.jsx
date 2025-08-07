import React, { useEffect, useState } from 'react'
import Breadcrum from '../../Breadcrum'
import Adminsidebar from '../Adminsidebar'
import { Link, useNavigate } from 'react-router-dom'
import FormValidator from '../../../../Validator/FormValidator'
import { createFaq, getFaq } from '../../../../ActionCreators/FaqCreatorActionCategory'
import { useDispatch, useSelector } from 'react-redux'

export default function AdminFaqCreatecategory() {
  const [data, setdata] = useState({
    question: "",
    answer: "",
    active: true
  })

  const [errormessage, seterrormessage] = useState({
    question: "Name field is mandatory",
    answer: "Icon field is mandatory",
  })

  const [show, setshow] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const FaqCategoryStateData = useSelector(state => state.FaqCategoryStateData)

  function getInputData(e) {
    const { name, value } = e.target

    seterrormessage(prev => ({
      ...prev,
      [name]: FormValidator(e)
    }))

    setdata(prev => ({
      ...prev,
      [name]: name === "active" ? value === "1" : value
    }))
  }

  function postData(e) {
    e.preventDefault()
    const error = Object.values(errormessage).find(item => item !== "")
    if (error) {
      setshow(true)
    } else {
      const exists = FaqCategoryStateData.find(x => x.question.toLowerCase() === data.question.toLowerCase())
      if (exists) {
        seterrormessage(prev => ({
          ...prev,
          question: "FAQ with same question already exists"
        }))
        setshow(true)
        return
      }

      dispatch(createFaq({ ...data }))
      navigate("/admin/Faq")
    }
  }

  useEffect(() => {
    dispatch(getFaq())
  }, [dispatch]) // ✅ corrected dependency

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
              Create FAQ <Link to="/Admin/Faq"><i className='fa fa-list text-light float-end'></i></Link>
            </h5>
            <form onSubmit={postData}>
              <div className='row'>
                <div className='col-12 mb-3'>
                  <label>Question</label>
                  <input
                    type='text'
                    name='question'
                    value={data.question}
                    onChange={getInputData}
                    placeholder='Question'
                    className={`form-control border-3 ${show && errormessage.question ? 'border-danger' : 'border-primary'}`}
                  />
                  {show && errormessage.question && <p className='text-danger'>{errormessage.question}</p>}
                </div>

                <div className='col-12 mb-3'>
                  <label>Answer</label>
                  <textarea
                    name='answer'
                    value={data.answer}
                    onChange={getInputData}
                    placeholder='Answer'
                    rows={5}
                    className={`form-control border-3 ${show && errormessage.answer ? 'border-danger' : 'border-primary'}`}
                  ></textarea>
                  {show && errormessage.answer && <p className='text-danger'>{errormessage.answer}</p>}
                </div>

                <div className='col-6 mb-3'>
                  <label>Active*</label>
                  <select
                    name='active'
                    value={data.active ? "1" : "0"}
                    onChange={getInputData}
                    className='form-select border-3 border-primary'
                  >
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
