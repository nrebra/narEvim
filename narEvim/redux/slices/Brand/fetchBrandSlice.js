import { createSlice } from "@reduxjs/toolkit";
import { fetchBrandProd } from "../../../api";

const initialState = {
    data: [],
    message: '',
    status: '',
    image_path: '',
    error_code: '',
};

export const fetchBrandSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchBrandProd.fulfilled, (state, action) => {
            // Burada action.payload'ın uygun veri formatında olduğunu varsayıyoruz
            state.data = action.payload.data;
            state.message = action.payload.message;
            state.status = action.payload.status;
            state.image_path = action.payload.image_path;
            state.error_code = action.payload.error_code;
        });
        builder.addCase(fetchBrandProd.rejected, (state, action) => {
            state.message = action.error.message || 'Fetch failed';
            state.status = 'error';
        });
    }
});
export const {checkSignedIn} = fetchBrandSlice.actions;
export default fetchBrandSlice.reducer;
