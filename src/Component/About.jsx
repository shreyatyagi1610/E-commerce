import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getSetting} from "../ActionCreators/SettingCategoryActionCreator"


export default function About() {
    let [sitename, setSiteName] = useState(import.meta.env.VITE_SITE_NAME)
    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSetting())
        if (SettingStateData?.length) {
            setSiteName(SettingStateData[0].sitename)
        }
    }, [SettingStateData])
    return (
        <>
            <div className="container-fluid about py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
                            <div>
                                <h4 className="text-primary">About Us</h4>
                                <h1 className="display-5 mb-4">{sitename}-Empowering Businesses Through Innovative Digital Solutions</h1>
                                <p> {sitename}-we are passionate about turning ideas into impactful digital experiences. With a dedicated team of professionals, we specialize in delivering tailored web, mobile, and e-commerce solutions that drive growth and engagement. Our journey began with a simple mission — to make technology accessible, efficient, and results-driven for businesses of all sizes.</p>
                                <p>{sitename}-We believe in building long-term partnerships by offering reliable support, transparent communication, and a deep understanding of each client’s unique goals. Whether you're a startup or an established brand, we’re here to help you innovate and succeed in the ever-evolving digital world.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-primary rounded position-relative overflow-hidden">
                                <img src="img/about-2.png" className="img-fluid rounded w-100" alt="" />

                                <div className="" style={{ position: "absolute", top: "-15px", right: "-15px" }}>
                                    <img src="img/about-3.png" className="img-fluid" style={{ width: "150px", height: "150px", opacity: "0.7" }} alt="" />
                                </div>
                                <div className="" style={{ position: "absolute", top: "-20px", left: "10px", transform: "rotate(90deg)" }}>
                                    <img src="img/about-4.png" className="img-fluid" style={{ width: "100px", height: "150px", opacity: "0.9" }} alt="" />
                                </div>
                                <div className="rounded-bottom">
                                    <img src="img/about-5.jpg" className="img-fluid rounded-bottom w-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}