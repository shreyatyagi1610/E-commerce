import{CREATE_FEATURES,UPDATE_FEATURES,GET_FEATURES,DELETE_FEATURES} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createFeatures(data) {
  return {
    type:"CREATE_FEATURES",
    payload:data
  }
}
export function updateFeatures(data) {
  return {
    type:"UPDATE_FEATURES",
    payload:data
  }
}
export function getFeatures() {
  return {
    type:"GET_FEATURES",
  }
}
export function deleteFeatures(data) {
  return {
    type:"DELETE_FEATURES",
    payload:data
  }
}

