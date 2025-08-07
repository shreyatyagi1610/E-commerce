import React from 'react'       
import { Link } from 'react-router-dom';

export default function Product({data}) {
  return (
    <>
     <div className="container-fluid service py-3">
            <div className="container pb-3">
                <div className="text-center mx-auto pb-3 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                    <h4 className="text-primary">Checkout Our Latest Products</h4>
                </div>
                <div className="row g-4">
                    {
                        data.map(item=>{
                            return <div key={item?.id} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${item.pic}`} height={250} className="rounded-top w-100" alt="Image"/>
                            </div>
                                <div     className='btn-group w-100'>
                                    <h6 className='bg-primary bg-primary text-center w-50 p-2 text-light'>{item.brand}</h6>
                                    <h6 className='bg-success bg-primary text-center w-50 p-2 text-light'>{item.stockquantity} left in stock</h6>
                                </div>
                                 <div className="rounded-bottom p-4">
                                <Link to={`/product/${item.id}`} className="h4 d-inline-block mb-4"> {item.name}</Link>
                                <p className="mb-4"><del className='text-danger'>&#8377;{item.baseprize}</del><span className='fs-5'>&#8377;{item.finalprize}</span><sup className='fs-5' style={{fontWeight:"bold"}}>{item.discount}%off</sup></p>
                                <Link className="btn btn-primary rounded-pill py-2 px-4 w-100" to={`/product/${item.id}`}>Add to Cart</Link>
                            </div>
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
