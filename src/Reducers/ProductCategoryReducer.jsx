import { CREATE_PRODUCT_RED, DELETE_PRODUCT_RED, GET_PRODUCT_RED, UPDATE_PRODUCT_RED } from "../Redux/Constant"

export default function ProductCategoryReducer(state=[],action) {
  switch(action.type){
    case CREATE_PRODUCT_RED:
        return[...state,action.payload]

    case GET_PRODUCT_RED:
    return action.payload || state

    case UPDATE_PRODUCT_RED:
        let index=state.findIndex(x=>x.id===action.payload.id)
        state[index].name=action.payload.name
        state[index].maincategory=action.payload.maincategory
        state[index].subcategory=action.payload.subcategory
        state[index].brand=action.payload.brand
        state[index].color=action.payload.color
        state[index].size=action.payload.size
        state[index].baseprize=action.payload.baseprize
        state[index].discount=action.payload.discount
        state[index].finalprize=action.payload.finalprize
        state[index].stock=action.payload.stock
        state[index].stockquantity=action.payload.stockquantity
        state[index].pic=action.payload.pic
        state[index].active=action.payload.active
        return state

    case DELETE_PRODUCT_RED:
        return state.filter(x=>x.id !==action.payload.id)

    default:
        return state;
  }
}
