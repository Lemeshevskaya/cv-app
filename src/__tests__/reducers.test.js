import  visibilityReducer, { showAction, hideAction } from '../features/panel/panelSlice';
import educationReducer, { getEducations } from '../features/education/educationSlice';

//visibility

test('visibility - should return the initial state', () => {
  expect(visibilityReducer(undefined, {})).toEqual(
    {show: true})
});

test('visibility - should add new value true to existing list', () => {
  const previousState = {show: false};
  expect(visibilityReducer(previousState, showAction())).toEqual(
    {show: true})
})

test('visibility - should add new value false to existing list', () => {
  const previousState = {show: true};
  expect(visibilityReducer(previousState, hideAction())).toEqual(
    {show: false})
})

//get educations

test('educations - should return the initial state', () => {
  expect(educationReducer(undefined, {})).toEqual(
    {educations: [], status: 'init'})
});

test('educations - should add new value to existing list', () => {
  const previousState = {
    educations: [],
    status: 'init',
  };
  const newState = { 
    "date": 2001, 
    "title": "Title 0", 
    "text": "Elit voluptate ad nostrud laboris." 
  }
  
  expect(educationReducer(previousState, getEducations.fulfilled({payload: newState}))).toEqual(
    {
      educations: {
        payload: 
          { 
            "date": 2001, 
            "title": "Title 0", 
            "text": "Elit voluptate ad nostrud laboris." 
          } 
      },
      status: false
    }
  )
})

test('educations - pending', () => {
  const previousState = {
    educations: [],
    status: 'init',
  };
  expect(educationReducer(previousState, getEducations.pending())).toEqual(
    {
      educations: [],
      status: 'loading'
    }
  )
})

test('educations - rejected', () => {
  const previousState = {
    educations: [],
    status: 'init',
  };
  expect(educationReducer(previousState, getEducations.rejected())).toEqual(
    {
      educations: [],
      status: false
    }
  )
})