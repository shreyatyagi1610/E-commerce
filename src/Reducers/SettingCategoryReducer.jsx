import { CREATE_SETTING_RED, DELETE_SETTING_RED, GET_SETTING_RED, UPDATE_SETTING_RED } from "../Redux/Constant"

export default function SettingCategoryReducer(state=[],action) {
  switch(action.type){
    case CREATE_SETTING_RED:
        return[...state,action.payload]

    case GET_SETTING_RED:
    return action.payload || state

    case UPDATE_SETTING_RED:
        let index=state.findIndex(x=>x.id===action.payload.id)
        state[index].name=action.payload.name
        state[index].pic=action.payload.pic
        state[index].active=action.payload.active
        return state

    case DELETE_SETTING_RED:
        return state.filter(x=>x.id !==action.payload.id)

    default:
        return state;
  }
}
