import { COUNTER__INCREMENT } from '../constants'
import { COUNTER__DECREMENT } from '../constants'

///////Best practices/////////

// 1] Action-creators can be asynchronous through the use of middleware like redux-thunk
// 2] redux-thunk, a single action-creator can dispatch multiple actions
// 3] you should write one set of tests that cover a given set of actions, reducers, and selectors rather than 3 sets of tests that focus on each individually.
//    it's useful to write tests that focus on action-creators and then verify the outcome using selectors. (Don't directly test reducers.) 

export const counterIncrement = (initialState) => {
  return { type: COUNTER__INCREMENT, initialState }
}

export const counterDecrement = (initialState) => {
  return { type: COUNTER__DECREMENT, initialState }
}