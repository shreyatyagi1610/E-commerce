import{CREATE_SETTING,UPDATE_SETTING,GET_SETTING,DELETE_SETTING} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createSetting(data) {
  return {
    type:"CREATE_SETTING",
    payload:data
  }
}
export function updateSetting(data) {
  return {
    type:"UPDATE_SETTING",
    payload:data
  }
}
export function getSetting() {
  return {
    type:"GET_SETTING",
  }
}
export function deleteSetting(data) {
  return {
    type:"DELETE_SETTING",
    payload:data
  }
}

