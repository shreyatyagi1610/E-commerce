import React, { useEffect, useState } from 'react'
import Breadcrum from './Breadcrum'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, getCart } from '../../ActionCreators/CartActionCategory'
import { deleteProduct, getProduct, updateProduct } from "../../ActionCreators/ProductCategoryActionCreator"
// import { createCheckout } from "../../ActionCreators/CheckoutCategoryActionCreator"

export default function Cart({ title }) {
  const [mode, setMode] = useState("COD")
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const [shipping, setShipping] = useState(0)

  const CartCategoryStateData = useSelector(state => state.CartCategoryStateData)
  const ProductCategoryStateData = useSelector(state => state.ProductCategoryStateData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function placeOrder() {
    let item = {
      user: localStorage.getItem("userid"),
      orderStatus: "Order is Placed",
      paymentMode: mode,
      paymentStatus: "Pending",
      total: total,
      date: new Date(),
      Products: cart,
    }
    dispatch(createCheckout(item))
    cart.forEach(x => {
      let product = ProductCategoryStateData.find(p => p.id === x.Product)
      product.stockquantity = product.stockquantity - x.qty
      product.stock = product.stockquantity === 0 ? false : true
      dispatch(updateProduct({ ...product }))
      dispatch(deleteProduct({ id: x.id }))
    })
    navigate("/confirmation")
  }

  function deleteItem(id) {
    if (window.confirm("Are you sure to remove that item from cart?")) {
      dispatch(deleteCart({ id }))
      dispatch(getCart())
    }
  }

  function updateItem(id, option) {
    const updatedCart = [...cart]
    let index = updatedCart.findIndex(x => x.id === id)
    if (index === -1) return
    let item = updatedCart[index]

    if (option === "dec" && item.qty > 1) {
      item.qty -= 1
      item.total -= item.price
    } else if (option === "inc") {
      item.qty += 1
      item.total += item.price
    }

    updatedCart[index] = item
    setCart(updatedCart)
    calculation(updatedCart)
  }

  function calculation(cartItems) {
    let sub = cartItems.reduce((acc, item) => acc + item.total, 0)
    setSubtotal(sub)
    if (sub > 0 && sub < 1000) {
      setShipping(150)
      setTotal(sub + 150)
    } else {
      setShipping(0)
      setTotal(sub)
    }
  }

  function getApiData() {
    dispatch(getCart())
  }

  useEffect(() => {
    getApiData()
  }, [])

  useEffect(() => {
    const userCart = CartCategoryStateData.filter(x => x.user === localStorage.getItem("userid"))
    setCart(userCart)
    calculation(userCart)
  }, [CartCategoryStateData])

  useEffect(() => {
    dispatch(getProduct())
  }, [])

  return (
    <>
      {/* <Breadcrum title="Cart" /> */}
      <div className="container my-3">
        {
          cart.length > 0 ?
            <>
              <h5 className='bg-primary text-center p-2 text-light'>Products in Cart</h5>
              <div className="table-responsive">
                <table className='table table-bordered table-striped table-hover'>
                  <thead>
                    <tr>
                      {title !== "checkout" && <th>Image</th>}
                      <th>Name</th>
                      <th>Brand</th>
                      <th>Color</th>
                      <th>Size</th>
                      <th>Price</th>
                      {title !== "checkout" && <th>Stock</th>}
                      <th>Qty</th>
                      <th>Total</th>
                      {title !== "checkout" && <th>Actions</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map(item => (
                        <tr key={item.id}>
                          {title !== "checkout" &&
                            <td>
                              <img
                                src={`${import.meta.env.VITE_SITE_BACKEND_SERVER}${item.pic}`}
                                alt={item.name}
                                height={80}
                                width={100}
                              />
                            </td>
                          }
                          <td>{item.name}</td>
                          <td>{item.brand}</td>
                          <td>{item.color}</td>
                          <td>{item.size}</td>
                          <td>&#8377;{item.price}</td>
                          {title !== "checkout" &&
                            <td>{item.stockquantity > 0 ? `${item.stockquantity} Left` : "Out of Stock"}</td>
                          }
                          <td>
                            {
                              title === "checkout" ? (
                                item.qty
                              ) : (
                                <div className="btn-group">
                                  <button className='btn btn-primary' onClick={() => updateItem(item.id, "dec")}><i className='fa fa-minus'></i></button>
                                  <span className='mx-2'>{item.qty}</span>
                                  <button className='btn btn-primary' onClick={() => updateItem(item.id, "inc")}><i className='fa fa-plus'></i></button>
                                </div>
                              )
                            }
                          </td>
                          <td>&#8377;{item.total}</td>
                          {title !== "checkout" &&
                            <td>
                              <button className='btn btn-danger' onClick={() => deleteItem(item.id)}>
                                <i className='fa fa-trash'></i>
                              </button>
                            </td>
                          }
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>

              <div className="row">
                <div className={`${title === "checkout" ? "col-12" : "col-md-6 offset-md-6"} mb-3`}>
                  <div className="table-responsive">
                    <table className='table table-bordered'>
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td>&#8377;{subtotal}</td>
                        </tr>
                        <tr>
                          <th>Shipping</th>
                          <td>&#8377;{shipping}</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td>&#8377;{total}</td>
                        </tr>
                        {
                          title === "checkout" &&
                          <tr>
                            <th>Payment Mode</th>
                            <td>
                              <select name='mode' className='form-select border-3 border-primary' onChange={(e) => setMode(e.target.value)}>
                                <option value="COD">COD</option>
                                <option value="Net Banking" disabled>Net Banking/UPI/Credit Card</option>
                              </select>
                            </td>
                          </tr>
                        }
                        <tr>
                          <th colSpan={2}>
                            {
                              title === "cart" ?
                                <Link to="/checkout" className='btn btn-primary w-100'>Proceed to Checkout</Link> :
                                <button className='btn btn-primary w-100' onClick={placeOrder}>Place Order</button>
                            }
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
            :
            <div className="text-center my-2">
              <h3>No Item In Cart</h3>
              <Link to="/shop" className='btn btn-primary'>Shop Now</Link>
            </div>
        }
      </div>
    </>
  )
}
