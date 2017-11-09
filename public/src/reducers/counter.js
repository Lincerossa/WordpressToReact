import { COUNTER__INCREMENT } from '../actions';
import { COUNTER__DECREMENT } from '../actions';

const counter = (count = 0, action) => {
  switch (action.type) {
    case COUNTER__INCREMENT:
      return count + 1;
    case COUNTER__DECREMENT:
      return count - 1;
    default:
      return count
  }
};

export default counter;
