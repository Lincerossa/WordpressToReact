import { combineReducers } from 'redux';
import counter from './counter';
import hamburger from './hamburger';

const rootReducer = combineReducers({
  conteggio: counter,
  hamburger: hamburger,
});

export default rootReducer;
