import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  skills: [],
  statusGet: 'init',
  statusPost: 'init'
}

export const postSkills = createAsyncThunk(
  'skills/postSkills',
  async (skill, { rejectWithValue }) => {
    try {
      const response = await fetch('api/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: skill.name, range: skill.range}),
      })
      const data = await response.json();
      return data
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data)
    }
  }
)

export const getSkills = 
    createAsyncThunk(
      'skills/getSkills',
      async (_, { rejectWithValue }) => {
        try {
          if (localStorage.getItem('skill')) {
            return JSON.parse(localStorage.getItem('skill'));
          } else {
            const response = await fetch('api/skills', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
            })
            const data = await response.json();
            return data
          }
        } catch (err) {
          console.log(err);
          return rejectWithValue(err.response.data)
        }
      }
    )

const skillsThunk = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
  extraReducers: {
    [postSkills.pending]: (state) => {
      return {
        ...state,  statusPost: 'loading'
      }
    },
    [postSkills.fulfilled]: (state, {payload}) => {
      return {
        ...state,  statusPost: false
      }
    },
    [postSkills.rejected]: (state, action) => {
      return {
        ...state,  statusPost: false
      }
    },
    [getSkills.pending]: (state) => {
      return {
        ...state,  statusGet: 'loading'
      }
    },
    [getSkills.fulfilled]: (state, {payload}) => {
      return {
        ...state,  statusGet: false, skills: payload
      }
    },
    [getSkills.rejected]: (state, action) => {
      return {
        ...state,  statusGet: false
      }
    },
  },
})

export default skillsThunk.reducer;
