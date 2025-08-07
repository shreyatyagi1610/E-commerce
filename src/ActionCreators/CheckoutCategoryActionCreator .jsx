import {
  CREATE_CHECKOUT,
  UPDATE_CHECKOUT,
  GET_CHECKOUT,
  DELETE_CHECKOUT
} from "../Redux/Constant"

// CREATE
export function createCheckout(data) {
  return {
    type: CREATE_CHECKOUT,
    payload: data
  }
}

// UPDATE
export function updateCheckout(data) {
  return {
    type: UPDATE_CHECKOUT,
    payload: data
  }
}

// GET (no payload needed)
export function getCheckout() {
  return {
    type: GET_CHECKOUT
  }
}

// DELETE
export function deleteCheckout(data) {
  return {
    type: DELETE_CHECKOUT,
    payload: data
  }
}
