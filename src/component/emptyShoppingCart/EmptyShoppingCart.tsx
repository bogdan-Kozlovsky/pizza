import React from 'react';

import { Link } from 'react-router-dom';

import emptyShoppingCart from 'assets/images/empty-shopping-cart.jpg';
import { Description } from 'component/emptyShoppingCart/Description';
import s from 'component/emptyShoppingCart/style.module.scss';
import { PathNavigation } from 'enums/navigation';

export const EmptyShoppingCart = () => (
  <div className={s.emptyShoppingCart}>
    <h2 className={s.emptyShoppingCart__title}>Кошик порожній 🥲</h2>

    <Description />

    <img
      className={s.emptyShoppingCart__img}
      src={emptyShoppingCart}
      alt="empty-shopping-cart"
    />

    <Link className={s.emptyShoppingCart__link} to={PathNavigation.PRODUCT}>
      Повернутися назад
    </Link>
  </div>
);
