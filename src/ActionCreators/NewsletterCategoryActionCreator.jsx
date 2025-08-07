import{CREATE_NEWSLETTER,UPDATE_NEWSLETTER,GET_NEWSLETTER,DELETE_NEWSLETTER} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function CREATE_Newsletter(data) {
  return {
    type:"CREATE_Newsletter",
    payload:data
  }
}
export function updateNewsletter(data) {
  return {
    type:"UPDATE_NEWSLETTER",
    payload:data
  }
}
export function getNewsletter() {
  return {
    type:"GET_NEWSLETTER",
  }
}
export function deleteNewsletter(data) {
  return {
    type:"DELETE_NEWSLETTER",
    payload:data
  }
}

