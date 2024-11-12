

// const brandProdListSlice = createSlice({
//     name: "brandProdList",
//     initialState,
//     reducers: {
//         resetBrandProdList: (state) => {
//             state.data = [];
//             state.status = 'idle';
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchBrandProd.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(fetchBrandProd.fulfilled, (state, action: PayloadAction<BrandProdState>) => {
//                 state.status = "succeeded";
//                 state.data = action.payload.data;
//                 state.message = action.payload.message;
//                 state.error_code = action.payload.error_code;
//             })
//             .addCase(fetchBrandProd.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.message = action.error.message || "Fetch failed";
//             });
//     }
// });

// export const {resetBrandProdList} = brandProdListSlice.actions;   

// export default brandProdListSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk for fetching brand products
// export const fetchBrandProd = createAsyncThunk(
//   'brandProdList/fetchBrandProd',
//   async (params) => {
//     const response = await axios.get('/api/brand/products', { params });
//     return response.data;
//   }
// );

// // Slice
// const brandProdListSlice = createSlice({
//   name: 'brandProdList',
//   initialState: {
//     data: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     resetBrandProdList(state) {
//       state.data = [];
//       state.status = 'idle';
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchBrandProd.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchBrandProd.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchBrandProd.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { resetBrandProdList } = brandProdListSlice.actions;

// export default brandProdListSlice.reducer;
