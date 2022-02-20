import { combineReducers } from 'redux';
import  visibilityReducer  from '../features/panel/panelSlice';
import educationReducer from '../features/education/educationSlice'

const reducers = {
  visibility: visibilityReducer,
  education: educationReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
