import { createSlice } from '@reduxjs/toolkit';
import { makeAppData } from '../data/application-table';

export const appSlice = createSlice({
  name: 'app',
  initialState: makeAppData(20,10),
  reducers: {
    updateApp: (state, action) => {
      return state.map((row, index) => {
        if (index === action.payload.rowIndex) {
          return {
            ...state[action.payload.rowIndex],
            [action.payload.columnId]: action.payload.value,
          };
        }
        return row;
      })
    },
  },
});

export const { updateApp } = appSlice.actions;

export default appSlice.reducer;
