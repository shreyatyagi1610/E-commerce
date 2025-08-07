import{CREATE_SUBCATEGORY,UPDATE_SUBCATEGORY,GET_SUBCATEGORY,DELETE_SUBCATEGORY} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createSubCategory(data) {
  return {
    type:"CREATE_SUBCATEGORY",
    payload:data
  }
}
export function updateSubCategory(data) {
  return {
    type:"UPDATE_SUBCATEGORY",
    payload:data
  }
}
export function getSubCategory() {
  return {
    type:"GET_SUBCATEGORY",
  }
}
export function deleteSubCategory(data) {
  return {
    type:"DELETE_SUBCATEGORY",
    payload:data
  }
}

