import{CREATE_BRAND,UPDATE_BRAND,GET_BRAND,DELETE_BRAND} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createBrand(data) {
  return {
    type:"CREATE_BRAND",
    payload:data
  }
}
export function updateBrand(data) {
  return {
    type:"UPDATE_BRAND",
    payload:data
  }
}
export function getBrand() {
  return {
    type:"GET_BRAND",
  }
}
export function deleteBrand(data) {
  return {
    type:"DELETE_BRAND",
    payload:data
  }
}

