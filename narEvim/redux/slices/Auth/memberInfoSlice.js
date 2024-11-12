import {createSlice} from '@reduxjs/toolkit';
import {getMemberInfo} from '../../../api';

export const memberInfoSlice = createSlice({
  name: 'memberInfo',
  initialState: {
    data: undefined,
    isLoading: false,
    error: undefined,
    message: undefined,
    status: undefined,
  },
  reducers: {
    checkSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getMemberInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.status = action.payload.status;
        state.data = action?.payload?.data;
      })
      .addCase(getMemberInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error.message || 'Logout failed';
      });
  },
});

export const {checkSignedIn} = memberInfoSlice.actions;
export default memberInfoSlice.reducer;
