import { all } from "redux-saga/effects";

import MaincategorySaga from "./MainCategorySaga";
import SubcategorySaga from "./SubCategorySaga"
import BrandSaga from "./BrandCategorySaga"
import ProductSaga from "./ProductCategorySaga" 
import FeaturesSaga from "./FeaturesCategorySaga"
import FaqSaga from "./FaqCategorySaga"
import TestimonialSaga from "./TestimonialCategorySaga"
import SettingSaga from "./SettingCategorySaga"
import UserCategorySaga from "./UserCategorySaga"
import WishlistCategorySaga from "./WishlistCategorySaga"
import NewsletterCategorySaga from "./NewsletterCategorySaga"
import ContactusCategorySaga from "./ContactusCategorySaga"
import CheckoutCategorySaga from "./CheckoutCategorySaga"
import CartCategorySaga from "./CartCategorySaga"

export default function* Rootsaga(){
    yield all([
        MaincategorySaga(),
        SubcategorySaga (),
        BrandSaga(),
        ProductSaga(),
        FeaturesSaga(),
        FaqSaga(),
        TestimonialSaga(),
        SettingSaga(),
        UserCategorySaga(),
        WishlistCategorySaga(),
        NewsletterCategorySaga(),
        ContactusCategorySaga(),
        CheckoutCategorySaga(),
        CartCategorySaga()

   ])

}