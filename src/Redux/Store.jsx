import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Rootreducer from "../Reducers/Rootreducer"
import Rootsaga from "../Sagas/Rootsaga"

const saga = createSagaMiddleware()
const store = configureStore({
    reducer: Rootreducer,
    middleware: () => [saga]
})
export default store
saga.run(Rootsaga)