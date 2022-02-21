import { combineReducers } from 'redux';
import  visibilityReducer  from '../features/panel/panelSlice';
import educationReducer from '../features/education/educationSlice';
import skillsReducer from '../features/skills/skillsSlice';

const reducers = {
  visibility: visibilityReducer,
  education: educationReducer,
  skills: skillsReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
