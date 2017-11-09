import { COUNTER__INCREMENT } from '../constants'
import { COUNTER__DECREMENT } from '../constants'
import { GET__POSTS } from '../constants'

export const counterIncrement = (initialState) => {
  return { type: COUNTER__INCREMENT, initialState }
}

export const counterDecrement = (initialState) => {
  return { type: COUNTER__DECREMENT, initialState }
}

export const reducer_getPosts = (initialState) => {
  return { type: GET__POSTS, initialState}
}