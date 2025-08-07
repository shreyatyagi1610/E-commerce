import{CREATE_TESTIMONIAL,UPDATE_TESTIMONIAL,GET_TESTIMONIAL,DELETE_TESTIMONIAL} from "../Redux/Constant"
import { getRecord } from "../Sagas/Services"

export function createTestimonial(data) {
  return {
    type:"CREATE_TESTIMONIAL",
    payload:data
  }
}
export function updateTestimonial(data) {
  return {
    type:"UPDATE_TESTIMONIAL",
    payload:data
  }
}
export function getTestimonial() {
  return {
    type:"GET_TESTIMONIAL",
  }
}
export function deleteTestimonial(data) {
  return {
    type:"DELETE_TESTIMONIAL",
    payload:data
  }
}

