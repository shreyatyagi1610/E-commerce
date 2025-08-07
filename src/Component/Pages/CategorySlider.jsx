import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { getMaincategory } from '../../ActionCreators/MainCategoryActionCreator';
import { getSubCategory } from '../../ActionCreators/SubCategoryActionCreator';
import { getBrand } from '../../ActionCreators/BrandCategoryActionCreator';
import { Link } from 'react-router-dom';
import 'swiper/css';

export default function CategorySlider({ title }) {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const MaincategoryStateData = useSelector(state => state.MaincategoryStateData);
    const SubCategoryStateData = useSelector(state => state.SubCategoryStateData);
    const BrandStateData = useSelector(state => state.BrandStateData);

    // Fetch data based on title
    useEffect(() => {
        if (title === "Maincategory") dispatch(getMaincategory());
        else if (title === "Subcategory") dispatch(getSubCategory());
        else if (title === "Brand") dispatch(getBrand());
    }, [title, dispatch]);

    // Filter only active items
    useEffect(() => {
        if (title === "Maincategory" && MaincategoryStateData.length)
            setData(MaincategoryStateData.filter(x => x.active));
        else if (title === "Subcategory" && SubCategoryStateData.length)
            setData(SubCategoryStateData.filter(x => x.active));
        else if (title === "Brand" && BrandStateData.length)
            setData(BrandStateData.filter(x => x.active));
    }, [title, MaincategoryStateData, SubCategoryStateData, BrandStateData]);

    // Get appropriate query parameter
    const getQueryParam = () => {
        if (title === "Maincategory") return "mc";
        if (title === "Subcategory") return "sc";
        return "br";
    };

    // Determine slidesPerView for the largest screen
    const maxSlidesPerView = title === "Brand" ? 6 : 3;

    const sliderOptions = {
        loop: data.length > maxSlidesPerView, // ✅ only enable loop if enough slides
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            clickable: true,
        },
        spaceBetween: 20,
        breakpoints: {
            0: { slidesPerView: title === "Brand" ? 2 : 1 },
            768: { slidesPerView: title === "Brand" ? 4 : 2 },
            1200: { slidesPerView: maxSlidesPerView },
        },
        modules: [Autoplay, FreeMode, Pagination],
    };

    return (
        <div className="container-fluid Maincategory pt-5">
            <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.2s">
                <Swiper {...sliderOptions} className="mySwiper">
                    {data.map(item => (
                        <SwiperSlide key={item.id}>
                            <Link to={`/shop?${getQueryParam()}=${item.name}`}>
                                <img
                                    src={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${item.image}`}
                                    style={{ height: title === "Brand" ? 100 : 200, margin: 'auto' }}
                                    className="w-100"
                                    alt={item.name}
                                />
                                <h5 className="text-center p-2">{item.name}</h5>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
