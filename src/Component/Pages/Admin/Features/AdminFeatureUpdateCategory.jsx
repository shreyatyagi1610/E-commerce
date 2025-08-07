import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getFeatures, updateFeatures } from '../../../../ActionCreators/FeatureCategoryActionCategory.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrum from '../../Breadcrum.jsx'
import Adminsidebar from '../Adminsidebar.jsx'
import FormValidator from '../../../../Validator/FormValidator.jsx'

export default function AdminFeaturesUpdateCategory() {
    let { id } = useParams()
    let [data, setdata] = useState({
        name: "",
        icon: "",
        description: "",
        active: true,
    })
    let [errormessage, seterrormessage] = useState({
        name: "",
        icon: "",
        description: ""
    })
    let [show, setshow] = useState(false)
    let navigate = useNavigate()
    let FeaturesCategoryStateData = useSelector(state => state.FeaturesCategoryStateData)
    let dispatch = useDispatch()

    function getInputData(e) {
        const { name, type, value, files } = e.target
        let newValue = value

        if (type === "file") {
            if (files && files.length > 0) {
                newValue = "features/" + files[0].name // you can change the path
            } else {
                newValue = ""
            }
        } else if (name === "active") {
            newValue = value === "1"
        }

        seterrormessage((old) => ({
            ...old,
            [name]: FormValidator(e)
        }))

        setdata((old) => ({
            ...old,
            [name]: newValue
        }))
    }

    function postData(e) {
        e.preventDefault()
        let error = Object.values(errormessage).find(item => item !== "")
        if (error) {
            setshow(true)
        } else {
            let item = FeaturesCategoryStateData.find(x => String(x.id) !== String(id) && x.name.toLowerCase() === data.name.toLowerCase())
            if (item) {
                seterrormessage((old) => ({
                    ...old,
                    "name": "Features With Same Name Already Exists"
                }))
                setshow(true)
                return
            }
            dispatch(updateFeatures({ ...data }))
            navigate("/Admin/Features")
        }
    }

    useEffect(() => {
        dispatch(getFeatures())
    }, [dispatch])

    useEffect(() => {
        if (FeaturesCategoryStateData.length) {
            let item = FeaturesCategoryStateData.find(x => String(x.id) === String(id))
            if (item) {
                setdata({ ...item })
            } else {
                navigate("/admin/Features")
            }
        }
    }, [FeaturesCategoryStateData, id, navigate])

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
                            Update Features
                            <Link to="/Admin/Features">
                                <i className='fa fa-list text-light float-end'></i>
                            </Link>
                        </h5>
                        <form onSubmit={postData}>
                            <div className='row'>
                                <div className='col-12 mb-3'>
                                    <label>Name*</label>
                                    <input
                                        type='text'
                                        name='name'
                                        value={data.name}
                                        onChange={getInputData}
                                        placeholder='Features Name'
                                        className={`form-control border-3 ${show && errormessage.name ? 'border-danger' : 'border-primary'}`}
                                    />
                                    {show && errormessage.name && <p className='text-danger text-capitalize'>{errormessage.name}</p>}
                                </div>
                                <div className='col-6 mb-3'>
                                    <label>Icon*</label>
                                    <input
                                        type='file'
                                        name='icon'
                                        onChange={getInputData}
                                        className={`form-control border-3 ${show && errormessage.icon ? 'border-danger' : 'border-primary'}`}
                                    />
                                    {show && errormessage.icon && <p className='text-danger text-capitalize'>{errormessage.icon}</p>}
                                </div>
                                <div className='col-12 mb-3 testimonial-message'>
                                    <label>Description*</label>
                                    <textarea
                                        name='description'
                                        value={data.description}
                                        onChange={getInputData}
                                        placeholder='Message'
                                        rows={3}
                                        className={`form-control border-3 ${show && errormessage.description ? 'border-danger' : 'border-primary'}`}
                                    ></textarea>
                                    {show && errormessage.description && <p className='text-danger text-capitalize'>{errormessage.description}</p>}
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
