import{CREATE_CART,UPDATE_CART,GET_CART,DELETE_CART} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createCart(data) {
  return {
    type:"CREATE_CART",
    payload:data
  }
}
export function updateCart(data) {
  return {
    type:"UPDATE_CART",
    payload:data
  }
}
export function getCart() {
  return {
    type:"GET_CART",
  }
}
export function deleteCart(data) {
  return {
    type:"DELETE_CART",
    payload:data
  }
}

