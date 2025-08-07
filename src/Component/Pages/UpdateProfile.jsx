import React, { useEffect, useState } from 'react'
import Breadcrum from './Breadcrum'
import { useNavigate } from 'react-router-dom'
import FormValidator from '../../Validator/FormValidator'

export default function UpdateProfile() {
    let [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        pin: "",
        city: "",
        state: "",
        pic: "",
    })

    let [errormessage, setErrormessage] = useState({
        name: "",
        username: "",
        mail: "",
        phone: "",
        pic: "",
    })

    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInputdata(e) {
      let name=e.target.name
      let value=e.target.files?"product/"+e.target.file[0].name:e.target.value
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
                let item = response.find(x => x.id !== data.id && x.username === data.username || x.email === data.email)
                if (item) {
                    setShow(true)
                    setErrormessage((old) => ({
                        ...old,
                        username: item.username === data.username ? "Username already taken" : "",
                        email: item.email === data.email ? "Email Address already taken" : "",
                    }))
                } else {
                    let response = await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}user/${data.id}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({...data})
                    })
                    response = await response.json()
                    if(data.role==="buyer")
                        navigate("/profile")
                    else
                    navigate("/admin")
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
    useEffect(() => {
        (async () => {
            let response = await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}user/${localStorage.getItem("userid")}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
            })
            response = await response.json()
            setData({ ...data,...response })
        })()
    },[])

    return (
        <>
            <Breadcrum title="Update ypur profile" />
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-8 col-sm-10 col-11 m-auto">
                        <h5 className='bg-primary text-center text-light p-2'>Update ypur profile</h5>
                        <form onSubmit={Postdata}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type='text' name='name' value={data.name} onChange={getInputdata} placeholder='Full Name'
                                        className={`form-control border-3 ${show && errormessage.name ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.name && <p className='text-danger'>{errormessage.name}</p>}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input type='number' name='phone' value={data.phone} onChange={getInputdata} placeholder='Phone Number'
                                        className={`form-control border-3 ${show && errormessage.phone ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.phone && <p className='text-danger'>{errormessage.phone}</p>}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input type='text' name='username' value={data.username} onChange={getInputdata} placeholder='Username'
                                        className={`form-control border-3 ${show && errormessage.username ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.username && <p className='text-danger'>{errormessage.username}</p>}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input type='email' name='email' value={data.email} onChange={getInputdata} placeholder='Email Address'
                                        className={`form-control border-3 ${show && errormessage.email ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.email && <p className='text-danger'>{errormessage.email}</p>}
                                </div>

                                <div className="mb-3">
                                    <textarea name='address' value={data.address} onChange={getInputdata} placeholder='Your Address' className='form-control border-3 border-primary'></textarea>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type='text' name='city' value={data.city} onChange={getInputdata} placeholder='Your city' className='form-control border-3 border-primary' />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type='text' name='pin' value={data.pin} onChange={getInputdata} placeholder='Pin Code' className='form-control border-3 border-primary' />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type='file' name='pic' value={data.pic} onChange={getInputdata} className='form-control border-3 border-primary' />
                                </div>
                                <div className='mb-3'>
                                    <button type='submit' className="btn btn-primary w-100">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
