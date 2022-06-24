import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { axiosConfig } from 'api/config';
import { ProductItemType, SearchPizzaParams } from 'store/slices/product/types';

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
