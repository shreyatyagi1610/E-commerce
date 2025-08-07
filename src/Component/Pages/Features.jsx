import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getFeatures} from "../../ActionCreators/FeatureCategoryActionCategory"
import { Link } from 'react-router-dom';

export default function Features() {
     let [sitename, setSiteName] = useState(import.meta.env.VITE_SITE_NAME)
        let FeaturesCategoryStateData = useSelector(state => state.FeaturesCategoryStateData)
        let dispatch = useDispatch()
        useEffect(() => {
            dispatch(getFeatures())
        }, [FeaturesCategoryStateData])
  return (
    <>
     <div className="container-fluid feature pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                    <h4 className="text-primary">Our Features</h4>
                    <h1 className="display-5 mb-4">Connecting businesses, ideas, and people for greater impact.</h1>
                    <p className="mb-0">Lorem ipsum dolor,,isir,amet,set sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                    </p>
                </div>
                <div className='row g-4'>
              {
                FeaturesCategoryStateData.map(item=>{
                    return <div key={item.id} className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="feature-item p-4">
                            <div className="feature-icon p-4 mb-4">
                                <span className='fs-1 text-primary' dangerouslySetInnerHTML={{__html:item.icon}}></span>
                            </div>
                            <h4>{item.name}</h4>
                            <p className="mb-4" style={{height:120}}>{item.description}</p>
                            <Link className="btn btn-primary rounded-pill py-2 px-4" to="/shop">Learn More</Link>
                        </div>
                        </div>
                })
              }
              </div>
            </div>
        </div>
    </>
  )
}
