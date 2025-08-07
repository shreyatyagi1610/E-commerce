import { CREATE_TESTIMONIAL, CREATE_TESTIMONIAL_RED, DELETE_TESTIMONIAL, DELETE_TESTIMONIAL_RED, GET_TESTIMONIAL, GET_TESTIMONIAL_RED, UPDATE_TESTIMONIAL, UPDATE_TESTIMONIAL_RED } from "../Redux/Constant"
// import{createSaga,getSaga,updateSaga,deleteSaga} from "./Services/index"
import{ put, takeEvery } from "redux-saga/effects"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services"

  function* createSaga(action){
    let response=yield createRecord("Testimonial",action.payload)
    yield put({type:CREATE_TESTIMONIAL_RED,payload:response})
  }

  function* getSaga(){
    let response=yield getRecord("Testimonial")
    yield put({type:GET_TESTIMONIAL_RED,payload:response})
  }
  function* updateSaga(action){
   let response= yield updateRecord("Testimonial",action.payload)
    yield put({type:UPDATE_TESTIMONIAL_RED,payload:response})
  }
  function* deleteSaga(action){
    let response=yield deleteRecord("Testimonial",action.payload)
    yield put({type:DELETE_TESTIMONIAL_RED,payload:response})
  }
  export default function* TestimonialSaga(){
    yield takeEvery(CREATE_TESTIMONIAL,createSaga)
    yield takeEvery(GET_TESTIMONIAL,getSaga)
    yield takeEvery(UPDATE_TESTIMONIAL,updateSaga)
    yield takeEvery(DELETE_TESTIMONIAL,deleteSaga)
  }