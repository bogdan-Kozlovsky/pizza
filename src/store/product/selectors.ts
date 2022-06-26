import { ProductItemType } from 'store/product/types';
import { RootState } from 'store/store';

export const selectStatus = (state: RootState): string => state.product.status;
export const selectItems = (state: RootState): ProductItemType[] => state.product.items;
