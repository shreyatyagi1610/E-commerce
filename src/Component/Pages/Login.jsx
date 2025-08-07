import React, { useState } from 'react'
import Breadcrum from './Breadcrum'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    let [data, setData] = useState({
        username: "",
        password: "",
    })

    let [errormessage, setErrormessage] = useState("")
    let navigate = useNavigate()

    function getInputdata(e) {
        let { name, value } = e.target
        setErrormessage("")  // clear old error
        setData((old) => ({
            ...old,
            [name]: value
        }))
    }

    async function Postdata(e) {
        e.preventDefault()

        // basic field validation
        if (!data.username || !data.password) {
            setErrormessage("Username and password are required")
            return
        }

        try {
            let response = await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}user`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })

            let users = await response.json()
            let user = users.find(x =>
                (x.username === data.username || x.email === data.username) &&
                x.password === data.password
            )

            if (user && user.active === false) {
                setErrormessage("Your account has been blocked. Please contact support.")
            } else if (user) {
                localStorage.setItem("login", true)
                localStorage.setItem("name", user.name)
                localStorage.setItem("userid", user.id)
                localStorage.setItem("role", user.role)
                if (user.role === "Buyer")
                    navigate("/profile")
                else
                    navigate("/admin")
            } else {
                setErrormessage("Invalid username or password")
            }
        } catch (err) {
            setErrormessage("Server error. Please try again later.")
            console.error(err)
        }
    }

    return (
        <>
            <Breadcrum title="Create your free account" />
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-8 col-sm-10 col-11 m-auto">
                        <h5 className='bg-primary text-center text-light p-2'>Login to access your account</h5>
                        <form onSubmit={Postdata}>
                            <div className="row">
                                <div className="mb-3">
                                    <input
                                        type='text'
                                        name='username'
                                        value={data.username}
                                        onChange={getInputdata}
                                        placeholder='Username or Email Address'
                                        className='form-control border-3 border-primary'
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type='password'
                                        name='password'
                                        value={data.password}
                                        onChange={getInputdata}
                                        placeholder='Password'
                                        className={`form-control border-3 ${errormessage ? 'border-danger' : 'border-primary'}`}
                                    />
                                </div>
                                {errormessage && (
                                    <div className="mb-3 text-danger">{errormessage}</div>
                                )}
                                <div className='mb-3'>
                                    <button type='submit' className="btn btn-primary w-100">Login</button>
                                </div>
                            </div>
                        </form>
                        <div className="d-flex justify-content-between">
                            <Link to="#">Forget Password</Link>
                            <Link to="/SignUp">Don't have an account? SignUp</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
