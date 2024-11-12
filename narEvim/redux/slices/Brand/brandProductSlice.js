import {createSlice} from '@reduxjs/toolkit';
import {getBrandProduct} from '../../../api/index';

export const brandProductSlice = createSlice({
  name: 'productList',
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
      .addCase(getBrandProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBrandProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action?.payload?.data;
      })
      .addCase(getBrandProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export const {checkSignedIn} = brandProductSlice.actions;
export default brandProductSlice.reducer;
