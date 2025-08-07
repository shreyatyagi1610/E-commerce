import { CREATE_BRAND, CREATE_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Redux/Constant"
// import{createSaga,getSaga,updateSaga,deleteSaga} from "./Services/index"
import{ put, takeEvery } from "redux-saga/effects"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services"

  function* createSaga(action){
    let response=yield createRecord("brand",action.payload)
    yield put({type:CREATE_BRAND_RED,payload:response})
  }

  function* getSaga(){
    let response=yield getRecord("brand")
    yield put({type:GET_BRAND_RED,payload:response})
  }
  function* updateSaga(action){
   let response= yield updateRecord("brand",action.payload)
    yield put({type:UPDATE_BRAND_RED,payload:response})
  }
  function* deleteSaga(action){
    let response=yield deleteRecord("brand",action.payload)
    yield put({type:DELETE_BRAND_RED,payload:response})
  }
  export default function* BrandSaga(){
    yield takeEvery(CREATE_BRAND,createSaga)
    yield takeEvery(GET_BRAND,getSaga)
    yield takeEvery(UPDATE_BRAND,updateSaga)
    yield takeEvery(DELETE_BRAND,deleteSaga)
  }