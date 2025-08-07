import { CREATE_SETTING, CREATE_SETTING_RED, DELETE_SETTING, DELETE_SETTING_RED, GET_SETTING, GET_SETTING_RED, UPDATE_SETTING, UPDATE_SETTING_RED } from "../Redux/Constant"
// import{createSaga,getSaga,updateSaga,deleteSaga} from "./Services/index"
import{ put, takeEvery } from "redux-saga/effects"
import { createRecord,deleteRecord, getRecord, updateRecord } from "./Services"

  function* createSaga(action){
    let response=yield createRecord("Settings",action.payload)
    yield put({type:CREATE_SETTING_RED,payload:response})
  }

  function* getSaga(){
    let response=yield getRecord("Settings")
    yield put({type:GET_SETTING_RED,payload:response})
  }
  function* updateSaga(action){
   let response= yield updateRecord("Settings",action.payload)
    yield put({type:UPDATE_SETTING_RED,payload:response})
  }
  function* deleteSaga(action){
    let response=yield deleteRecord("Settings",action.payload)
    yield put({type:DELETE_SETTING_RED,payload:response})
  }
  export default function* SettingSaga(){
    yield takeEvery(CREATE_SETTING,createSaga)
    yield takeEvery(GET_SETTING,getSaga)
    yield takeEvery(UPDATE_SETTING,updateSaga)
    yield takeEvery(DELETE_SETTING,deleteSaga)
  }