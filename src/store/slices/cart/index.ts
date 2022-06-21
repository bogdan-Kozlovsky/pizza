import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  totalPrice: number;
  items: ItemType[];
};

export type ItemType = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  type: number;
  size: number;
  count: number;
};

const initialState: InitialStateType = {
  totalPrice: 0,
  items: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
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
    decrementItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(f => f.id !== action.payload);
      state.totalPrice = 0;
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, decrementItem, clearItems } = cart.actions;
export default cart.reducer;
