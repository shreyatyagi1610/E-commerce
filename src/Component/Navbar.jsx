import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { getSetting } from "../ActionCreators/SettingCategoryActionCreator"
import { useDispatch, useSelector } from 'react-redux'


export default function Navbar() {
    let SettingCategoryStateData = useSelector(state => state.SettingCategoryStateData)
    let dispatch = useDispatch()
    let navigate=useNavigate()
    let [data, setData] = useState({
        googleMap: "",
        address: "",
        phone: "",
        whatsapp: "",
        email: "",
        siteName: "",
    })
    function logOut(){
        localStorage.removeItem("login")
        localStorage.removeItem("name")
        localStorage.removeItem("role")
        localStorage.removeItem("userid")
        navigate("/login")

    }
    useEffect(() => {
        dispatch(getSetting())
        if (SettingCategoryStateData.length) {
            setData({
                googleMap: SettingCategoryStateData[0].googleMap || import.meta.env.VITE_SITE_MAP,
                address: SettingCategoryStateData[0].googleMap || import.meta.env.VITE_SITE_ADDRESS,
                phone: SettingCategoryStateData[0].googleMap || import.meta.env.VITE_SITE_PHONE,
                whatsapp: SettingCategoryStateData[0].googleMap || import.meta.env.VITE_SITE_WHATSAPP,
                email: SettingCategoryStateData[0].googleMap || import.meta.env.VITE_SITE_EMAIL,
                siteName: SettingCategoryStateData[0].googleMap || import.meta.env.VITE_SITE_NAME,
            })
        }
    }, [SettingCategoryStateData.length])
    return (
        <>
            <div className="container-fluid topbar bg-light px-5">
                <div className="row gx-0 align-items-center">
                    <div className="col-lg-10 col-6 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-flex flex-wrap">
                            <Link to={data.googleMap} target="_blank" rel="noreferrer" className="text-muted small me-4"><i className="fas fa-map-marker-alt text-primary me-2"></i><span className='d-none d-xl-inline-block'>{data.address}</span></Link>
                            <Link to={`tel:${data.phone}`} target='_blank' rel='noreferrer' className="text-muted small me-4"><i className="fas fa-phone-alt text-primary me-2"></i><span className='d-none d-xl-inline-block'>{data.phone}</span></Link>
                            <Link to={`https://wa.me/${data.whatsapp}`} target='_blank' rel='noreferrer' className="text-muted small me-4"><i className="fab fa-whatsapp text-primary me-2" style={{ fontSize: 18 }}></i><span className='d-none d-xl-inline-block'>{data.whatsapp}</span></Link>
                            <Link to={`mailto:${data.email}`} target='_blank' rel='noreferrer' className="text-muted small me-0"><i className="fas fa-envelope text-primary me-2"></i><span className='d-none d-xl-inline-block'>{data.email}</span></Link>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 text-center text-lg-end">
                        <div className="p-2 d-inline-flex align-items-center" style={{ height: "45px" }}>
                            {
                                localStorage.getItem("login") ?
                                <div className="dropdown">
                                <a href="#" className="dropdown-toggle text-dark" data-bs-toggle="dropdown"><small><i className="fa fa-home text-primary me-2"></i> My Dashboard</small></a>
                                <div className="dropdown-menu rounded">
                                    <Link to={localStorage.getItem("role")==="buyer"?"/profile":"/AdminHomepage"} className="dropdown-item"><i className="fas fa-user-alt me-2"></i>My Profile</Link>
                                    <Link to="/cart" className="dropdown-item"><i className="fas fa-shopping-cart me-2"></i>Cart</Link>
                                    <Link to="/checkout" className="dropdown-item"><i className="fas fa-shopping-bag me-2"></i>Checkout</Link>
                                    <button to="#" className="dropdown-item" onClick={logOut}><i className="fas fa-power-off me-2"></i> Log Out</button>
                                </div>
                            </div> :
                                    <Link to="/login">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-4 py-3 py-lg-0">
                    <Link to="/" className="navbar-brand p-0">
                        <h1 className="text-primary"><i className="fas fa-shopping-dollar me-3"></i>{data.siteName}</h1>
                        {/* <img src="img/logo.png" alt="Logo"/> */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/About" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/Shop" className="nav-item nav-link">Shop</NavLink>
                            <NavLink to="/Features" className="nav-item nav-link">Features</NavLink>
                            <NavLink to="/Testomonial" className="nav-item nav-link">Testomonial</NavLink>
                            <NavLink to="/Faqs" className="nav-item nav-link">Faqs</NavLink>
                            <NavLink to="/Contact Us" className="nav-item nav-link">Contact Us</NavLink>
                            <NavLink to="/AdminHomepage" className="nav-item nav-link">Admin</NavLink>
                            {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                <span className="dropdown-toggle">Pages</span>
                            </a>
                            <div className="dropdown-menu m-0">
                                <a href="feature.html" className="dropdown-item">Our Features</a>
                                <a href="team.html" className="dropdown-item">Our team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="offer.html" className="dropdown-item">Our offer</a>
                                <a href="FAQ.html" className="dropdown-item">FAQs</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact Us</a> */}
                        </div>
                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Get Started</a>
                    </div>
                </nav>
                <div className="header-carousel owl-carousel">
                    <div className="header-carousel-item">
                        <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row gy-0 gx-5">
                                    <div className="col-lg-0 col-xl-5"></div>
                                    <div className="col-xl-7 animated fadeInLeft">
                                        <div className="text-sm-center text-md-end">
                                            <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To Stocker</h4>
                                            <h1 className="display-4 text-uppercase text-white mb-4">Invest your money with higher return</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                            </p>
                                            <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                                                <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i className="fas fa-play-circle me-2"></i> Watch Video</a>
                                                <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Learn More</a>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                                                <h2 className="text-white me-2">Follow Us:</h2>
                                                <div className="d-flex justify-content-end ms-2">
                                                    <a className="btn btn-md-square btn-light rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                                    <a className="btn btn-md-square btn-light rounded-circle mx-2" href=""><i className="fab fa-twitter"></i></a>
                                                    <a className="btn btn-md-square btn-light rounded-circle mx-2" href=""><i className="fab fa-instagram"></i></a>
                                                    <a className="btn btn-md-square btn-light rounded-circle ms-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-carousel-item">
                        <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row g-5">
                                    <div className="col-12 animated fadeInUp">
                                        <div className="text-center">
                                            <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To Stocker</h4>
                                            <h1 className="display-4 text-uppercase text-white mb-4">Invest your money with higher return</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                            </p>
                                            <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                                                <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i className="fas fa-play-circle me-2"></i> Watch Video</a>
                                                <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Learn More</a>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <h2 className="text-white me-2">Follow Us:</h2>
                                                <div className="d-flex justify-content-end ms-2">
                                                    <a className="btn btn-md-square btn-light rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                                    <a className="btn btn-md-square btn-light rounded-circle mx-2" href=""><i className="fab fa-twitter"></i></a>
                                                    <a className="btn btn-md-square btn-light rounded-circle mx-2" href=""><i className="fab fa-instagram"></i></a>
                                                    <a className="btn btn-md-square btn-light rounded-circle ms-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}