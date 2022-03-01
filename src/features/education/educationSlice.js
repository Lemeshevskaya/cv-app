import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  educations: [],
  status: "init",
};

export const getEducations = createAsyncThunk(
  "education/getEducations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("api/educations", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const educationThunk = createSlice({
  name: "educations",
  initialState,
  reducers: {},
  extraReducers: {
    [getEducations.pending]: (state) => {
      return {
        ...state,
        status: "loading",
      };
    },
    [getEducations.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: false,
        educations: payload,
      };
    },
    [getEducations.rejected]: (state, action) => {
      return {
        ...state,
        status: false,
      };
    },
  },
});

export default educationThunk.reducer;