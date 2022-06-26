import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateType, ItemType } from 'store/cart/types';
import { calcTotalPrice } from 'utils/calcTotalPrice';
import { getCartLocalStorage } from 'utils/getCartLocalStorage';

const { totalPrice, items } = getCartLocalStorage();

const initialState: InitialStateType = {
  totalPrice,
  items,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ItemType>) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      // state.totalPrice = state.items.reduce((acc, obj) => obj.price * obj.count + acc, 0);
      state.totalPrice = calcTotalPrice(state.items);
    },
    decrementItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find(obj => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(f => f.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, decrementItem, clearItems } = cart.actions;
export default cart.reducer;
