import { CREATE_CONTACTUS, CREATE_CONTACTUS_RED, DELETE_CONTACTUS, DELETE_CONTACTUS_RED, GET_CONTACTUS, GET_CONTACTUS_RED, UPDATE_CONTACTUS, UPDATE_CONTACTUS_RED } from "../Redux/Constant"
// import{createSaga,getSaga,updateSaga,deleteSaga} from "./Services/index"
import{ put, takeEvery } from "redux-saga/effects"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services"

  function* createSaga(action){
    let response=yield createRecord("contactus",action.payload)
    yield put({type:CREATE_CONTACTUS_RED,payload:response})
  }

  function* getSaga(){
    let response=yield getRecord("contactus")
    yield put({type:GET_CONTACTUS_RED,payload:response})
  }
  function* updateSaga(action){
   let response= yield updateRecord("contactus",action.payload)
    yield put({type:UPDATE_CONTACTUS_RED,payload:response})
  }
  function* deleteSaga(action){
    let response=yield deleteRecord("contactus",action.payload)
    yield put({type:DELETE_CONTACTUS_RED,payload:response})
  }
  export default function* ContactusSaga(){
    yield takeEvery(CREATE_CONTACTUS,createSaga)
    yield takeEvery(GET_CONTACTUS,getSaga)
    yield takeEvery(UPDATE_CONTACTUS,updateSaga)
    yield takeEvery(DELETE_CONTACTUS,deleteSaga)
  }