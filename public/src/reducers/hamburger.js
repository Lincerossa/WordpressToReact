import { HAMBURGER__OPEN } from '../constants';
import { HAMBURGER__CLOSE } from '../constants';

const hamburger = (open = false, action) => {
  switch (action.type) {
    case HAMBURGER__CLOSE:
      return false;
    case HAMBURGER__OPEN:
      return true;
    default:
      return open;
  }
};

export default hamburger;

