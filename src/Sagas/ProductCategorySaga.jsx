import { CREATE_PRODUCT, CREATE_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Redux/Constant"
import{ createRecord, getRecord, updateRecord, deleteRecord} from "./Services/index"
// import{createSaga,getSaga,updateSaga,deleteSaga, createRecord, getRecord, updateRecord, deleteRecord} from "./Services/index"
import{ put, takeEvery } from "redux-saga/effects"

  function* createSaga(action){
    let response=yield createRecord("Product",action.payload)
    yield put({type:CREATE_PRODUCT_RED,payload:response})
  }

  function* getSaga(){
    let response=yield getRecord("Product")
    yield put({type:GET_PRODUCT_RED,payload:response})
  }
  function* updateSaga(action){
   let response= yield updateRecord("Product",action.payload)
    yield put({type:UPDATE_PRODUCT_RED,payload:response})
  }
  function* deleteSaga(action){
    let response=yield deleteRecord("Product",action.payload)
    yield put({type:DELETE_PRODUCT_RED,payload:response})
  }
  export default function* ProductSaga(){
    yield takeEvery(CREATE_PRODUCT,createSaga)
    yield takeEvery(GET_PRODUCT,getSaga)
    yield takeEvery(UPDATE_PRODUCT,updateSaga)
    yield takeEvery(DELETE_PRODUCT,deleteSaga)
  }