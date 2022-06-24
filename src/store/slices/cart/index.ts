import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateType, ItemType } from 'store/slices/cart/types';

const initialState: InitialStateType = {
  totalPrice: 0,
  items: [],
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
      state.totalPrice = state.items.reduce((acc, obj) => obj.price * obj.count + acc, 0);
    },
    decrementItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find(obj => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      // state.totalPrice =
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
