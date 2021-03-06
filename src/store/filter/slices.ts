import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateType } from 'store/filter/types';

const initialState: InitialStateType = {
  itemCategoryIndex: 0,
  itemSortValue: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filter = createSlice({
  name: 'filer',
  initialState,
  reducers: {
    setItemCategoryIndex(state, action: PayloadAction<number>) {
      state.itemCategoryIndex = action.payload;
    },
    setItemSortValue(
      state,
      action: PayloadAction<{ name: string; sortProperty: string }>,
    ) {
      state.itemSortValue = action.payload;
    },
  },
});

export const { setItemCategoryIndex, setItemSortValue } = filter.actions;
export default filter.reducer;
