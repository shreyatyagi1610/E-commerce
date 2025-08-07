import { CREATE_WISHLIST_RED, DELETE_WISHLIST_RED, GET_WISHLIST_RED, UPDATE_WISHLIST_RED } from "../Redux/Constant"

export default function WishlistReducer(state=[],action) {
  switch(action.type){
    case CREATE_WISHLIST_RED:
        return[...state,action.payload]

    case GET_WISHLIST_RED:
    return action.payload || state

    case UPDATE_WISHLIST_RED:
        let index=state.findIndex(x=>x.id===action.payload.id)
        state[index].name=action.payload.name
        state[index].pic=action.payload.pic
        state[index].active=action.payload.active
        return state

    case DELETE_WISHLIST_RED:
        return state.filter(x=>x.id !==action.payload.id)

    default:
        return state;
  }
}
