import { COUNTER__INCREMENT } from '../constants'
import { COUNTER__DECREMENT } from '../constants'

export const counterIncrement = (initialState) => {
  return { type: COUNTER__INCREMENT, initialState }
}

export const counterDecrement = (initialState) => {
  return { type: COUNTER__DECREMENT, initialState }
}
