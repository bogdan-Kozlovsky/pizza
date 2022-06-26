import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { EmptyShoppingCart } from 'component/emptyShoppingCart/EmptyShoppingCart';
import { ShoppingCartItem } from 'component/shoppingCart/shoppingCartItem/ShoppingCartItem';
import s from 'component/shoppingCart/style.module.scss';
import { PathNavigation } from 'enums/navigation';
import { useAppSelector } from 'hooks/useAppSelector';
import { selectItemsProduct, selectTotalPrice } from 'store/cart/selectors';
import { clearItems } from 'store/cart/slices';

export const ShoppingCart = () => {
  const dispatch = useDispatch();

  const itemsProduct = useAppSelector(selectItemsProduct);
  const totalPrice = useAppSelector(selectTotalPrice);

  const onClearItemsClick = () => {
    // eslint-disable-next-line no-alert,no-restricted-globals
    const isDone = confirm('Ви точно хочете очистить корзину?');
    if (isDone) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <EmptyShoppingCart />;
  }

  return (
    <div className={s.shoppingCart}>
      <div className={s.shoppingCart__wrapper_top}>
        <h3 className={s.shoppingCart__title}>
          <img
            className={s.shoppingCart__icon}
            src="/images/icon/shopping-cart.svg"
            alt="shopping"
          />
          Корзина
        </h3>
        <button
          onClick={onClearItemsClick}
          type="button"
          className={s.shoppingCart__btn_clear}
        >
          <img
            className={s.shoppingCart__icon}
            src="/images/icon/clear.svg"
            alt="shopping"
          />
          Очистить корзину
        </button>
      </div>

      <div className={s.shoppingCart__wrapper}>
        {itemsProduct.map(item => (
          <div key={item.id}>
            <ShoppingCartItem item={item} />
          </div>
        ))}
      </div>

      <div className={s.shoppingCart__wrapper_description}>
        <span className={s.shoppingCart__span}>
          Всего пицц:{' '}
          <span className={s.shoppingCart__black}>{itemsProduct.length} шт.</span>
        </span>
        <span className={s.shoppingCart__span}>
          Сумма заказа: <span className={s.shoppingCart__orange}>{totalPrice}</span>
        </span>
      </div>

      <div className={s.shoppingCart__wrapper_btn}>
        <Link className={s.shoppingCart__btn_return} to={PathNavigation.PRODUCT}>
          <img src="/images/icon/return.svg" alt="return" />
          Вернуться назад
        </Link>

        <button className={s.shoppingCart__btn} type="button">
          Оплатить сейчас
        </button>
      </div>
    </div>
  );
};
