import React from 'react'
import Breadcrum from './Breadcrum'
import Faqs from '../Faqs'
import Features from './Features'
import Testomonial from '../Testomonial'
// import Testimonial from './Testimonial'


export default function Featurepage() {
  return (
   <>
    <Breadcrum title="Features"/>
     <Features/>
     <Faqs/>
     <Testomonial/>
     {/* <Testimonial/> */}

   </>
  )
}
