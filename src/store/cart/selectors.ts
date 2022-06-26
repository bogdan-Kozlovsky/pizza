import { ItemType } from 'store/cart/types';
import { RootState } from 'store/store';

export const selectTotalPrice = (state: RootState): number => state.cart.totalPrice;
export const selectItemsProduct = (state: RootState): ItemType[] => state.cart.items;
