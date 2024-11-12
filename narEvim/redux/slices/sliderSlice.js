import {createSlice} from '@reduxjs/toolkit';
import {getSlider} from '../../api';
export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    data: undefined,
    isLoading: false,
    error: undefined,
  },
  reducers: {
    checkSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSlider.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSlider.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload?.data;
      })
      .addCase(getSlider.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export const {checkSignedIn} = sliderSlice.actions;
export default sliderSlice.reducer;
