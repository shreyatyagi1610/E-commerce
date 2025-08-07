import React, { useEffect, useState } from 'react'
import Breadcrum from './Breadcrum'
import Profile from '../Profile'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlist, getWishlist } from '../../ActionCreators/WishlistCategoryActionCreator'
import { Link } from 'react-router-dom'

export default function ProfilePage() {
  const [wishlist, setWishlist] = useState([])
  const WishlistCategoryStateData = useSelector(state => state.WishlistCategoryStateData)
  const dispatch = useDispatch()

  function deleteItem(id) {
    if (confirm("Are you sure to remove that item from wishlist?")) {
      dispatch(deleteWishlist({ id }))
      dispatch(getWishlist())
    }
  }

  useEffect(() => {
    dispatch(getWishlist())
  }, [dispatch])

  useEffect(() => {
    const userId = localStorage.getItem("userid")
    if (WishlistCategoryStateData.length && userId)
      setWishlist(WishlistCategoryStateData.filter(x => x.user === userId))
    else
      setWishlist([])
  }, [WishlistCategoryStateData])

  return (
    <>
      <Breadcrum title="Your Profile" />
      <div className="container my-3">
        <Profile title="Buyer" />
        <h5 className='bg-primary text-center text-light p-2'>Wishlist Section</h5>
        {
          wishlist.length ? (
            <div className="table-responsive">
              <table className='table table-bordered table-striped table-hover'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Add to Cart</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    wishlist.map(item => (
                      <tr key={item.id}>
                        <td>
                          <a href={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${item.pic}`} target='_blank' rel='noreferrer'>
                            <img src={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${item.pic}`} height={80} width={100} alt={item.name} />
                          </a>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.brand}</td>
                        <td>{item.color}</td>
                        <td>{item.size}</td>
                        <td>{item.finalprize}</td>
                        <td>{item.stockquantity ? `${item.stockquantity} Left in stock` : "Out of Stock"}</td>
                        <td>
                          <Link to={`/product/${item.Product}`} className='btn btn-primary'>
                            <i className='fa fa-shopping-cart'></i>
                          </Link>
                        </td>
                        <td>
                          <button className='btn btn-danger' onClick={() => deleteItem(item.id)}>
                            <i className='fa fa-trash'></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center my-2">
              <h3>No Item In Wishlist</h3>
              <Link to="/shop" className='btn btn-primary'>Shop Now</Link>
            </div>
          )
        }
      </div>
    </>
  )
}
