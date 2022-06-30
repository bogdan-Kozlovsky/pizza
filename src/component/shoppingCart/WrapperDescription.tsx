import React from 'react';

import s from 'component/shoppingCart/style.module.scss';
import { useAppSelector } from 'hooks/useAppSelector';
import { selectItemsProduct, selectTotalPrice } from 'store/cart/selectors';

export const WrapperDescription = () => {
  const itemsProduct = useAppSelector(selectItemsProduct);
  const totalPrice = useAppSelector(selectTotalPrice);
  return (
    <div className={s.shoppingCart__wrapper_description}>
      <span className={s.shoppingCart__span}>
        Всього піц:{' '}
        <span className={s.shoppingCart__black}>{itemsProduct.length} шт.</span>
      </span>
      <span className={s.shoppingCart__span}>
        Сума замовлення: <span className={s.shoppingCart__orange}>{totalPrice} </span>ua
      </span>
    </div>
  );
};
