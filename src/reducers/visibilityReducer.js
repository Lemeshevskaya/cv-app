import { createReducer } from '@reduxjs/toolkit';
import { showAction, hideAction } from '../actions/visibilityAction'

const initialState = {show: true};

export const visibilityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showAction, (state, action) => {
      return {
        ...state, show: true
      }}
    )
    .addCase(hideAction, (state, action) => {
      return {
        ...state, show: false
      }
    })
})