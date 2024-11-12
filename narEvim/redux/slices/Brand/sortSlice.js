import {createSlice} from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sort',
  initialState: 'ASC',
  reducers: {
    setSortOrder(state, action) {
      return action.payload;
    },
  },
});

export const {setSortOrder} = sortSlice.actions;

export default sortSlice.reducer;
