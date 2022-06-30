import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import returnIcon from 'assets/images/icon/return.svg';
import { EmptyShoppingCart } from 'component/emptyShoppingCart/EmptyShoppingCart';
import { ShoppingCartItem } from 'component/shoppingCart/shoppingCartItem/ShoppingCartItem';
import s from 'component/shoppingCart/style.module.scss';
import { WrapperDescription } from 'component/shoppingCart/WrapperDescription';
import { WrapperTop } from 'component/shoppingCart/wrapperTop/WrapperTop';
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
      <WrapperTop onClearItemsClick={onClearItemsClick} />

      <div className={s.shoppingCart__wrapper}>
        {itemsProduct.map(item => (
          <div key={item.id}>
            <ShoppingCartItem item={item} />
          </div>
        ))}
      </div>

      <WrapperDescription />

      <div className={s.shoppingCart__wrapper_btn}>
        <Link className={s.shoppingCart__btn_return} to={PathNavigation.PRODUCT}>
          <img src={returnIcon} alt="return" />
          Повернутися назад
        </Link>

        <button className={s.shoppingCart__btn} type="button">
          Оплатити зараз
        </button>
      </div>
    </div>
  );
};
