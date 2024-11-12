import {createSlice} from '@reduxjs/toolkit';
import {loginProcess, logoutProcess, registerProcess} from '../../api';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: {},
    isLoading: false,
    error: '',
    status: undefined,
    isSignedIn: '-1', // Varsayılan olarak '-1', '1' ise giriş yapıldı, '0' ise çıkış yapıldı
  },
  reducers: {
    checkSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // Login işlemleri
      .addCase(loginProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.status = action.payload.status;
        state.isSignedIn = '1'; // Giriş yapıldı
      })
      .addCase(loginProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.isSignedIn = '0'; // Giriş başarısız
        state.status = action.payload?.status;
      })
      // Logout işlemleri
      .addCase(logoutProcess.pending, state => {
        state.isLoading = true; // Çıkış işlemi başladığında loading durumu
      })
      .addCase(logoutProcess.fulfilled, state => {
        state.isLoading = false;
        state.isSignedIn = '0'; // Çıkış başarılı
        state.data = {}; // Kullanıcı verisini sıfırlıyoruz
        state.status = 'success'; // Başarı durumu
      })
      .addCase(logoutProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Logout failed'; // Hata mesajını kaydet
        state.status = 'error'; // Hata durumu
      })
      // Register işlemleri
      .addCase(registerProcess.pending, state => {
        state.isLoading = true; // Kayıt işlemi başladığında loading durumu
      })
      .addCase(registerProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data; // Kayıt başarılı, kullanıcı verisi kaydediliyor
        state.status = action.payload.status;
        state.isSignedIn = '1'; // Kayıt sonrası kullanıcıyı giriş yapmış gibi işaretliyoruz
      })
      .addCase(registerProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Hata mesajını kaydet
        state.status = action.payload?.status;
      });
  },
});

export const {checkSignedIn} = authSlice.actions;
export default authSlice.reducer;
