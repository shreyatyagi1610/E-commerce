import { combineReducers } from "@reduxjs/toolkit";
import MainCategoryReducer from "./MainCategoryReducer"
import SubCategoryReducer from "./SubCategoryReducer"
import BrandCategoryReducer from "./BrandCategoryReducer"
import ProductCategoryReducer from "./ProductCategoryReducer"
import FeaturesCategoryReducer from "./FeaturesCategoryReducer"
import FaqCategoryReducer from "./FaqCategoryReducer"
import TestimonialCategoryReducer from "./TestimonialCategoryReducer"
import SettingCategoryReducer from "./SettingCategoryReducer"
import CartCategoryReducer from "./CartCategoryReducer"
import CheckoutCategoryReducer from "./CheckoutCategoryReducer"
import ContactusCategoryReducer from "./ContactusCategoryReducer"
import NewsletterCategoryReducer from "./NewsletterCategoryReducer"
import UserCategoryReducer from "./UserCategoryReducer"
import WishlistCategoryReducer from "./WishlistCategoryReducer"

export default combineReducers({

        MaincategoryStateData:MainCategoryReducer,
        SubCategoryStateData:SubCategoryReducer,
        BrandStateData:BrandCategoryReducer,
        ProductCategoryStateData:ProductCategoryReducer,
        FeaturesCategoryStateData:FeaturesCategoryReducer,
        TestimonialCategoryStateData:TestimonialCategoryReducer,
        FaqCategoryStateData:FaqCategoryReducer,
        SettingCategoryStateData:SettingCategoryReducer,
        CartCategoryStateData:CartCategoryReducer,
        CheckoutCategoryStateData:CheckoutCategoryReducer,
        ContactusCategoryStateData:ContactusCategoryReducer,
        NewsletterCategoryStateData:NewsletterCategoryReducer,
        UserCategoryStateData:UserCategoryReducer,
        WishlistCategoryReducer:WishlistCategoryReducer,
        

        
})

