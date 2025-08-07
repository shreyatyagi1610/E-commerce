import React from 'react'
import Breadcrum from './Breadcrum'
import Features from './Features'
import Testomonial from '../Testomonial'
// import Testimonial from '../Testimonial'
import About from '../About'

export default function Aboutpage() {
  return (
 <>
 <Breadcrum title="About"/>
 <About/>
 <Features/>
 <Testomonial/>
 {/* <Testimonial/> */}
</>
  )
}
