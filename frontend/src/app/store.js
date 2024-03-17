import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../redux/reducers/searchBox';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
