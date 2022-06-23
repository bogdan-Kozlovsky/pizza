import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts } from 'store/asyncThunk/product';
import { InitialStateType } from 'store/slices/product/types';

const initialState: InitialStateType = {
  items: [],
  status: 'loading',
};

const product = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    // @ts-ignore
    [fetchProducts.pending]: state => {
      state.status = 'loading';
      state.items = [];
    },
    // @ts-ignore
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    // @ts-ignore
    [fetchProducts.rejected]: state => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export default product.reducer;

// export const {} = product.actions;
