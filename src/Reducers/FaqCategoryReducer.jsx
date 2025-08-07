import { CREATE_FAQ_RED, DELETE_FAQ_RED, GET_FAQ_RED, UPDATE_FAQ_RED } from "../Redux/Constant"

export default function FaqCategoryReducer(state=[],action) {
  switch(action.type){
    case CREATE_FAQ_RED:
        return[...state,action.payload]

    case GET_FAQ_RED:
    return action.payload || state

    case UPDATE_FAQ_RED:
        let index=state.findIndex(x=>x.id===action.payload.id)
        state[index].name=action.payload.name
        state[index].pic=action.payload.pic
        state[index].active=action.payload.active
        return state

    case DELETE_FAQ_RED:
        return state.filter(x=>x.id !==action.payload.id)

    default:
        return state;
  }
}
