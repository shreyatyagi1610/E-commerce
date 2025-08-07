
import React, { useRef, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
// import { Navigation } from 'swiper/modules'
import { getProduct, updateProduct } from '../../../../ActionCreators/ProductCategoryActionCreator.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrum from '../../Breadcrum.jsx'
import Adminsidebar from '../Adminsidebar.jsx'
import ImageValidator from '../../../../Validator/ImageValidator.jsx'
import FormValidator from '../../../../Validator/FormValidator.jsx'
import { getMaincategory } from '../../../../ActionCreators/MainCategoryActionCreator.jsx'
import { getSubCategory } from '../../../../ActionCreators/SubCategoryActionCreator.jsx'
import { getBrand } from '../../../../ActionCreators/BrandCategoryActionCreator.jsx'

let rte
export default function AdminUpdateProductpage() {
    let { id } = useParams()
    let refdiv = useRef(null)
    let [flag, setFlag] = useState()
    let [data, setdata] = useState({
        name: "",
        maincategory: '',
        subcategory: '',
        brand: "",
        color: "",
        size: "",
        baseprize: "",
        discount: "",
        finalprize: "",
        stock: true,
        stockquantity: "",
        pic: [],
        description: "",
        active: true,
    })
    let [errormessage, seterrormessage] = useState({
        name: "",
        color: "",
        size: "",
        baseprize: "",
        discount: "",
        stockquantity: "",
        pic: "",
    })
    let [show, setshow] = useState(false)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let ProductCategoryStateData = useSelector(state => state.ProductCategoryStateData)
    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let SubCategoryStateData = useSelector(state => state.SubCategoryStateData)
    let BrandStateData = useSelector(state => state.BrandStateData)


    function getInputData(e) {
        let name = e.target.name
        let value = name === "pic" ? data.pic.concat(Array.from(e.target.files).map(x => "Product/" + x.name)) : e.target.value
        // let value = e.target.value

        seterrormessage((old) => {
            return {
                ...old,
                [name]: name === "pic" ? ImageValidator(e) : FormValidator(e)
            }
        })

        setdata((old) => {
            return {
                ...old,
                [name]: name === "active" ? (value === "1" ? true : false) : value
            }
        })

    }
    function postData(e) {
        e.preventDefault()
        let error = Object.values(errormessage).find(item => item !== "")
        if (error) {
            setshow(true)
        }
        else {
            let item = ProductCategoryStateData.find(x => String(x.id) !== String(id) && x.name.toLowerCase() === data.name.toLowerCase())
            if (item) {
                seterrormessage((old) => {
                    return {
                        ...old,
                        "name": "Product With Same Same Is Already Exists"
                    }
                })
                setshow(true)
                return
            }
            let bp = parseInt(data.baseprize);
            let d = parseInt(data.discount);
            let fp = parseInt(bp - (bp * d / 100));
            let stockquantity = parseInt(data.stockquantity);

            dispatch(updateProduct({
                ...data,
                maincategory: data.maincategory || MaincategoryStateData[0].name,
                subcategory: data.maincategory || SubCategoryStateData[0].name,
                brand: data.brand || BrandStateData[0].name,
                baseprize: bp,
                discount: d,
                finalprize: fp,
                stockquantity: stockquantity,
                description: rte.getHTMLCode()

            }))
            // let formData=new FormData()
            // formData.append("name",data.name)
            // formData.append("id",data.id)
            // formData.append("pic",data.pic)
            // formData.append("active",data.active)
            // dispatch(createProduct(formData))

            navigate("/Admin/Product")
        }
    }

    useEffect(() => {
        (() => {
            dispatch(getProduct())
            if (ProductCategoryStateData.length) {
                let item = ProductCategoryStateData.find(x => x.id === id)
                if (item) {
                    setdata({ ...item })
                    rte = new window.RichTextEditor(refdiv.current);
                    rte.setHTMLCode(item.description);
                }
                else
                    navigate("/admin/Product")

            }

        })()
    }, [ProductCategoryStateData.length])

    useEffect(() => {
        (() => {
            dispatch(getMaincategory())
        })()
    }, [MaincategoryStateData.length])
    useEffect(() => {
        (() => {
            dispatch(getSubCategory())
        })()
    }, [SubCategoryStateData.length])
    useEffect(() => {
        (() => {
            dispatch(getBrand())
        })()
    }, [BrandStateData.length])

    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className='row'>
                    <div className='col-md-2 mb-3'>
                        <Adminsidebar />
                    </div>
                    <div className='col-md-9 mb-3'>
                        <h5 className='bg-primary text-light text-center p-2'>Update Product <Link to="/Admin/Product"><i className='fa fa-list text-light float-end'></i></Link></h5>
                        <form onSubmit={postData}>

                            <div className='row'>
                                <div className='col-12 mb-3'>
                                    <label>Name*</label>
                                    <input type='text' name='name' value={data.name} onChange={getInputData} placeholder='Product Name' className={`form-control border-3 ${show && errormessage.name ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.name ? <p className='text-danger text-capitalize'>{errormessage.name}</p> : null}
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>MainCategory*</label>
                                    <select name='maincategory' value={data.maincategory} onChange={getInputData} className='form-control boredr-3 border-primary'>
                                        {
                                            MaincategoryStateData.filter(x => x.active).map((item) => {
                                                return <option key={item.id}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>SubCategory*</label>
                                    <select name='subcategory' value={data.subcategory} onChange={getInputData} className='form-control boredr-3 border-primary'>
                                        {
                                            SubCategoryStateData.filter(x => x.active).map((item) => {
                                                return <option key={item.id}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Brand*</label>
                                    <select name='brand' value={data.brand} onChange={getInputData} className='form-control boredr-3 border-primary'>
                                        {
                                            BrandStateData.filter(x => x.active).map((item) => {
                                                return <option key={item.id}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <label>Stock*</label>
                                    <select name='stock' value={data.stock ? "1" : "0"} className='form-control boredr-3 border-primary'>
                                        <option value="1">yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>

                                <div className='col-12 mb-3'>
                                    <label>Color*</label>
                                    <input type='text' name='color' value={data.color} onChange={getInputData} placeholder='Color Name' className={`form-control border-3 ${show && errormessage.color ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.color ? <p className='text-danger text-capitalize'>{errormessage.color}</p> : null}
                                </div>

                                <div className='col-12 mb-3'>
                                    <label>Size*</label>
                                    <input type='text' name='size' value={data.size} onChange={getInputData} placeholder='Size Name' className={`form-control border-3 ${show && errormessage.size ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.size ? <p className='text-danger text-capitalize'>{errormessage.size}</p> : null}
                                </div>
                                <div className='col-12 mb-3'>
                                    <label>Base Prize*</label>
                                    <input type='number' name='baseprize' value={data.baseprize} onChange={getInputData} placeholder='Base Prize' className={`form-control border-3 ${show && errormessage.baseprize ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.baseprize ? <p className='text-danger text-capitalize'>{errormessage.baseprize}</p> : null}
                                </div>
                                <div className='col-12 mb-3'>
                                    <label>Discount*</label>
                                    <input type='number' name='discount' value={data.discount} onChange={getInputData} placeholder='Discount' className={`form-control border-3 ${show && errormessage.discount ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.discount ? <p className='text-danger text-capitalize'>{errormessage.discount}</p> : null}
                                </div>
                                <div className='col-12 mb-3'>
                                    <label>Description*</label>
                                    <div ref={refdiv} className='border-3 border-primary'></div>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <label>Stock Quantity*</label>
                                    <input type='number' name='stockquantity' value={data.stockquantity} onChange={getInputData} placeholder='Discount' className={`form-control border-3 ${show && errormessage.stockquantity ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.stockquantity ? <p className='text-danger text-capitalize'>{errormessage.stockquantity}</p> : null}
                                </div> <div className='col-md-4 mb-3'>
                                    <label>Pic*</label>
                                    <input type='file' name='pic' mult
                                        iple onChange={getInputData} className={`form-control border-3 ${show && errormessage.pic ? 'border-danger' : 'border-primary'}`} />
                                    {show && errormessage.pic ? <p className='text-danger text-capitalize'>{errormessage.pic}</p> : null}
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <label>old Pics(click to remove)</label>
                                    {
                                        data.pic.map((item, index) => {
                                            return <img onClick={() => {
                                                data.pic.splice(index, 1)
                                                setFlag(!flag)

                                            }} src={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${item}`} key={index} height={50} width={50} className='me-2 mb-2' />
                                        })
                                    }

                                </div>
                                <div className='col-6 mb-3'>
                                    <label>Active*</label>
                                    <select name='active' value={data.active ? "1" : "0"} onChange={getInputData} className='form-select border-3 border-primary'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                                <div className='col-12 mb-3'>
                                    <button type='submit' className='btn btn-primary w-100'>Update</button>

                                </div>

                            </div>
                        </form>
                    </div>
                </div >

            </div >
        </>
    )
}