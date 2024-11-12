import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_KEY, API_URL, BASE_BRANDS_IMAGE_URL} from '@env';

import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = API_URL;
axios.defaults.headers['X-API-KEY'] = API_KEY;
axios.defaults.headers['Content-Type'] = 'multipart/form-data';

const loginProcess = createAsyncThunk('auth/loginProcess', async data => {
  const {email, password} = data;
  const params = new FormData();
  params.append('email', email);
  params.append('password', password);
  try {
    const response = await axios.post('login', params);

    // Yanıtın yapısını kontrol et
    if (response.data && response.data.status === 'success') {
      // Başarılı ise kullanıcı verilerini AsyncStorage'a kaydet
      await AsyncStorage.setItem(
        '@USERDATA',
        JSON.stringify(response.data.data),
      );
      return response.data;
    } else {
      // Yanıt başarısızsa mesajı döndür
      return rejectWithValue(
        response.data.message || 'Giriş işlemi başarısız.',
      );
    }
  } catch (error) {
    // Hata durumunda mesajı döndür
    return rejectWithValue(
      error.response?.data?.message ||
        'Giriş işlemi sırasında bir hata oluştu.',
    );
  }
});

const logoutProcess = createAsyncThunk(
  'auth/logoutProcess',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('logout'); // API'den logout isteği
      await AsyncStorage.removeItem('@USERDATA'); // Kullanıcı verisini sil
      return res.data; // İstek sonucunu döndür
    } catch (error) {
      console.log('Logout error:', error);
      return thunkAPI.rejectWithValue(error.response?.data || 'Logout failed');
    }
  },
);

const registerProcess = createAsyncThunk('auth/registerProcess', async data => {
  const {email, password, telephone, name} = data;
  const params = new FormData();
  params.append('email', email);
  params.append('password', password);
  params.append('telephone', telephone);
  params.append('name', name);
  try {
    const res = await axios.post('register', params);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

// export const postBrandProduct = createAsyncThunk(
//   `brandProduct/postBrandProduct`,
//   async data => {
//     const {page, per_page, brand_id, sorting} = data;
//     const params = new FormData();
//     params.append('page', page);
//     params.append('per_page', per_page);
//     params.append('brand_id', brand_id);
//     params.append('sorting', sorting);
//     try {
//       const res = await axios.post('brands', params);
//       return res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   },
// );
export const getBrandProduct = createAsyncThunk(
  `productList/getBrandProduct`,
  async () => {
    try {
      const res = await axios.get('brands');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);
export const getMemberInfo = createAsyncThunk(
  'memberInfo/getMemberInfo',
  async () => {
    try {
      const res = await axios.get('memberInfo');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);
export const getSlider = createAsyncThunk('slider/getSlider', async () => {
  try {
    const res = await axios.get('sliders');
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
const categoriesProcess = createAsyncThunk(
  'categories/categoriesProcess',
  async () => {
    try {
      const res = await axios.get('firstCategories');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);
const secondCategoriesProcess = createAsyncThunk(
  'secondCategories/secondCategoriesProcess',
  async categoryId => {
    try {
      const res = await axios.post('secondCategories', {
        first_category_id: categoryId,
      });
      return res.data;
    } catch (error) {
      console.error(
        'API Request Error:',
        error.response ? error.response.data : error.message,
      );
      throw error;
    }
  },
);

const thirdCategoriesProcess = createAsyncThunk(
  'thirdCategories/thirdCategoriesProcess',
  async categoryId => {
    try {
      const res = await axios.post('thirdCategories', {
        second_category_id: categoryId,
      });
      return res.data;
    } catch (error) {
      console.error(
        'API Request Error:',
        error.response ? error.response.data : error.message,
      );
      throw error;
    }
  },
);
export {
  registerProcess,
  loginProcess,
  logoutProcess,
  categoriesProcess,
  secondCategoriesProcess,
  thirdCategoriesProcess,
};
