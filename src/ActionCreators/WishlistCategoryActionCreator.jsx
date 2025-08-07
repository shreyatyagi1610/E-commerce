import{CREATE_WISHLIST,UPDATE_WISHLIST,GET_WISHLIST,DELETE_WISHLIST} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createWishlist(data) {
  return {
    type:"CREATE_WISHLIST",
    payload:data
  }
}
export function updateWishlist(data) {
  return {
    type:"UPDATE_WISHLIST",
    payload:data
  }
}
export function getWishlist() {
  return {
    type:"GET_WISHLIST",
  }
}
export function deleteWishlist(data) {
  return {
    type:"DELETE_WISHLIST",
    payload:data
  }
}

