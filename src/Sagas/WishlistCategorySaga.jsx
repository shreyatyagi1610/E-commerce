import { CREATE_WISHLIST, CREATE_WISHLIST_RED, DELETE_WISHLIST, DELETE_WISHLIST_RED, GET_WISHLIST, GET_WISHLIST_RED, UPDATE_WISHLIST, UPDATE_WISHLIST_RED } from "../Redux/Constant"
// import{createSaga,getSaga,updateSaga,deleteSaga} from "./Services/index"
import{ put, takeEvery } from "redux-saga/effects"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services"

  function* createSaga(action){
    let response=yield createRecord("wishlist",action.payload)
    yield put({type:CREATE_WISHLIST_RED,payload:response})
  }

  function* getSaga(){
    let response=yield getRecord("wishlist")
    yield put({type:GET_WISHLIST_RED,payload:response})
  }
  function* updateSaga(action){
   let response= yield updateRecord("wishlist",action.payload)
    yield put({type:UPDATE_WISHLIST_RED,payload:response})
  }
  function* deleteSaga(action){
    let response=yield deleteRecord("wishlist",action.payload)
    yield put({type:DELETE_WISHLIST_RED,payload:response})
  }
  export default function* WishlistSaga(){
    yield takeEvery(CREATE_WISHLIST,createSaga)
    yield takeEvery(GET_WISHLIST,getSaga)
    yield takeEvery(UPDATE_WISHLIST,updateSaga)
    yield takeEvery(DELETE_WISHLIST,deleteSaga)
  }