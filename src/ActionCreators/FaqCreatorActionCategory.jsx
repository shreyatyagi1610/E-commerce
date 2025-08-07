import{CREATE_FAQ,UPDATE_FAQ,GET_FAQ,DELETE_FAQ} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createFaq(data) {
  return {
    type:"CREATE_FAQ",
    payload:data
  }
}
export function updateFaq(data) {
  return {
    type:"UPDATE_FAQ",
    payload:data
  }
}
export function getFaq() {
  return {
    type:"GET_FAQ",
  }
}
export function deleteFaq(data) {
  return {
    type:"DELETE_FAQ",
    payload:data
  }
}



