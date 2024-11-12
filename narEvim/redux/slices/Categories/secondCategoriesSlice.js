import {createSlice} from '@reduxjs/toolkit';
import {secondCategoriesProcess} from '../../../api';
export const secondCategoriesSlice = createSlice({
  name: 'secondCategories',
  initialState: {
    data: [],
    status: '',
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(secondCategoriesProcess.pending, state => {
        state.status = 'loading'; // Veriler yüklenirken
        state.error = null; // Hata sıfırlanıyor
      })
      .addCase(secondCategoriesProcess.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Veriler başarıyla yüklendi
        state.data = action.payload.data; // Gelen verileri state'e kaydet
      })
      .addCase(secondCategoriesProcess.rejected, (state, action) => {
        state.status = 'failed'; // İstek başarısız
        state.error = action.error.message; // Hata mesajını kaydet
      });
  },
});

export default secondCategoriesSlice.reducer;
