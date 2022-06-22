import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { axiosConfig } from 'api/config';
import {
  InitialStateType,
  ProductItemType,
  SearchPizzaParams,
} from 'store/slices/product/types';

const initialState: InitialStateType = {
  items: [],
  status: 'loading',
};

export const fetchProducts = createAsyncThunk<ProductItemType[], SearchPizzaParams>(
  'product/fetchProducts',
  async params => {
    const { activeIndexPagination, isSortBy, isOrder, search, isCategory } = params;
    const { data } = await axios.get<ProductItemType[]>(
      `${axiosConfig.baseURL}?${search}${isCategory}&sortBy=${isSortBy}&order=${isOrder}&page=${activeIndexPagination}&limit=4`,
    );
    return data;
  },
);

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
