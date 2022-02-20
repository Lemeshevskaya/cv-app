import { createSlice } from '@reduxjs/toolkit'

const initialState = {show: true};

const visibilitySlice = createSlice({
  name: 'visibilityAction',
  initialState,
  reducers: {
    showAction(state) {
      return {
        ...state, show: true
      }
    },
    hideAction(state) {
      return {
        ...state, show: false
      }
    }
  }
})

export const { showAction, hideAction } = visibilitySlice.actions
export default visibilitySlice.reducer