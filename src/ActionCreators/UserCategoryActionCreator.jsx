import{CREATE_USER,UPDATE_USER,GET_USER,DELETE_USER} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createUser(data) {
  return {
    type:"CREATE_USER",
    payload:data
  }
}
export function updateUser(data) {
  return {
    type:"UPDATE_USER",
    payload:data
  }
}
export function getUser() {
  return {
    type:"GET_USER",
  }
}
export function deleteUser(data) {
  return {
    type:"DELETE_USER",
    payload:data
  }
}

