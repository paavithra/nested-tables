import { createSlice } from '@reduxjs/toolkit';
import { makeVendorData } from '../data/vendor-table';

export const vendorSlice = createSlice({
  name: 'vendor',
  initialState: makeVendorData(10),
  reducers: {
    updateVendor: (state, action) => {
      console.log(action)
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

export const { updateVendor } = vendorSlice.actions;

export default vendorSlice.reducer;
