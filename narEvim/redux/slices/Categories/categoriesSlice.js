import {categoriesProcess} from '../../../api';
import {createSlice} from '@reduxjs/toolkit';
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [], // Veriler için boş bir dizi
    status: '', // Status için boş bir string
    isLoading: false, // Yüklenme durumu
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(categoriesProcess.pending, state => {
        state.isLoading = true;
        state.status = 'loading';
        state.error = null;
      })
      .addCase(categoriesProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(categoriesProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
