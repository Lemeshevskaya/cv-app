import { combineReducers } from 'redux';
import { visibilityReducer } from './visibilityReducer';

const reducers = {
  visibility: visibilityReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
