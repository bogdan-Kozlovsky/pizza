import React from 'react';

import { Link } from 'react-router-dom';

import s from 'component/header/style.module.scss';
import { PathNavigation } from 'enums/navigation';
import { useAppSelector } from 'hooks/useAppSelector';
import { selectItemsProduct, selectTotalPrice } from 'store/selectors';

export const ButtonCart = () => {
  const totalPrice = useAppSelector(selectTotalPrice);
  const itemsProduct = useAppSelector(selectItemsProduct);

  return (
    <Link className={`btn ${s.header__card_link}`} to={PathNavigation.SHOPPING_CART}>
      <span className={s.header__card_wrapper}>
        <span>{totalPrice}</span>
        <img className={s.header__card_icon} src="/images/icon/price.svg" alt="price" />
      </span>
      <span className={s.header__card_decor} />
      <span className={s.header__card_wrapper}>
        <span>{itemsProduct.length}</span>
        <img
          className={s.header__card_icon}
          src="/images/icon/shopping.svg"
          alt="shopping"
        />
      </span>
    </Link>
  );
};
