import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFaq } from "../ActionCreators/FaqCreatorActionCategory"
export default function Faqs() {
    let FaqCategoryStateData = useSelector(state => state.FaqCategoryStateData)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFaq())
    }, [FaqCategoryStateData])
    return (
        <>
            <div className="container-fluid faq-section pb-5">
                <div className="container pb-5 overflow-hidden">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                        <h4 className="text-primary">FAQs</h4>
                        <h1 className="display-5 mb-4">Frequently Asked Questions</h1>
                        <p className="mb-0">Have questions? We’ve got answers!
                            This section covers the most common queries from our users.
                            Learn how to manage your account and update your profile.
                            Get help with placing, tracking, or canceling orders.
                            Understand our shipping, delivery, and return policies.
                            Find information about payments, refunds, and offers.
                            Explore troubleshooting tips and technical support.
                            Can’t find what you’re looking for? We’re here to help.
                            Contact our support team for quick assistance.
                        </p>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="accordion accordion-flush bg-light rounded p-5" id="accordionFlushSection">
                                {
                                    FaqCategoryStateData.map(item => {
                                        return <div key={item.id} className="accordion-item rounded-top">
                                            <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                                                <button className="accordion-button collapsed rounded-top" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                                    {item.question}
                                                </button>
                                            </h2>
                                            <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushSection">
                                                <div className="accordion-body">{item.answer}</div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-primary rounded">
                                <img src="img/about-2.png" className="img-fluid w-100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
