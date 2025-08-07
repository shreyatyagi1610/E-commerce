import React from 'react'
import Breadcrum from './Breadcrum'
import Features from './Features'
import Faqs from '../Faqs'
import Testomonial from '../Testomonial'
// import Testimonial from './Testimonial'

export default function Faqspage() {
    return (
        <>
            <Breadcrum title='Faqs' />
            <Faqs />
            <Features/>
            <Testomonial/>
            {/* <Testimonial /> */}
        </>
    )
}
