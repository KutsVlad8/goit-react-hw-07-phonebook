import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  query: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filter(state, action) {
      state.query = action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
