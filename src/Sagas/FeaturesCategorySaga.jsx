import { CREATE_FEATURES, CREATE_FEATURES_RED, DELETE_FEATURES, DELETE_FEATURES_RED, GET_FEATURES, GET_FEATURES_RED, UPDATE_FEATURES, UPDATE_FEATURES_RED } from "../Redux/Constant"
// import{createSaga,getSaga,updateSaga,deleteSaga} from "./Services/index"
import{ put, takeEvery } from "redux-saga/effects"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services"

  function* createSaga(action){
    let response=yield createRecord("feature",action.payload)
    yield put({type:CREATE_FEATURES_RED,payload:response})
  }

  function* getSaga(){
    let response=yield getRecord("feature")
    yield put({type:GET_FEATURES_RED,payload:response})
  }
  function* updateSaga(action){
   let response= yield updateRecord("feature",action.payload)
    yield put({type:UPDATE_FEATURES_RED,payload:response})
  }
  function* deleteSaga(action){
    let response=yield deleteRecord("feature",action.payload)
    yield put({type:DELETE_FEATURES_RED,payload:response})
  }
  export default function* FeaturesSaga(){
    yield takeEvery(CREATE_FEATURES,createSaga)
    yield takeEvery(GET_FEATURES,getSaga)
    yield takeEvery(UPDATE_FEATURES,updateSaga)
    yield takeEvery(DELETE_FEATURES,deleteSaga)
  }