import { combineReducers, configureStore } from '@reduxjs/toolkit';

import cart from 'store/slices/cart';
import filter from 'store/slices/filter';

const rootReducer = combineReducers({
  filter,
  cart,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
