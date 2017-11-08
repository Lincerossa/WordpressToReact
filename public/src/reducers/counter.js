import {COUNTER__INCREMENT} from '../constants';
import {COUNTER__DECREMENT} from '../constants';

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
