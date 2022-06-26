import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import cart from 'store/cart/slices';
import filter from 'store/filter/slices';
import product from 'store/product/slices';

const rootReducer = combineReducers({
  filter,
  cart,
  product,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
