import React, { useState } from 'react'
import Breadcrum from './Breadcrum'
import { Link, useNavigate } from 'react-router-dom'
import FormValidator from '../../Validator/FormValidator'

export default function SignUp() {
    let [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
    })

    let [errormessage, setErrormessage] = useState({
        name: "Name field is mandatory",
        username: "Username field is mandatory",
        email: "Email Address field is mandatory",
        phone: "Phone number field is mandatory",
        password: "Password field is mandatory",
        cpassword: "Confirm Password field is mandatory"
    })

    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInputdata(e) {
        let { name, value } = e.target
        setShow(false)

        // Run validation
        setErrormessage((old) => ({
            ...old,
            [name]: FormValidator(e)
        }))

        setData((old) => ({
            ...old,
            [name]: value
        }))
    }

    async function Postdata(e) {
        e.preventDefault()
        let error = Object.values(errormessage).find(x => x !== "")
        if (error) {
            setShow(true)
        } else {
            if (data.password === data.cpassword) {
                let response = await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}user`, {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                })
                response = await response.json()
                let item = response.find(x => x.username === data.username || x.email === data.email)
                if (item) {
                    setShow(true)
                    setErrormessage((old) => ({
                        ...old,
                        username: item.username === data.username ? "Username already taken" : "",
                        email: item.email === data.email ? "Email Address already taken" : "",
                    }))
                } else {
                    let response = await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}user`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({
                            name: data.name,
                            username: data.username,
                            email: data.email,
                            phone: data.phone,
                            password: data.password,
                            role: "Buyer",
                            active: true
                        })
                    })
                    response = await response.json()
                    navigate("/login")
                }
            } else {
                setShow(true)
                setErrormessage((old) => ({
                    ...old,
                    password: "Password and Confirm Password do not match",
                    cpassword: "Password and Confirm Password do not match"
                }))
            }
        }
    }

    return (
        <>
            <Breadcrum title="Create your free account" />
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-8 col-sm-10 col-11 m-auto">
                        <h5 className='bg-primary text-center text-light p-2'>SignUp - Create your account</h5>
                        <form onSubmit={Postdata}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type='text' name='name' onChange={getInputdata} placeholder='Full Name'
                                        className={`form-control border-3 ${show && errormessage.name ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.name && <p className='text-danger'>{errormessage.name}</p>}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input type='number' name='phone' onChange={getInputdata} placeholder='Phone Number'
                                        className={`form-control border-3 ${show && errormessage.phone ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.phone && <p className='text-danger'>{errormessage.phone}</p>}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input type='text' name='username' onChange={getInputdata} placeholder='Username'
                                        className={`form-control border-3 ${show && errormessage.username ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.username && <p className='text-danger'>{errormessage.username}</p>}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input type='email' name='email' onChange={getInputdata} placeholder='Email Address'
                                        className={`form-control border-3 ${show && errormessage.email ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.email && <p className='text-danger'>{errormessage.email}</p>}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input type='password' name='password' onChange={getInputdata} placeholder='Password'
                                        className={`form-control border-3 ${show && errormessage.password ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.password && <p className='text-danger'>{errormessage.password}</p>}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input type='password' name='cpassword' onChange={getInputdata} placeholder='Confirm Password'
                                        className={`form-control border-3 ${show && errormessage.cpassword ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.cpassword && <p className='text-danger'>{errormessage.cpassword}</p>}
                                </div>

                                <div className='mb-3'>
                                    <button type='submit' className="btn btn-primary w-100">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <Link to="/login">Already have an account? Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
