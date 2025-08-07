import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Homepage from './Component/Pages/Homepage'
import Footer from './Component/Footer'
import Aboutpage from './Component/Pages/Aboutpage'
import Featurepage from './Component/Pages/Featurepage'
import Faqs from './Component/Faqs'
import Faqspage from './Component/Pages/Faqspage'
import Testomonial from './Component/Testomonial'


import Shoppage from './Component/Pages/Shoppage'
import ContactUspage from './Component/Pages/ContactUspage'
import Errorpage from './Component/Pages/Errorpage'
import AdminHomepage from './Component/Pages/Admin/AdminHomepage'
import AdminMainCategorypage from './Component/Pages/Admin/MainCategory/AdminMainCategorypage'
import AdminCreateMaincategorypage from './Component/Pages/Admin/MainCategory/AdminCreateMaincategorypage'
import AdminUpdatecategorypage from './Component/Pages/Admin/AdminUpdateMaincategorypage'
import AdminUpdateMaincategorypage from './Component/Pages/Admin/AdminUpdateMaincategorypage'
import AdminSubCategorypage from "./Component/Pages/Admin/SubCategory/AdminSubCategorypage"
import AdminUpdateSubcategorypage from './Component/Pages/Admin/SubCategory/AdminUpdateSubcategorypage'
import AdminCreateSubcategorypage from './Component/Pages/Admin/SubCategory/AdminCreateSubcategorypage'
import AdminBrandCategorypage from './Component/Pages/Admin/Brand/AdminBrandCategorypage'
import AdminCreateBrandCategorypage from './Component/Pages/Admin/Brand/AdminCreateBrandcategorypage'
import AdminUpdateBrandCategorypage from './Component/Pages/Admin/Brand/AdminUpdateBrandcategorypage'
import AdminTestimonialCategory from "./Component/Pages/Admin/Testimonial/AdminTestimonialCategory"
import AdminTestimonialCreateCategory from "./Component/Pages/Admin/Testimonial/AdminTestimonialCreateCategory"
import AdminTestimonialUpdateCategory from "./Component/Pages/Admin/Testimonial/AdminTestimonialUpdateCategory"
import AdminFeaturesCategory from './Component/Pages/Admin/Features/AdminFeatureCategory'
import AdminFeaturesCreatecategory from './Component/Pages/Admin/Features/AdminFeatureCreateCategory'
import AdminFeaturesUpdateCategory from './Component/Pages/Admin/Features/AdminFeatureUpdateCategory'
import AdminFaqCategory from './Component/Pages/Admin/Faq/AdminFaqCategory'
import AdminFaqCreatecategory from './Component/Pages/Admin/Faq/AdminFaqCreateCategory'
import AdminFaqUpdateCategory from './Component/Pages/Admin/Faq/AdminFaqUpdateCategory'
import AdminSettingCategory from './Component/Pages/Admin/Settings/AdminSettingCategory'
import AdminProductCategory from './Component/Pages/Admin/Product/AdminProductCategory'
import AdminProductCreateCategory from './Component/Pages/Admin/Product/AdminProductCreateCategory'
import AdminProductUpdateCategory from './Component/Pages/Admin/Product/AdminProductUpdateCategory'
import Product from './Component/Product'
import SignUp from './Component/Pages/SignUp'
import Login from './Component/Pages/Login'
import ProfilePage from './Component/Pages/ProfilePage'
import UpdateProfile from './Component/Pages/UpdateProfile'
import CartPage from './Component/Pages/CartPage'
import CheckoutPage from './Component/Pages/CheckoutPage'
import ConfirmationPage from './Component/Pages/ConfirmationPage'
export default function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='' element={<Homepage/>}/>
    <Route path='/about' element={<Aboutpage/>}/>
    <Route path='/shop' element={<Shoppage/>}/>
    <Route path='/features' element={<Featurepage/>}/>
    <Route path='/faqs' element={<Faqspage/>}/>
    <Route path='/testomonial' element={<Testomonial/>}/>
    <Route path='/Contact US' element={<ContactUspage/>}/>
    <Route path='/product/:id' element={<Product/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
    <Route path='/update-profile' element={<UpdateProfile/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/checkout' element={<CheckoutPage/>}/>
    <Route path='/confirmation' element={<ConfirmationPage/>}/>
    

    {/* Admin Routes */}
    <Route path='/AdminHomepage' element={<AdminHomepage/>}/>
    <Route path="/Admin/MainCategory" element={<AdminMainCategorypage/>}/>
    <Route path="/Admin/MainCategory/Create" element={<AdminCreateMaincategorypage/>}/>
    <Route path="/Admin/MainCategory/Update/:id" element={<AdminUpdateMaincategorypage/>}/>

    <Route path="/Admin/SubCategory" element={<AdminSubCategorypage/>}/>
    <Route path="/Admin/SubCategory/Create" element={<AdminCreateSubcategorypage/>}/>
    <Route path="/Admin/SubCategory/Update/:id" element={<AdminUpdateSubcategorypage/>}/>

    <Route path="/Admin/Brand" element={<AdminBrandCategorypage/>}/>
    <Route path="/Admin/BrandCategory/Create" element={<AdminCreateBrandCategorypage/>}/>
    <Route path="/Admin/BrandCategory/Update/:id" element={<AdminUpdateBrandCategorypage/>}/>

    <Route path="/Admin/Testimonial" element={<AdminTestimonialCategory/>}/>
    <Route path="/Admin/Testimonial/Create" element={<AdminTestimonialCreateCategory/>}/>
    <Route path="/Admin/Testimonial/Update/:id" element={<AdminTestimonialUpdateCategory/>}/>

    <Route path="/Admin/Features" element={<AdminFeaturesCategory/>}/>
    <Route path="/Admin/Features/Create" element={<AdminFeaturesCreatecategory/>}/>
    <Route path="/Admin/Features/Update/:id" element={<AdminFeaturesUpdateCategory/>}/>

    <Route path="/Admin/Faq" element={<AdminFaqCategory/>}/>
    <Route path="/Admin/Faq/Create" element={<AdminFaqCreatecategory/>}/>
    <Route path="/Admin/Faq/Update/:id" element={<AdminFaqUpdateCategory/>}/>

    <Route path="/Admin/Setting" element={<AdminSettingCategory/>}/>

    <Route path="/Admin/Product" element={<AdminProductCategory/>}/>
    <Route path="/Admin/Product/Create" element={<AdminProductCreateCategory/>}/>
    <Route path="/Admin/Product/Update/:id" element={<AdminProductUpdateCategory/>}/>




   

  
 
    <Route path='/*' element={<Errorpage/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}
