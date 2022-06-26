import { ItemType } from 'store/cart/types';

const FIRST_COUNT = 0;

export const calcTotalPrice = (items: ItemType[]) =>
  items.reduce((acc, obj) => obj.price * obj.count + acc, FIRST_COUNT);
