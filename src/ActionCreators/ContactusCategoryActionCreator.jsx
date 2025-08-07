import{CREATE_CONTACTUS,UPDATE_CONTACTUS,GET_CONTACTUS,DELETE_CONTACTUS} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createContactus(data) {
  return {
    type:"CREATE_CONTACTUS",
    payload:data
  }
}
export function updateContactus(data) {
  return {
    type:"UPDATE_CONTACTUS",
    payload:data
  }
}
export function getContactus() {
  return {
    type:"GET_CONTACTUS",
  }
}
export function deleteContactus(data) {
  return {
    type:"DELETE_CONTACTUS",
    payload:data
  }
}

