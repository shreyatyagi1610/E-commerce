import { CREATE_FAQ, CREATE_FAQ_RED, DELETE_FAQ, DELETE_FAQ_RED, GET_FAQ, GET_FAQ_RED, UPDATE_FAQ, UPDATE_FAQ_RED } from "../Redux/Constant"
// import{createSaga,getSaga,updateSaga,deleteSaga} from "./Services/index"
import{ put, takeEvery } from "redux-saga/effects"
import { deleteRecord, getRecord, updateRecord } from "./Services"

  function* createSaga(action){
    let response=yield createSaga("faq",action.payload)
    yield put({type:CREATE_FAQ_RED,payload:response})
  }

  function* getSaga(){
    let response=yield getRecord("faq")
    yield put({type:GET_FAQ_RED,payload:response})
  }
  function* updateSaga(action){
   let response= yield updateRecord("faq",action.payload)
    yield put({type:UPDATE_FAQ_RED,payload:response})
  }
  function* deleteSaga(action){
    let response=yield deleteRecord("faq",action.payload)
    yield put({type:DELETE_FAQ_RED,payload:response})
  }
  export default function* FaqSaga(){
    yield takeEvery(CREATE_FAQ,createSaga)
    yield takeEvery(GET_FAQ,getSaga)
    yield takeEvery(UPDATE_FAQ,updateSaga)
    yield takeEvery(DELETE_FAQ,deleteSaga)
  }