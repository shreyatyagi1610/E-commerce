import { CREATE_MAINCATEGORY, CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../Redux/Constant"
// import{createSaga,getSaga,updateSaga,deleteSaga, createRecord, getRecord, updateRecord, deleteRecord} from "./Services/index"
import{createRecord, getRecord, updateRecord, deleteRecord} from "./Services/index"
// import{createMultiSaga,getSaga,updateMultiSaga,deleteSaga} from "./Services/index"
import{ put, takeEvery } from "redux-saga/effects"

  function* createSaga(action){
    let response=yield createRecord("Maincategory",action.payload)
    yield put({type:CREATE_MAINCATEGORY_RED,payload:response})
  
    // let response=yield createMultiSaga("Maincategory",action.payload)
    // yield put({type:CREATE_MAINCATEGORY_RED,payload:response})
  }

  function* getSaga(){
    let response=yield getRecord("Maincategory")
    yield put({type:GET_MAINCATEGORY_RED,payload:response})
  }
  function* updateSaga(action){
   yield updateRecord("Maincategory",action.payload)
    yield put({type:UPDATE_MAINCATEGORY_RED,payload:action.payload})

    // let response= yield updateMultiSaga("Maincategory",action.payload)
    // yield put({type:UPDATE_MAINCATEGORY_RED,payload:response})
  }
  function* deleteSaga(action){
    let response=yield deleteRecord("Maincategory",action.payload)
    yield put({type:DELETE_MAINCATEGORY_RED,payload:response})
  }
  export default function* MaincategorySaga(){
    yield takeEvery(CREATE_MAINCATEGORY,createSaga)
    yield takeEvery(GET_MAINCATEGORY,getSaga)
    yield takeEvery(UPDATE_MAINCATEGORY,updateSaga)
    yield takeEvery(DELETE_MAINCATEGORY,deleteSaga)
  }