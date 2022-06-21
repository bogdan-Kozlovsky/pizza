import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { axiosConfig } from 'api/config';

type InitialStateType = {
  items: ProductItemType[];
  status: 'loading' | 'success' | 'error';
};

export type ProductItemType = {
  id: number;
  imageUrl: string;
  name: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
};

export type SearchPizzaParams = {
  isSortBy: string;
  isOrder: string;
  isCategory: string;
  search: string;
  activeIndexPagination: number;
};

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
