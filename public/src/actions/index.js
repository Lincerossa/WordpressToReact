export const COUNTER__INCREMENT =  'COUNTER__INCREMENT'
export const COUNTER__DECREMENT = 'COUNTER__DECREMENT'
export const HAMBURGER__CLOSE = 'HAMBURGER__CLOSE'
export const HAMBURGER__OPEN = 'HAMBURGER__OPEN'

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