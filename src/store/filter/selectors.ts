import { ItemSortValueType } from 'store/filter/types';
import { RootState } from 'store/store';

export const selectCategoryIndex = (state: RootState): number =>
  state.filter.itemCategoryIndex;
export const selectSortModal = (state: RootState): ItemSortValueType =>
  state.filter.itemSortValue;
