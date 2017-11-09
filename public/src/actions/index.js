import { COUNTER__INCREMENT } from '../constants'
import { COUNTER__DECREMENT } from '../constants'
import { HAMBURGER__CLOSE } from '../constants'
import { HAMBURGER__OPEN } from '../constants'

export const counterIncrement = (initialState) => {
  return { type: COUNTER__INCREMENT, initialState }
}

export const counterDecrement = (initialState) => {
  return { type: COUNTER__DECREMENT, initialState }
}

export const hamburgerClose = (initialState) => {
  return { type: HAMBURGER__CLOSE, initialState }
}

export const hamburgerOpen = (initialState) => {
  return { type: HAMBURGER__OPEN, initialState }
}