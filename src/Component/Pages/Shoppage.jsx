import React, { useEffect, useState } from 'react'
import Breadcrum from './Breadcrum'
import { getBrand } from "../../ActionCreators/BrandCategoryActionCreator"
import { getProduct } from "../../ActionCreators/ProductCategoryActionCreator"
import { getMaincategory } from "../../ActionCreators/MainCategoryActionCreator"
import { getSubCategory } from "../../ActionCreators/SubCategoryActionCreator"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'

export default function Shoppage() {
  let [data, setData] = useState([])
  let [mc, setMc] = useState("")
  let [sc, setSc] = useState("")
  let [br, setBr] = useState("")
  let [searchParams] = useSearchParams()
  let [sort, setSort] = useState("1")
  let [search, setSearch] = useState("")
  let[min,setMin]=useState(-1)
  let[max,setMax]=useState(-1)

  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  let SubCategoryStateData = useSelector(state => state.SubCategoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)
  let ProductCategoryStateData = useSelector(state => state.ProductCategoryStateData)
  let dispatch = useDispatch()

  function filterProduct(mc, sc, br) {
    setData(ProductCategoryStateData.filter(x => x.active &&
      (mc === "All" || x.maincategory === mc) &&
      (sc === "All" || x.subcategory === sc) &&
      (br === "All" || x.brand === br) &&
      (min===-1 || (x.finalprize >= min && x.finalprize <=max))
    ))
  }

  function Postsortfilter(e) {
    let value = e.target.value
    let sortedData = [...data]

    if (value === "1")
      sortedData.sort((x, y) => y.id - x.id)
    else if (value === "2")
      sortedData.sort((x, y) => y.finalprize - x.finalprize)
    else
      sortedData.sort((x, y) => x.finalprize - y.finalprize)

    setData(sortedData)
    setSort(value)
  }

  function postsearch(e) {
    e.preventDefault()
    setData(ProductCategoryStateData.filter(x =>
      x.active && (
        x.name?.toLowerCase().includes(search.toLowerCase()) ||
        x.maincategory?.toLowerCase() === search.toLowerCase() ||
        x.subcategory?.toLowerCase() === search.toLowerCase() ||
        x.brand?.toLowerCase() === search.toLowerCase() ||
        x.color?.toLowerCase().includes(search.toLowerCase()) ||
        x.description?.toLowerCase().includes(search.toLowerCase())
      )
    ))
  }

  useEffect(() => {
    dispatch(getMaincategory())
  }, [dispatch])

  useEffect(() => {
    dispatch(getSubCategory())
  }, [dispatch])

  useEffect(() => {
    dispatch(getBrand())
  }, [dispatch])

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  useEffect(() => {
    if (ProductCategoryStateData.length) {
      setData(ProductCategoryStateData.filter(x => x.active))
    }
  }, [ProductCategoryStateData])

  useEffect(() => {
    setSearch("")
    let mcParam = searchParams.get("mc") || "All"
    let scParam = searchParams.get("sc") || "All"
    let brParam = searchParams.get("br") || "All"

    setMc(mcParam)
    setSc(scParam)
    setBr(brParam)
    filterProduct(mcParam, scParam, brParam)
  }, [searchParams, ProductCategoryStateData])

  return (
    <>
      <Breadcrum title='shop' />

      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            {/* Main Category */}
            <div className="list-group mb-3">
              <p className="list-group-item list-group-item-action active">Maincategory</p>
              <Link to={`/shop?mc=All&sc=${sc}&br=${br}`} className="list-group-item list-group-item-action">
                All {mc === "All" && <i className='fa fa-check text-primary float-end'></i>}
              </Link>
              {
                MaincategoryStateData.filter(x => x.active).map(item => (
                  <Link key={item.id} to={`/shop?mc=${item.name}&sc=${sc}&br=${br}`} className="list-group-item list-group-item-action">
                    {item.name} {mc === item.name && <i className='fa fa-check text-primary float-end'></i>}
                  </Link>
                ))
              }
            </div>

            {/* Subcategory */}
            <div className="list-group mb-3">
              <p className="list-group-item list-group-item-action active">Subcategory</p>
              <Link to={`/shop?mc=${mc}&sc=All&br=${br}`} className="list-group-item list-group-item-action">
                All {sc === "All" && <i className='fa fa-check text-primary float-end'></i>}
              </Link>
              {
                SubCategoryStateData.filter(x => x.active).map(item => (
                  <Link key={item.id} to={`/shop?mc=${mc}&sc=${item.name}&br=${br}`} className="list-group-item list-group-item-action">
                    {item.name} {sc === item.name && <i className='fa fa-check text-primary float-end'></i>}
                  </Link>
                ))
              }
            </div>

            {/* Brand */}
            <div className="list-group mb-3">
              <p className="list-group-item list-group-item-action active">Brand</p>
              <Link to={`/shop?mc=${mc}&sc=${sc}&br=All`} className="list-group-item list-group-item-action">
                All {br === "All" && <i className='fa fa-check text-primary float-end'></i>}
              </Link>
              {
                BrandStateData.filter(x => x.active).map(item => (
                  <Link key={item.id} to={`/shop?mc=${mc}&sc=${sc}&br=${item.name}`} className="list-group-item list-group-item-action">
                    {item.name} {br === item.name && <i className='fa fa-check text-primary float-end'></i>}
                  </Link>
                ))
              }
            </div>
          </div>

          {/* Products Area */}
          <div className='list-group  w-50 mb-3'>
              <p className="list-group-item list-group-item-action active" aria-current="true">Price Range</p>
            <form onSubmit={(e)=>{
              e.preventDefault()
              if(search !=="")
                postsearch(e)
              else
              filterProduct(mc,sc,br)
            }}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type='number' name='min' onChange={(e)=>setMin(e.target.value)} value={min} placeholder='Min Amount' className='form-control border-3 border-primary'/>
                </div>
                <div className="col-md-6 mb-3">
                  <input type='number' name='max' onChange={(e)=>setMax(e.target.value)} value={max} placeholder='Max Amount' className='form-control border-3 border-primary'/>
                </div>
              </div>
              <div className="btn-group w-50 mb-3">
                <button type='button' onClick={()=>{
                  setMin(-1)
                  setMax(-1)
                }} className='btn btn-danger'>Reset</button>
                <button type='submit' className='btn btn-primary w-100'>Apply Filters</button>
              </div>
            </form>

          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-9 mb-3">
                <form onSubmit={postsearch}>
                  <div className='btn-group w-100'>
                    <input
                      type='search'
                      name='search'
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                      placeholder='Search Product by name, category, brand, color etc'
                      className='form-control border-3 border-primary rounded-0 rounded-start'
                    />
                    <button type='submit' className='btn btn-primary'>Search</button>
                  </div>
                </form>
              </div>
              <div className="col-md-3 mb-3">
                <select name='sort' value={sort} onChange={Postsortfilter} className='form-select border-3 border-primary'>
                  <option value="1">Latest</option>
                  <option value="2">Price : High to Low</option>
                  <option value="3">Price : Low to High</option>
                </select>
              </div>
            </div>

            <div className="row">
              {
                data.map(item => (
                  <div key={item?.id} className="col-md-6 col-lg-4">
                    <div className="service-item">
                      <div className="service-img">
                        <img src={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${item.pic}`} height={250} className="rounded-top w-100" alt="Product" />
                      </div>
                      <div className='btn-group w-100'>
                        <h6 className='bg-primary text-center w-50 p-2 text-light'>{item.brand}</h6>
                        <h6 className='bg-success text-center w-50 p-2 text-light'>{item.stockquantity} left in stock</h6>
                      </div>
                      <div className="rounded-bottom p-4">
                        <Link to={`/product/${item.id}`} className="h4 d-inline-block mb-4">{item.name}</Link>
                        <p className="mb-4">
                          <del className='text-danger'>&#8377;{item.baseprize}</del>
                          <span className='fs-5 ms-2'>&#8377;{item.finalprize}</span>
                          <sup className='fs-5 ms-2 fw-bold'>{item.discount}% off</sup>
                        </p>
                        <Link className="btn btn-primary rounded-pill py-2 px-4 w-100" to={`/product/${item.id}`}>Add to Cart</Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
