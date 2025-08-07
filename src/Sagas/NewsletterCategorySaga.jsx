import { CREATE_NEWSLETTER, CREATE_NEWSLETTER_RED, DELETE_NEWSLETTER, DELETE_NEWSLETTER_RED, GET_NEWSLETTER, GET_NEWSLETTER_RED, UPDATE_NEWSLETTER, UPDATE_NEWSLETTER_RED } from "../Redux/Constant"
// import{createSaga,getSaga,updateSaga,deleteSaga} from "./Services/index"
import{ put, takeEvery } from "redux-saga/effects"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services"

  function* createSaga(action){
    let response=yield createRecord("newsletter",action.payload)
    yield put({type:CREATE_NEWSLETTER_RED,payload:response})
  }

  function* getSaga(){
    let response=yield getRecord("newsletter")
    yield put({type:GET_NEWSLETTER_RED,payload:response})
  }
  function* updateSaga(action){
   let response= yield updateRecord("newsletter",action.payload)
    yield put({type:UPDATE_NEWSLETTER_RED,payload:response})
  }
  function* deleteSaga(action){
    let response=yield deleteRecord("newsletter",action.payload)
    yield put({type:DELETE_NEWSLETTER_RED,payload:response})
  }
  export default function* NewsletterSaga(){
    yield takeEvery(CREATE_NEWSLETTER,createSaga)
    yield takeEvery(GET_NEWSLETTER,getSaga)
    yield takeEvery(UPDATE_NEWSLETTER,updateSaga)
    yield takeEvery(DELETE_NEWSLETTER,deleteSaga)
  }