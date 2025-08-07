import React, { useEffect, useState } from 'react'
import Breadcrum from './Breadcrum'
import { getProduct } from "../../ActionCreators/ProductCategoryActionCreator"
import { getCart, createCart } from "../../ActionCreators/CartActionCategory"
import { getWishlist, createWishlist } from "../../ActionCreators/WishlistCategoryActionCreator"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ProductSlider from './ProductSlider'

export default function Product() {
    let { id } = useParams()
    let [qty, setQty] = useState(1)
    let [Product, setProduct] = useState({ pic: [] })
    let [relatedProducts, setRelatedproducts] = useState([])

    let ProductCategoryStateData = useSelector(state => state.ProductCategoryStateData)
    let WishlistCategoryStateData = useSelector(state => state.WishlistCategoryStateData)
    let CartCategoryStateData = useSelector(state => state.CartCategoryStateData)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    function Addtocart() {
        let item = CartCategoryStateData.find(x => x.Product === Product.id && x.user === localStorage.getItem("userid"))
        if (!item) {
            let item = {
                user: localStorage.getItem("userid"),
                Product: Product.id,
                name: Product.name,
                brand: Product.brand,
                color: Product.color,
                size: Product.size,
                stockquantity: Product.stockquantity,
                price: Product.finalprize,
                pic: Product.pic[0],
                qty: qty,
                total: qty * Product.finalprize
            }
            dispatch(createCart(item))
        }
        navigate("/cart")
    }

    function Addtowishlist() {
        let item = WishlistCategoryStateData.find(x => x.Product === Product.id && x.user === localStorage.getItem("userid"))
        if (!item) {
            let item = {
                user: localStorage.getItem("userid"),
                Product: Product.id,
                name: Product.name,
                brand: Product.brand,
                color: Product.color,
                size: Product.size,
                stockquantity: Product.stockquantity,
                price: Product.finalprize,
                pic: Product.pic[0],
            }
            dispatch(createWishlist(item))
        }
        navigate("/profile")
    }

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    useEffect(() => {
        if (Array.isArray(ProductCategoryStateData) && ProductCategoryStateData.length) {
            let item = ProductCategoryStateData.find(x => x.id === id)
            if (item) {
                setProduct(item)
            } else {
                navigate("/shop")
            }
        }
    }, [ProductCategoryStateData, id])

    useEffect(() => {
        dispatch(getCart())
    }, [])

    useEffect(() => {
        dispatch(getWishlist())
    }, [])

    return (
        <>
            <Breadcrum title={Product.name ?? ""} />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                {
                                    Product.pic.map((x, index) => (
                                        <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current="true" aria-label={`Slide${index + 1}`}></button>
                                    ))
                                }
                            </div>
                            <div className="carousel-inner">
                                {
                                    Product.pic.map((x, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <img src={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${x}`} style={{ height: 500 }} className="d-block w-100" alt="..." />
                                        </div>
                                    ))
                                }
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="d-flex">
                            {
                                Product.pic.map((x, index) => (
                                    <img key={index} src={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${x}`} style={{ height: 100 }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={`d-block w-100 m-1 ${index === 0 ? "active" : ""}`} alt="..." />
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="table-responsive">
                            <table className='table table-border'>
                                <tbody>
                                    <tr>
                                        <th className='bg-primary text-center p-2 text-light' colSpan={2}>{Product.name}</th>
                                    </tr>
                                    <tr>
                                        <th>Maincategory</th>
                                        <td>{Product.MainCategory}</td>
                                    </tr>
                                    <tr>
                                        <th>Subcategory</th>
                                        <td>{Product.SubCategory}</td>
                                    </tr>
                                    <tr>
                                        <th>Brand</th>
                                        <td>{Product.Brand}</td>
                                    </tr>
                                    <tr>
                                        <th>Color/Size</th>
                                        <td>{Product.Color}/{Product.Size}</td>
                                    </tr>
                                    <tr>
                                        <th>Stock</th>
                                        <td>{Product.stockquantity > 0 ? `${Product.stockquantity} Left in stock` : "Out of stock"}</td>
                                    </tr>
                                    <tr>
                                        <th>Prize</th>
                                        <td><del className='text-danger'>&#8377;{Product.baseprize}</del><span className='fs-4'>&#8377;{Product.finalprize}</span><sup className='fs-5'>{Product.discount}% Off</sup></td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>
                                            {
                                                Product.stockquantity > 0 ? (
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <div className="btn-group w-100">
                                                                <button className='btn btn-primary' onClick={() => qty > 1 ? setQty(qty - 1) : null}><i className='fa fa-minus'></i></button>
                                                                <h3 className='w-25 text-center'>{qty}</h3>
                                                                <button className='btn btn-primary' onClick={() => qty < Product.stockquantity ? setQty(qty + 1) : null}><i className='fa fa-plus'></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <div className="btn-group w-100">
                                                                <button className='btn btn-primary' onClick={Addtocart}><i className='fa fa-shopping-cart'></i> Add to Cart</button>
                                                                <button className='btn btn-success' onClick={Addtowishlist}><i className='fa fa-heart'></i> Add to Wishlist</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <button className='btn btn-success w-100' onClick={Addtowishlist}><i className='fa fa-heart'></i> Add to Wishlist</button>
                                                )
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Description</th>
                                        <td><div dangerouslySetInnerHTML={{ __html: Product.description }}></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <ProductSlider MainCategory="Related Products" data={relatedProducts} />
            </div>
        </>
    )
}
