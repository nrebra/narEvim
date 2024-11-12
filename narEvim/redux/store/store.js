import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import logger from 'redux-logger';
import sliderSlice from '../slices/sliderSlice';
import brandProductSlice from '../slices/Brand/brandProductSlice';
import memberInfoSlice from '../slices/Auth/memberInfoSlice';
import categoriesSlice from '../slices/Categories/categoriesSlice';
import thirdCategoriesSlice from '../slices/Categories/thirdCategoriesSlice';
import secondCategoriesSlice from '../slices/Categories/secondCategoriesSlice';
import fetchBrandSlice from '../slices/Brand/fetchBrandSlice';
import sortSlice from '../slices/Brand/sortSlice';

const reducer = combineReducers({
  auth: authSlice,
  slider: sliderSlice,
  brandProduct: brandProductSlice,
  memberInfo: memberInfoSlice,
  categories: categoriesSlice,
  thirdCategories: thirdCategoriesSlice,
  secondCategories: secondCategoriesSlice,
  sort: sortSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
