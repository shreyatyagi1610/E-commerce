import React, { useRef, useEffect, useState } from 'react'
import Breadcrum from '../../Breadcrum'
import Adminsidebar from '../Adminsidebar'
import { Link, useNavigate } from 'react-router-dom'
import FormValidator from '../../../../Validator/FormValidator'
import ImageValidator from '../../../../Validator/ImageValidator'
import { Navigation } from 'swiper/modules'
import { createProduct } from '../../../../ActionCreators/ProductCategoryActionCreator'
import { getMaincategory } from '../../../../ActionCreators/MainCategoryActionCreator'
import { getSubCategory } from '../../../../ActionCreators/SubCategoryActionCreator'
import { getBrand } from '../../../../ActionCreators/BrandCategoryActionCreator'
import { useDispatch, useSelector } from 'react-redux'

 let rte
export default function AdminCreatecategorypage() {
  let ProductCategoryStateData = useSelector(state => state.ProductCategoryStateData)
  let refdiv=useRef(null)
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
    active: true,
  })
  let [errormessage, seterrormessage] = useState({
    name: "Name field is mandatory",
    color: "colorfield is mandatory",
    size: "size field is mandatory",
    baseprize: "baseprize field is mandatory",
    discount: "discount field is mandatory",
    stockquantity: "stockquantity field is mandatory",
    pic: "Pic field is mandatory",
  })
  let [show, setshow] = useState(false)
  let navigation = useNavigate()
  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  let SubCategoryStateData = useSelector(state => state.SubCategoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)

  function getInputData(e) {
    let name = e.target.name
    let value = name === "pic" ? Array.from(e.target.files).map(x => "Product/" + x.name) : e.target.value
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
      let item = ProductCategoryStateData.find(x => x.name.toLowerCase() === data.name.toLowerCase())
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
      let bp = parseInt(data.baseprize)
      let d = parseInt(data.discount)
      let fp = parseInt(bp - bp * d / 100)
      let stockquantity = parseInt(data.stockquantity)
      dispatch(createProduct({

        ...data,
        maincategory: data.maincategory || MaincategoryStateData[0].name,
        subcategory: data.maincategory || SubCategoryStateData[0].name,
        brand: data.brand || BrandStateData[0].name,
        baseprize: bp,
        discount: d,
        finalprize: fp,
        stockquantity: stockquantity,
        description:rte.getHTMLCode()
      }))

      // let formData=new FormData()
      // formData.append("name",data.name)
      // formData.append("pic",data.pic)
      // formData.append("message",data.message)
      // formData.append("active",data.active)
      // dispatch(createProduct(formData))

      navigation("/admin/Product")
    }
  }


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
  
  useEffect(()=>{
    rte=new window.RichTextEditor(refdiv.current);
    rte.setHTMLCode("");
  })
  return (
    <>
      <Breadcrum title="Admin" />
      <div className="container-fluid my-3">
        <div className='row'>
          <div className='col-md-2 mb-3'>
            <Adminsidebar />
          </div>
          <div className='col-md-9 mb-3'>
            <h5 className='bg-primary text-light text-center p-2'>Create MainCategory <Link to="/Admin/Product"><i className='fa fa-list text-light float-end'></i></Link></h5>
            <form onSubmit={postData}>

              <div className='row'>
                <div className='col-12 mb-3'>
                  <label>Name*</label>
                  <input type='text' name='name' onChange={getInputData} placeholder='Full Name' className={`form-control border-3 ${show && errormessage.name ? 'border-danger' : 'border-primary'}`} />
                  {show && errormessage.name ? <p className='text-danger text-capitalize'>{errormessage.name}</p> : null}
                </div>
                <div className='col-md-3 mb-3'>
                  <label>MainCategory*</label>
                  <select name='maincategory' onChange={getInputData} className='form-control boredr-3 border-primary'>
                    {
                      MaincategoryStateData.filter(x => x.active).map((item) => {
                        return <option key={item.id}>{item.name}</option>
                      })
                    }
                  </select>
                </div>
                <div className='col-md-3 mb-3'>
                  <label>SubCategory*</label>
                  <select name='subcategory' onChange={getInputData} className='form-control boredr-3 border-primary'>
                    {
                      SubCategoryStateData.filter(x => x.active).map((item) => {
                        return <option key={item.id}>{item.name}</option>
                      })
                    }
                  </select>
                </div>
                <div className='col-md-3 mb-3'>
                  <label>Brand*</label>
                  <select name='brand' onChange={getInputData} className='form-control boredr-3 border-primary'>
                    {
                      BrandStateData.filter(x => x.active).map((item) => {
                        return <option key={item.id}>{item.name}</option>
                      })
                    }
                  </select>
                </div>
                <div className='col-md-3 mb-3'>
                  <label>Stock*</label>
                  <select name='stock' className='form-control boredr-3 border-primary'>
                    <option value="1">yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                <div className='col-12 mb-3'>
                  <label>Color*</label>
                  <input type='text' name='color' onChange={getInputData} placeholder='Color Name' className={`form-control border-3 ${show && errormessage.color ? 'border-danger' : 'border-primary'}`} />
                  {show && errormessage.color ? <p className='text-danger text-capitalize'>{errormessage.color}</p> : null}
                </div>

                <div className='col-12 mb-3'>
                  <label>Size*</label>
                  <input type='text' name='size' onChange={getInputData} placeholder='Size Name' className={`form-control border-3 ${show && errormessage.size ? 'border-danger' : 'border-primary'}`} />
                  {show && errormessage.size ? <p className='text-danger text-capitalize'>{errormessage.size}</p> : null}
                </div>
                <div className='col-12 mb-3'>
                  <label>Base Prize*</label>
                  <input type='number' name='baseprize' onChange={getInputData} placeholder='Base Prize' className={`form-control border-3 ${show && errormessage.baseprize ? 'border-danger' : 'border-primary'}`} />
                  {show && errormessage.baseprize ? <p className='text-danger text-capitalize'>{errormessage.baseprize}</p> : null}
                </div>
                <div className='col-12 mb-3'>
                  <label>Discount*</label>
                  <input type='number' name='discount' onChange={getInputData} placeholder='Discount' className={`form-control border-3 ${show && errormessage.discount ? 'border-danger' : 'border-primary'}`} />
                  {show && errormessage.discount ? <p className='text-danger text-capitalize'>{errormessage.discount}</p> : null}
                </div>
                <div className='col-12 mb-3'>
                  <label>Description*</label>
                 <div ref={refdiv} className='border-3 border-primary'></div>
                </div>
                <div className='col-md-4 mb-3'>
                  <label>Stock Quantity*</label>
                  <input type='number' name='stockquantity' onChange={getInputData} placeholder='Discount' className={`form-control border-3 ${show && errormessage.stockquantity ? 'border-danger' : 'border-primary'}`} />
                  {show && errormessage.stockquantity ? <p className='text-danger text-capitalize'>{errormessage.stockquantity}</p> : null}
                </div>
                <div className='col-md-4 mb-3'>
                  <label>Pic*</label>
                  <input type='file' name='pic' multiple onChange={getInputData} className={`form-control border-3 ${show && errormessage.pic ? 'border-danger' : 'border-primary'}`} />
                  {show && errormessage.pic ? <p className='text-danger text-capitalize'>{errormessage.pic}</p> : null}
                </div>
                <div className='col-md-4 mb-3'>
                  <label>Active*</label>
                  <select name='active' onChange={getInputData} className='form-select border-3 border-primary'>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
                <div className='col-12 mb-3'>
                  <button type='submit' className='btn btn-primary w-100'>Create</button>

                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}
