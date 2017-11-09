import { combineReducers } from 'redux';
import counter from './counter';
import hamburger from './hamburger';

const rootReducer = combineReducers({
  conteggio: counter,
  hamburgerIsOpen: hamburger,
});

export default rootReducer;
