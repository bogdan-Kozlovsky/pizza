import { ItemType } from 'store/slices/cart/types';
import { ItemSortValueType } from 'store/slices/filter/types';
import { ProductItemType } from 'store/slices/product/types';
import { RootState } from 'store/store';

export const selectStatus = (state: RootState): string => state.product.status;
export const selectItems = (state: RootState): ProductItemType[] => state.product.items;

export const selectCategoryIndex = (state: RootState): number =>
  state.filter.itemCategoryIndex;
export const selectSortModal = (state: RootState): ItemSortValueType =>
  state.filter.itemSortValue;

export const selectTotalPrice = (state: RootState): number => state.cart.totalPrice;
export const selectItemsProduct = (state: RootState): ItemType[] => state.cart.items;
