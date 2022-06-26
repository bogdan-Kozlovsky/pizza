import { ItemType } from 'store/cart/types';
import { calcTotalPrice } from 'utils/calcTotalPrice';

export const getCartLocalStorage = () => {
  const data = localStorage.getItem('product');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as ItemType[],
    totalPrice,
  };
};
