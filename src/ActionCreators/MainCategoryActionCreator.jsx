import{CREATE_MAINCATEGORY,UPDATE_MAINCATEGORY,GET_MAINCATEGORY,DELETE_MAINCATEGORY} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createMaincategory(data) {
  return {
    type:"CREATE_MAINCATEGORY",
    payload:data
  }
}
export function updateMaincategory(data) {
  return {
    type:"UPDATE_MAINCATEGORY",
    payload:data
  }
}
export function getMaincategory() {
  return {
    type:"GET_MAINCATEGORY",
  }
}
export function deleteMaincategory(data) {
  return {
    type:"DELETE_MAINCATEGORY",
    payload:data
  }
}

