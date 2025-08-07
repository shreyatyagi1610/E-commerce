import { CREATE_SUBCATEGORY, CREATE_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from "../Redux/Constant"
// import{createSaga,getSaga,updateSaga,deleteSaga} from "./Services/index"
import{ put, takeEvery } from "redux-saga/effects"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services"

  function* createSaga(action){
    let response=yield createRecord("subcategory",action.payload)
    yield put({type:CREATE_SUBCATEGORY_RED,payload:response})
  }

  function* getSaga(){
    let response=yield getRecord("subcategory")
    yield put({type:GET_SUBCATEGORY_RED,payload:response})
  }
  function* updateSaga(action){
   let response= yield updateRecord("subcategory",action.payload)
    yield put({type:UPDATE_SUBCATEGORY_RED,payload:response})
  }
  function* deleteSaga(action){
    let response=yield deleteRecord("subcategory",action.payload)
    yield put({type:DELETE_SUBCATEGORY_RED,payload:response})
  }
  export default function* SubCategorySaga(){
    yield takeEvery(CREATE_SUBCATEGORY,createSaga)
    yield takeEvery(GET_SUBCATEGORY,getSaga)
    yield takeEvery(UPDATE_SUBCATEGORY,updateSaga)
    yield takeEvery(DELETE_SUBCATEGORY,deleteSaga)
  }