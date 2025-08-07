import{CREATE_PRODUCT,UPDATE_PRODUCT,GET_PRODUCT,DELETE_PRODUCT} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createProduct(data) {
  return {
    type:"CREATE_PRODUCT",
    payload:data
  }
}
export function updateProduct(data) {
  return {
    type:"UPDATE_PRODUCT",
    payload:data
  }
}
export function getProduct() {
  return {
    type:"GET_PRODUCT",
  }
}
export function deleteProduct(data) {
  return {
    type:"DELETE_PRODUCT",
    payload:data
  }
}

