import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    updateFilter(state, actions) {
      state.filter = actions.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
