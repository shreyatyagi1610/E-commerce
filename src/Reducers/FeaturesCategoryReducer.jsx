import { CREATE_FEATURES_RED, DELETE_FEATURES_RED, GET_FEATURES_RED, UPDATE_FEATURES_RED } from "../Redux/Constant"

export default function FeaturesCategoryReducer(state=[],action) {
  switch(action.type){
    case CREATE_FEATURES_RED:
        return[...state,action.payload]

    case GET_FEATURES_RED:
    return action.payload || state

    case UPDATE_FEATURES_RED:
        let index=state.findIndex(x=>x.id===action.payload.id)
        state[index].name=action.payload.name
        state[index].pic=action.payload.pic
        state[index].active=action.payload.active
       return state
       
    case DELETE_FEATURES_RED:
        return state.filter(x=>x.id !==action.payload.id)

    default:
        return state;
  }
}
