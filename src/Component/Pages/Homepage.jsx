import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import About from '../About';
import Product from '../Product';
import Features from './Features';
import ProductSlider from './ProductSlider';
import Faqs from '../Faqs';
import Testomonial from '../Testomonial';
import { Link } from 'react-router-dom';
import { getSetting } from '../../ActionCreators/SettingCategoryActionCreator';
import { getProduct } from "../../ActionCreators/ProductCategoryActionCreator"
import {getMaincategory} from "../../ActionCreators/MainCategoryActionCreator"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategorySlider from './CategorySlider';
// import Testimonial from '../Testimonial';
export default function Homepage() {
    let [sitename, setSiteName] = useState(import.meta.env.VITE_SITE_NAME)
    let SettingStateData = useSelector(state => state.SettingStateData)
    let ProductCategoryStateData = useSelector(state => state.ProductCategoryStateData)
    let  MaincategoryStateData = useSelector(state => state. MaincategoryStateData)
    let dispatch = useDispatch()
    let sliderOptions = {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        modules: [Autoplay]
    }
    useEffect(() => {
        dispatch(getSetting())
        if (SettingStateData?.length) {
            setSiteName(SettingStateData[0].sitename)
        }
    }, [SettingStateData])

    useEffect(() => {
        dispatch(getProduct())
    }, [ProductCategoryStateData])
    useEffect(() => {
        dispatch(getMaincategory())
    }, [ MaincategoryStateData])
    return (
        <>

            <div className="header-carousel">
                <Swiper className="mySwiper" {...sliderOptions}>
                    <SwiperSlide>
                        <div className="header-carousel-item">
                            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row gy-0 gx-5">
                                        <div className="col-lg-0 col-xl-5"></div>
                                        <div className="col-xl-7 animated fadeInLeft">
                                            <div className="text-sm-center text-md-end">
                                                <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To {sitename}</h4>
                                                <h1 className="display-4 text-uppercase text-white mb-4">Invest your money with higher return</h1>
                                                <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                                </p>
                                                <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                                                    <Link className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" to="/shop?mc=Male">Shop Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="header-carousel-item">
                            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row gy-0 gx-5">
                                        <div className="col-lg-0 col-xl-5"></div>
                                        <div className="col-xl-7 animated fadeInLeft">
                                            <div className="text-sm-center text-md-end">
                                                <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To {sitename}</h4>
                                                <h1 className="display-4 text-uppercase text-white mb-4">Invest your money with higher return</h1>
                                                <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                                </p>
                                                <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                                                    <Link className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" to="/shop?mc=Male">Shop Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="header-carousel-item">
                            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row gy-0 gx-5">
                                        <div className="col-lg-0 col-xl-5"></div>
                                        <div className="col-xl-7 animated fadeInLeft">
                                            <div className="text-sm-center text-md-end">
                                                <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To {sitename}</h4>
                                                <h1 className="display-4 text-uppercase text-white mb-4">Invest your money with higher return</h1>
                                                <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                                </p>
                                                <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                                                    <Link className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" to="/shop?mc=Male">Shop Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="header-carousel-item">
                            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row gy-0 gx-5">
                                        <div className="col-lg-0 col-xl-5"></div>
                                        <div className="col-xl-7 animated fadeInLeft">
                                            <div className="text-sm-center text-md-end">
                                                <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To {sitename}</h4>
                                                <h1 className="display-4 text-uppercase text-white mb-4">Invest your money with higher return</h1>
                                                <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                                </p>
                                                <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                                                    <Link className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" to="/shop?mc=Male">Shop Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="header-carousel-item">
                            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row gy-0 gx-5">
                                        <div className="col-lg-0 col-xl-5"></div>
                                        <div className="col-xl-7 animated fadeInLeft">
                                            <div className="text-sm-center text-md-end">
                                                <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To {sitename}</h4>
                                                <h1 className="display-4 text-uppercase text-white mb-4">Invest your money with higher return</h1>
                                                <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                                </p>
                                                <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                                                    <Link className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" to="/shop?mc=Male">Shop Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <CategorySlider title="Maincategory"/>
            <Product data={ProductCategoryStateData?.filter(x => x.active)?.slice(0, 12) ?? []} />
            <About />
            <Features />
            {
                MaincategoryStateData?.filter(x=>x.active).map(item=>{
                    return <ProductSlider key={item.id} data={ProductCategoryStateData.filter(x=>x.MainCategory===item.name)} MainCategory={item.name}/>
                })
            }
             <CategorySlider title="Subcategory"/>
            <Faqs />
            <Testomonial />
             <CategorySlider title="Brand"/>
            {/* <Testimonial/> */}
        </>
    )
}
