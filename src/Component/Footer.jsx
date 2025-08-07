import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {getSetting} from "../ActionCreators/SettingCategoryActionCreator"
import {getNewsletter,CREATE_Newsletter} from "../ActionCreators/NewsletterCategoryActionCreator"
export default function Footer() {
    let[email,setEmail]=useState("")
    let[message,setMessage]=useState("")
    let SettingCategoryStateData = useSelector(state => state.SettingCategoryStateData)
    let NewsletterCategoryStateData=useSelector(state=>state.NewsletterCategoryStateData)
    let dispatch = useDispatch()
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
                facebook:SettingCategoryStateData[0].googleMap || import.meta.env.VITE_SITE_FACEBOOK ,
                twitter: SettingCategoryStateData[0].googleMap || import.meta.env.VITE_SITE_TWITTER,
                instagram: SettingCategoryStateData[0].googleMap || import.meta.env.VITE_SITE_INSTAGRAM,
                linkedin: SettingCategoryStateData[0].googleMap || import.meta.env.VITE_SITE_LINKEDIN,
                youtube: SettingCategoryStateData[0].googleMap || import.meta.env.VITE_SITE_YOUTUBE,
            })
        }
    }, [SettingCategoryStateData.length])
    return (
        <>
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5 border-start-0 border-end-0" style={{ border: "1px solid, borderColor: rgb(255, 255, 255, 0.08)" }}>
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <div className="footer-item">
                                <a href="index.html" className="p-0">
                                    <h4 className="text-white"><i className="fas fa-shopping-bag me-3"></i>{import.meta.env.VITE_SITE_NAME}</h4>
                                    {/* <img src="img/logo.png" alt="Logo"/> */}
                                </a>
                                <div className="col-md-6 col-lg-6 col-xl-3">
                                    <div className="footer-item">
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-map-marker-alt text-primary me-3"></i>
                                            <Link to={import.meta.env.VITE_SITE_ADDRESS} target='_blank' rel='noreferrer' className="text-white mb-0">{import.meta.env.VITE_SITE_ADDRESS}</Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-envelope text-primary me-3"></i>
                                            <Link to={`mailto:${import.meta.env.VITE_SITE_EMAIL}`} target='_blank' rel='noreferrer' className="text-white mb-0">{import.meta.env.VITE_SITE_EMAIL}</Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-phone-alt text-primary me-3"></i>
                                            <Link to={`tel:${import.meta.env.VITE_SITE_PHONE}`} target='_blank' rel='noreferrer' className="text-white mb-0">{import.meta.env.VITE_SITE_PHONE}</Link>
                                        </div>
                                        <div className="d-flex align-items-center mb-4">
                                            <i className="fab fa-whatsapp text-primary me-3"></i>
                                            <Link to={`https://wa.me/${import.meta.env.VITE_SITE_WHATSAPP}`} target='_blank' rel='noreferrer' className="text-white mb-0">{import.meta.env.VITE_SITE_WHATSAPP}</Link>
                                        </div>
                                        <div className="d-flex">
                                            <Link to={import.meta.env.VITE_SITE_FACEBOOK} className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f text-white"></i></Link>
                                            <Link to={import.meta.env.VITE_SITE_TWITTER} className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-twitter text-white"></i></Link>
                                            <Link to={import.meta.env.VITE_SITE_INSTAGRAM} className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-instagram text-white"></i></Link>
                                            <Link to={import.meta.env.VITE_SITE_LINKEDIN} className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-linkedin-in text-white"></i></Link>
                                            <Link to={import.meta.env.VITE_SITE_YOUTUBE} className="btn btn-primary btn-sm-square rounded-circle me-0" href="#"><i className="fab fa-youtube text-white"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-2">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">Quick Links</h4>
                                <Link className='text-light' to='/' href="#"><i className="fas fa-angle-right me-2"></i> Home</Link>
                                <Link className='text-light' to='/About US' href="#"><i className="fas fa-angle-right me-2"></i> About US</Link>
                                <Link className='text-light' to='/ Features' href="#"><i className="fas fa-angle-right me-2"></i> Features</Link>
                                <Link className='text-light' to='/Testomonials' href="#"><i className="fas fa-angle-right me-2"></i> Testomonials</Link>
                                <Link className='text-light' to=' Faqs/' href="#"><i className="fas fa-angle-right me-2"></i> Faqs</Link>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item">
                                <Link className='text-light' to='/' href="#"><i className="fas fa-angle-right me-2"></i> Privacy Policy</Link>
                                <Link className='text-light' to='/' href="#"><i className="fas fa-angle-right me-2"></i> T&C</Link>
                                <Link className='text-light' to='/' href="#"><i className="fas fa-angle-right me-2"></i> Refund Policy</Link>
                                <Link className='text-light' to='/Contact us' href="#"><i className="fas fa-angle-right me-2"></i> Contact us</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">Newsletter</h4>
                                <p className='text-light'>Subscribe our Newsletter Service to get update on our latest products and Best offers</p>
                                <form action="">
                                    <div className='btn-group'>
                                        <input type='email' name='email' placeholder='Email Address' className='form-control rounded-0 rounded-start' />
                                        <button className='btn btn-primary'>Subscribe</button>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className=" text-center mb-md-0">
                        <span className="text-body"><a href="#" className="border-bottom text-white"><i className="fas fa-copyright text-light me-2"></i>{import.meta.env.VITE_SITE_NAME}</a>, All right reserved.</span>
                    </div>
                </div>
            </div>
        </>
    )
}